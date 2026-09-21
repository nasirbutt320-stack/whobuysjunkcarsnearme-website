"use client";

import { FormEvent, useState } from "react";
import { CheckIcon } from "./icons";
import { site } from "@/lib/site";
import { LEAD_FIELDS, LEAD_REQUIRED_FIELDS } from "@/lib/leadForm";

export default function GetQuoteForm() {
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
      setError("Please fill in all required fields marked with *.");
      return;
    }

    setError("");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-md border-2 border-ink-900 bg-white p-8 text-center shadow-sticker">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink-900 bg-hazard-400 text-ink-900">
          <CheckIcon className="h-9 w-9" />
        </span>
        <h3 className="mt-5 font-display text-3xl uppercase tracking-wide text-ink-900">
          Your quote request is in!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-ink-500">
          We'll review your vehicle details and call you shortly with a cash
          offer. If you'd rather talk now, call us at{" "}
          <a href={site.phoneHref} className="font-semibold text-rust-600">
            {site.phone}
          </a>
          .
        </p>
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
    <form onSubmit={handleSubmit} className="space-y-5 rounded-md border-2 border-ink-900 bg-white p-6 shadow-sticker sm:p-8">
      <div className="form-field">
        <label htmlFor="gq-name">
          Name <span className="text-rust-600">*</span>
        </label>
        <input id="gq-name" name={LEAD_FIELDS.name} type="text" placeholder="Name" required />
      </div>

      <div className="form-field">
        <label htmlFor="gq-email">
          Email <span className="text-rust-600">*</span>
        </label>
        <input id="gq-email" name={LEAD_FIELDS.email} type="email" placeholder="Email" required />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="form-field">
          <label htmlFor="gq-phone">
            Phone <span className="text-rust-600">*</span>
          </label>
          <input id="gq-phone" name={LEAD_FIELDS.phone} type="tel" placeholder="Phone" required />
        </div>
        <div className="form-field">
          <label htmlFor="gq-zip">
            Zip Code <span className="text-rust-600">*</span>
          </label>
          <input id="gq-zip" name={LEAD_FIELDS.zip} type="text" placeholder="Zip Code" required />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="form-field">
          <label htmlFor="gq-title">
            Do you have a title? <span className="text-rust-600">*</span>
          </label>
          <input id="gq-title" name={LEAD_FIELDS.hasTitle} type="text" placeholder="Yes / No" required />
        </div>
        <div className="form-field">
          <label htmlFor="gq-runs">
            Does it run and drive? <span className="text-rust-600">*</span>
          </label>
          <input id="gq-runs" name={LEAD_FIELDS.runsAndDrives} type="text" placeholder="Yes / No" required />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="gq-vehicle">
          What is Make, Model and trim, and Year? <span className="text-rust-600">*</span>
        </label>
        <textarea
          id="gq-vehicle"
          name={LEAD_FIELDS.vehicle}
          rows={3}
          placeholder="What is Make, Model and trim, and Year?"
          required
        />
      </div>

      {error && <p className="text-sm font-medium text-rust-600">{error}</p>}

      <button type="submit" className="btn btn-primary w-full">
        Get Offer
      </button>
    </form>
  );
}
