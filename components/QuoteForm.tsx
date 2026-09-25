"use client";

import { FormEvent, useState } from "react";
import { CheckIcon } from "./icons";
import { site } from "@/lib/site";
import { LEAD_FIELDS, LEAD_REQUIRED_FIELDS } from "@/lib/leadForm";
import { useGhlTrackingStatus } from "@/lib/useGhlTrackingStatus";
import TurnstileWidget from "./TurnstileWidget";

export default function QuoteForm({
  title = "Get A Free Quote",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const trackingStatus = useGhlTrackingStatus();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const missing = LEAD_REQUIRED_FIELDS.some(
      (field) => !String(data.get(field) || "").trim()
    );

    if (missing) {
      setError("Please fill in all fields so we can get you an offer.");
      return;
    }

    // The GHL external-tracking script (loaded site-wide in app/layout.tsx)
    // listens for this form's native submit event and captures every field
    // by its `name` attribute. If that script hasn't finished loading yet
    // (slow connection), it never attached its listener and this submit
    // would silently go uncaptured -- so we hold off on "success" until we
    // know the script is either active or has definitively failed to load.
    if (trackingStatus === "pending") {
      setError("Still finishing loading, please wait a moment and press submit again.");
      return;
    }

    if (!turnstileToken) {
      setError("Please complete the verification check below.");
      return;
    }

    setVerifying(true);
    const verifyOk = await fetch("/api/verify-turnstile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: turnstileToken }),
    })
      .then((res) => res.json())
      .then((json) => json.success === true)
      .catch(() => false);
    setVerifying(false);

    if (!verifyOk) {
      setError("Verification failed, please try the check again.");
      setTurnstileToken(null);
      return;
    }

    setError("");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center shadow-card sm:p-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy-900">Thanks, we got it!</h3>
        <p className="mt-2 text-sm text-navy-500">
          A member of our team will call you shortly with your cash offer. Need it
          faster? Call us now at{" "}
          <a href={site.phoneHref} className="font-semibold text-gold-600">
            {site.phone}
          </a>
          .
        </p>
        {trackingStatus === "error" && (
          <p className="mt-2 text-xs text-navy-400">
            If you don&apos;t hear from us shortly, please call the number above
            directly so we don&apos;t miss you.
          </p>
        )}
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-outline-dark mt-5"
        >
          Submit another vehicle
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-xl font-bold text-navy-900">{title}</h3>
      {subtitle && <p className="mt-1.5 text-sm text-navy-500">{subtitle}</p>}
      <form
        id="quote-form-widget"
        name="quote-form-widget"
        onSubmit={handleSubmit}
        className="mt-5 space-y-4"
      >
        <div className="form-field">
          <label htmlFor="qf-name">Name</label>
          <input id="qf-name" name={LEAD_FIELDS.name} type="text" placeholder="Name" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-email">Email</label>
          <input id="qf-email" name={LEAD_FIELDS.email} type="email" placeholder="Email" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-phone">Phone</label>
          <input id="qf-phone" name={LEAD_FIELDS.phone} type="tel" placeholder="Phone" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-zip">Zip Code</label>
          <input id="qf-zip" name={LEAD_FIELDS.zip} type="text" placeholder="Zip Code" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-title">Do you have a title?</label>
          <input id="qf-title" name={LEAD_FIELDS.hasTitle} type="text" placeholder="Yes / No" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-runs">Does it run and drive?</label>
          <input id="qf-runs" name={LEAD_FIELDS.runsAndDrives} type="text" placeholder="Yes / No" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-vehicle">What is Make, Model and trim, and Year?</label>
          <textarea
            id="qf-vehicle"
            name={LEAD_FIELDS.vehicle}
            rows={3}
            placeholder="What is Make, Model and trim, and Year?"
            required
          />
        </div>
        <TurnstileWidget onVerify={setTurnstileToken} />
        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={!turnstileToken || verifying}
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {verifying ? "Verifying..." : "Get my cash offer"}
        </button>
        <p className="text-center text-xs text-navy-400">
          No spam. No obligation. Just a fair cash offer.
        </p>
      </form>
    </div>
  );
}
