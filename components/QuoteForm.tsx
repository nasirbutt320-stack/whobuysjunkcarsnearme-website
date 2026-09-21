"use client";

import { FormEvent, useState } from "react";
import { CheckIcon } from "./icons";
import { site } from "@/lib/site";

export default function QuoteForm({
  title = "Get A Free Quote",
  subtitle,
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!name || !phone) {
      setError("Please fill in your name and phone number.");
      return;
    }

    setError("");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-md border-2 border-ink-900 bg-white p-6 text-center shadow-sticker sm:p-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink-900 bg-hazard-400 text-ink-900">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-ink-900">Thanks — we got it!</h3>
        <p className="mt-2 text-sm text-ink-500">
          A member of our team will call you shortly with your cash offer. Need it
          faster? Call us now at{" "}
          <a href={site.phoneHref} className="font-semibold text-rust-600">
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
    <div className={`rounded-md border-2 border-ink-900 bg-white p-6 shadow-sticker sm:p-8 ${compact ? "" : ""}`}>
      <h3 className="font-display text-2xl uppercase tracking-wide text-ink-900">{title}</h3>
      {subtitle && <p className="mt-1.5 text-sm text-ink-500">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className="form-field">
          <label htmlFor="qf-name">Name</label>
          <input id="qf-name" name="name" type="text" placeholder="Name" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-email">Email</label>
          <input id="qf-email" name="email" type="email" placeholder="Email" />
        </div>
        <div className="form-field">
          <label htmlFor="qf-phone">Phone</label>
          <input id="qf-phone" name="phone" type="tel" placeholder="Phone" required />
        </div>
        <div className="form-field">
          <label htmlFor="qf-vehicle">What is Make, Model, trim, and Year?</label>
          <textarea
            id="qf-vehicle"
            name="vehicle"
            rows={3}
            placeholder="What is Make, Model and trim, and Year?"
          />
        </div>
        {error && <p className="text-sm font-medium text-rust-600">{error}</p>}
        <button type="submit" className="btn btn-primary w-full">
          Get my cash offer
        </button>
        <p className="text-center text-xs text-ink-400">
          No spam. No obligation. Just a fair cash offer.
        </p>
      </form>
    </div>
  );
}
