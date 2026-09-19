"use client";

import { FormEvent, useState } from "react";
import { CheckIcon } from "./icons";
import { site } from "@/lib/site";

export default function GetQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const required = ["firstName", "lastName", "email", "phone", "zip", "vehicle"];
    const missing = required.some((field) => !String(data.get(field) || "").trim());

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
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <CheckIcon className="h-9 w-9" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-navy-900">
          Your quote request is in!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-navy-500">
          We'll review your vehicle details and call you shortly with a cash
          offer. If you'd rather talk now, call us at{" "}
          <a href={site.phoneHref} className="font-semibold text-teal-600">
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
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <div>
        <label className="mb-2 block text-sm font-semibold text-navy-900">
          Your Name <span className="text-teal-600">*</span>
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="form-field">
            <input name="firstName" type="text" placeholder="First" required />
          </div>
          <div className="form-field">
            <input name="lastName" type="text" placeholder="Last" required />
          </div>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="gq-email">
          Your Email <span className="text-teal-600">*</span>
        </label>
        <input id="gq-email" name="email" type="email" placeholder="you@example.com" required />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="form-field">
          <label htmlFor="gq-phone">
            Phone No <span className="text-teal-600">*</span>
          </label>
          <input id="gq-phone" name="phone" type="tel" placeholder="(___) ___-____" required />
        </div>
        <div className="form-field">
          <label htmlFor="gq-zip">
            Zip Code <span className="text-teal-600">*</span>
          </label>
          <input id="gq-zip" name="zip" type="text" placeholder="90210" required />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="form-field">
          <label htmlFor="gq-title">
            Do you have a title? <span className="text-teal-600">*</span>
          </label>
          <select id="gq-title" name="hasTitle" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option value="yes">Yes, I have the title</option>
            <option value="no">No, I don't have it</option>
            <option value="unsure">Not sure</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="gq-runs">
            Does it run and drive? <span className="text-teal-600">*</span>
          </label>
          <select id="gq-runs" name="runsAndDrives" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option value="both">Runs and drives</option>
            <option value="runs-only">Runs, doesn't drive</option>
            <option value="neither">Doesn't run</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="gq-vehicle">
          What is Make, Model, trim, and Year? <span className="text-teal-600">*</span>
        </label>
        <textarea
          id="gq-vehicle"
          name="vehicle"
          rows={3}
          placeholder="e.g. 2011 Honda Civic LX"
          required
        />
        <p className="mt-1 text-right text-xs text-navy-400">0 of 50 max words.</p>
      </div>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
    </form>
  );
}
