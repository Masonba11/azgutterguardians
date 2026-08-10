export const SERVICE_OPTIONS = [
  "Gutter Guard Installation",
  "Gutter Cleaning",
  "Gutter Repair",
  "Not Sure",
] as const;

export const HOME_SIZE_OPTIONS = [
  "Under 1,500 sq ft",
  "1,500–2,500 sq ft",
  "2,500–3,500 sq ft",
  "3,500+ sq ft",
] as const;

export type QuoteFormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceNeeded: (typeof SERVICE_OPTIONS)[number] | "";
  homeSize: (typeof HOME_SIZE_OPTIONS)[number] | "";
  message: string;
  /** Honeypot — must stay empty */
  botcheck?: string;
};

export type QuoteValidationErrors = Partial<
  Record<keyof QuoteFormData, string>
>;

export function validateQuoteForm(
  data: QuoteFormData,
): QuoteValidationErrors {
  const errors: QuoteValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  const phoneDigits = data.phone.replace(/\D/g, "");
  if (!data.phone.trim()) {
    errors.phone = "Phone is required.";
  } else if (phoneDigits.length < 10) {
    errors.phone = "Enter a valid phone number.";
  }

  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.address.trim()) {
    errors.address = "Property address or ZIP is required.";
  }

  if (!data.serviceNeeded) {
    errors.serviceNeeded = "Please select a service.";
  } else if (
    !SERVICE_OPTIONS.includes(
      data.serviceNeeded as (typeof SERVICE_OPTIONS)[number],
    )
  ) {
    errors.serviceNeeded = "Please select a valid service.";
  }

  if (
    data.homeSize &&
    !HOME_SIZE_OPTIONS.includes(
      data.homeSize as (typeof HOME_SIZE_OPTIONS)[number],
    )
  ) {
    errors.homeSize = "Please select a valid home size.";
  }

  if (data.botcheck) {
    errors.botcheck = "Spam detected.";
  }

  return errors;
}

/**
 * Form handling abstraction.
 * Primary: Web3Forms (client-side). Optional: QUOTE_WEBHOOK_URL via /api/quote/.
 */
export type QuoteSubmissionResult =
  | { ok: true; id: string }
  | { ok: false; error: string; fieldErrors?: QuoteValidationErrors };

function buildMessageBody(data: QuoteFormData): string {
  return [
    `Service Needed: ${data.serviceNeeded}`,
    `Home Size: ${data.homeSize || "Not provided"}`,
    `Property: ${data.address}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || "Not provided"}`,
    "",
    data.message.trim() || "(No additional message)",
  ].join("\n");
}

export async function submitQuoteToWeb3Forms(
  data: QuoteFormData,
  accessKey: string,
): Promise<QuoteSubmissionResult> {
  const fieldErrors = validateQuoteForm(data);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      error: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Quote Request — ${data.serviceNeeded || "Website"}`,
        from_name: "Arizona Gutter Guardians Website",
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email.trim() || undefined,
        address: data.address.trim(),
        service_needed: data.serviceNeeded,
        home_size: data.homeSize || "Not provided",
        message: buildMessageBody(data),
        botcheck: false,
      }),
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      return {
        ok: false,
        error:
          result.message ||
          "We could not submit your request right now. Please call us.",
      };
    }

    return { ok: true, id: `web3forms_${Date.now()}` };
  } catch {
    return {
      ok: false,
      error: "We could not submit your request right now. Please call us.",
    };
  }
}

export async function submitQuote(
  data: QuoteFormData,
): Promise<QuoteSubmissionResult> {
  const fieldErrors = validateQuoteForm(data);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      error: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const payload = {
    ...data,
    submittedAt: new Date().toISOString(),
    source: "website-quote-form",
  };

  if (process.env.QUOTE_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.QUOTE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        return {
          ok: false,
          error: "We could not submit your request right now. Please call us.",
        };
      }
    } catch {
      return {
        ok: false,
        error: "We could not submit your request right now. Please call us.",
      };
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[quote-submission]", payload);
  }

  return {
    ok: true,
    id: `quote_${Date.now()}`,
  };
}
