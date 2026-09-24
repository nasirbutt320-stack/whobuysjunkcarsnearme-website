"use client";

import { FormEvent, useState } from "react";
import { CheckIcon } from "./icons";
import { site } from "@/lib/site";
import { LEAD_FIELDS, LEAD_REQUIRED_FIELDS } from "@/lib/leadForm";

export default function QuoteForm({
  title = "Get A Free Quote",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
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

    // Note: no manual tracking POST here. The GHL external-tracking script
    // (loaded site-wide in app/layout.tsx) listens for this form's native
    // submit event directly and captures every field by its `name`
    // attribute -- see GHL's own "Form Fills / Optins" auto-sync
    // requirements. We only need to not block that native submit event
    // (we don't call stopPropagation), which we don't.
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
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
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
        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
        <button type="submit" className="btn btn-primary w-full">
          Get my cash offer
        </button>
        <p className="text-center text-xs text-navy-400">
          No spam. No obligation. Just a fair cash offer.
        </p>
      </form>
    </div>
  );
}
