"use client";

import { FormEvent, useState } from "react";
import {
  HOME_SIZE_OPTIONS,
  SERVICE_OPTIONS,
  type QuoteFormData,
  type QuoteValidationErrors,
  validateQuoteForm,
} from "@/lib/quote";
import { Button } from "./Button";
import { business } from "@/config/business";

const initial: QuoteFormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  serviceNeeded: "",
  homeSize: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<QuoteFormData>(initial);
  const [errors, setErrors] = useState<QuoteValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState("");

  function update<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = validateQuoteForm(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const response = await fetch("/api/quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as {
        ok: boolean;
        error?: string;
        fieldErrors?: QuoteValidationErrors;
      };

      if (!response.ok || !result.ok) {
        if (result.fieldErrors) setErrors(result.fieldErrors);
        setServerError(
          result.error ?? "Something went wrong. Please try again or call us.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(initial);
    } catch {
      setServerError("Something went wrong. Please try again or call us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border border-primary/30 bg-light p-8 text-center"
        role="status"
      >
        <h2 className="text-2xl text-charcoal">Thank you — request received</h2>
        <p className="mt-3 text-medium leading-relaxed">
          We have your quote request and will follow up soon. If you need to
          speak with someone right away, call{" "}
          <a
            href={business.phoneTel}
            className="font-semibold text-primary-dark underline-offset-2 hover:underline"
          >
            {business.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStatus("idle")}
          >
            Submit another request
          </Button>
        </div>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-charcoal placeholder:text-medium/70";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </Field>

      <Field
        label="Property Address or ZIP"
        htmlFor="address"
        required
        error={errors.address}
      >
        <input
          id="address"
          name="address"
          autoComplete="street-address"
          className={fieldClass}
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          required
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Service Needed"
          htmlFor="serviceNeeded"
          required
          error={errors.serviceNeeded}
        >
          <select
            id="serviceNeeded"
            name="serviceNeeded"
            className={fieldClass}
            value={form.serviceNeeded}
            onChange={(e) =>
              update(
                "serviceNeeded",
                e.target.value as QuoteFormData["serviceNeeded"],
              )
            }
            required
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Approximate Home Size"
          htmlFor="homeSize"
          error={errors.homeSize}
        >
          <select
            id="homeSize"
            name="homeSize"
            className={fieldClass}
            value={form.homeSize}
            onChange={(e) =>
              update("homeSize", e.target.value as QuoteFormData["homeSize"])
            }
          >
            <option value="">Select if known</option>
            {HOME_SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about pine needles, leaks, or anything else we should know."
        />
      </Field>

      {serverError ? (
        <p className="text-sm text-red-700" role="alert">
          {serverError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="w-full uppercase sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Get My Free Quote"}
      </Button>

      <p className="text-sm text-medium">
        Prefer to talk? Call{" "}
        <a
          href={business.phoneTel}
          className="font-semibold text-primary-dark underline-offset-2 hover:underline"
        >
          {business.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-charcoal">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
