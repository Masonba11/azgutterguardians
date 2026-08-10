import {
  submitQuote,
  type QuoteFormData,
  SERVICE_OPTIONS,
  HOME_SIZE_OPTIONS,
} from "@/lib/quote";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const data = body as Partial<QuoteFormData>;

  const payload: QuoteFormData = {
    name: String(data.name ?? ""),
    phone: String(data.phone ?? ""),
    email: String(data.email ?? ""),
    address: String(data.address ?? ""),
    serviceNeeded: (SERVICE_OPTIONS.includes(
      data.serviceNeeded as (typeof SERVICE_OPTIONS)[number],
    )
      ? data.serviceNeeded
      : "") as QuoteFormData["serviceNeeded"],
    homeSize: (HOME_SIZE_OPTIONS.includes(
      data.homeSize as (typeof HOME_SIZE_OPTIONS)[number],
    )
      ? data.homeSize
      : "") as QuoteFormData["homeSize"],
    message: String(data.message ?? ""),
  };

  const result = await submitQuote(payload);

  if (!result.ok) {
    return Response.json(result, { status: 400 });
  }

  return Response.json(result, { status: 200 });
}
