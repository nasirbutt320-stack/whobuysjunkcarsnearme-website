"use client";

import { FormEvent, useState } from "react";
import { CheckIcon } from "./icons";
import { site } from "@/lib/site";
import { LEAD_FIELDS, LEAD_REQUIRED_FIELDS } from "@/lib/leadForm";
import { useGhlTrackingStatus } from "@/lib/useGhlTrackingStatus";

export default function GetQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const trackingStatus = useGhlTrackingStatus();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const missing = LEAD_REQUIRED_FIELDS.some(
      (field) => !String(data.get(field) || "").trim()
    );

    if (missing) {
      setError("Please fill in all required fields marked with *.");
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

    setError("");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
          <CheckIcon className="h-9 w-9" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-navy-900">
          Your quote request is in!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-navy-500">
          We'll review your vehicle details and call you shortly with a cash
          offer. If you'd rather talk now, call us at{" "}
          <a href={site.phoneHref} className="font-semibold text-gold-600">
            {site.phone}
          </a>
          .
        </p>
        {trackingStatus === "error" && (
          <p className="mx-auto mt-2 max-w-md text-xs text-navy-400">
            If you don&apos;t hear from us shortly, please call the number above
            directly so we don&apos;t miss you.
          </p>
        )}
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-outline-dark mt-6"
        >
          Submit another vehicle
        </button>
      </div>
    );
  }

  return (
    <form
      id="get-a-quote-form"
      name="get-a-quote-form"
      onSubmit={handleSubmit}
      className="grid grid-cols-6 gap-x-3 gap-y-3 rounded-2xl bg-white p-5 shadow-card sm:p-6"
    >
      <div className="form-field order-1 col-span-6 sm:col-span-3">
        <label htmlFor="gq-name">
          Name <span className="text-gold-600">*</span>
        </label>
        <input id="gq-name" name={LEAD_FIELDS.name} type="text" placeholder="Your name" autoComplete="name" required />
      </div>

      <div className="form-field order-3 col-span-4 sm:order-2 sm:col-span-3">
        <label htmlFor="gq-phone">
          Phone <span className="text-gold-600">*</span>
        </label>
        <input id="gq-phone" name={LEAD_FIELDS.phone} type="tel" placeholder="Phone number" autoComplete="tel" required />
      </div>

      <div className="form-field order-2 col-span-6 sm:order-3 sm:col-span-4">
        <label htmlFor="gq-email">
          Email <span className="text-gold-600">*</span>
        </label>
        <input id="gq-email" name={LEAD_FIELDS.email} type="email" placeholder="you@example.com" autoComplete="email" required />
      </div>

      <div className="form-field order-4 col-span-2">
        <label htmlFor="gq-zip">
          Zip Code <span className="text-gold-600">*</span>
        </label>
        <input id="gq-zip" name={LEAD_FIELDS.zip} type="text" inputMode="numeric" placeholder="Zip" autoComplete="postal-code" required />
      </div>

      <div className="form-field order-5 col-span-3">
        <label htmlFor="gq-title">
          Do you have a title? <span className="text-gold-600">*</span>
        </label>
        <select id="gq-title" name={LEAD_FIELDS.hasTitle} defaultValue="" required>
          <option value="" disabled>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-field order-6 col-span-3">
        <label htmlFor="gq-runs">
          Does it run and drive? <span className="text-gold-600">*</span>
        </label>
        <select id="gq-runs" name={LEAD_FIELDS.runsAndDrives} defaultValue="" required>
          <option value="" disabled>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-field order-7 col-span-6">
        <label htmlFor="gq-vehicle">
          What is Make, Model and trim, and Year? <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="gq-vehicle"
          name={LEAD_FIELDS.vehicle}
          rows={1}
          placeholder="e.g. 2012 Honda Civic EX"
          required
        />
      </div>

      {error && <p className="order-8 col-span-6 text-sm font-medium text-red-600">{error}</p>}

      <button type="submit" className="btn btn-primary order-9 col-span-6 w-full">
        Get My Cash Offer
      </button>
    </form>
  );
}
