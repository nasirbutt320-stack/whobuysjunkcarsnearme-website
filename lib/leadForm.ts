// Single source of truth for lead-form field names, shared by every quote
// form on the site (the compact hero widget and the full /get-quote/ page).
// Keeping these identical everywhere means a lead submitted from any page
// posts the same field names, so a single CRM webhook/integration can
// receive and map them consistently.
export const LEAD_FIELDS = {
  name: "full_name",
  email: "email",
  phone: "phone",
  zip: "postal_code",
  hasTitle: "has_title",
  runsAndDrives: "runs_and_drives",
  vehicle: "vehicle_details",
} as const;

export const LEAD_FIELD_LABELS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  zip: "Zip Code",
  hasTitle: "Do you have a title?",
  runsAndDrives: "Does it run and drive?",
  vehicle: "What is Make, Model and trim, and Year?",
} as const;

export const LEAD_REQUIRED_FIELDS = [
  LEAD_FIELDS.name,
  LEAD_FIELDS.email,
  LEAD_FIELDS.phone,
  LEAD_FIELDS.zip,
  LEAD_FIELDS.hasTitle,
  LEAD_FIELDS.runsAndDrives,
  LEAD_FIELDS.vehicle,
];

// GoHighLevel (LeadConnector) external tracking. Both of these are public
// identifiers embedded in the site's tracking <script> tag already (see
// app/layout.tsx) — they are not secrets, unlike an API key, and are safe
// to ship in client code.
export const GHL_LOCATION_ID = "O3C149zixnYnlmaBuTWd";
export const GHL_TRACKING_ID = "tk_d5aa6ae46778483583b2988723d00363";
const GHL_TRACKING_ENDPOINT =
  "https://backend.leadconnectorhq.com/external-tracking/events";

function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) return { firstName: trimmed, lastName: "" };
  return {
    firstName: trimmed.slice(0, spaceIndex),
    lastName: trimmed.slice(spaceIndex + 1).trim(),
  };
}

/**
 * Sends a lead submitted through one of the site's quote forms to
 * GoHighLevel as an external-tracking form-submission event. Fire-and-forget:
 * the caller's own success UI does not wait on this network call.
 */
export function submitLeadToGHL(
  formId: string,
  values: Record<(typeof LEAD_FIELDS)[keyof typeof LEAD_FIELDS], string>
) {
  const { firstName, lastName } = splitName(values[LEAD_FIELDS.name] || "");

  const payload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId,
    formData: {
      first_name: firstName,
      last_name: lastName,
      email: values[LEAD_FIELDS.email] || "",
      phone: values[LEAD_FIELDS.phone] || "",
      postal_code: values[LEAD_FIELDS.zip] || "",
      "contact.has_title": values[LEAD_FIELDS.hasTitle] || "",
      "contact.runs_and_drives": values[LEAD_FIELDS.runsAndDrives] || "",
      "contact.vehicle_details": values[LEAD_FIELDS.vehicle] || "",
    },
    formLabels: {
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      phone: "Phone",
      postal_code: "Zip Code",
      "contact.has_title": LEAD_FIELD_LABELS.hasTitle,
      "contact.runs_and_drives": LEAD_FIELD_LABELS.runsAndDrives,
      "contact.vehicle_details": LEAD_FIELD_LABELS.vehicle,
    },
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: GHL_TRACKING_ID,
    locationId: GHL_LOCATION_ID,
    sessionId: crypto.randomUUID(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
        ? "mobile"
        : "desktop",
    },
  };

  fetch(GHL_TRACKING_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      version: "2021-07-28",
    },
    body: JSON.stringify(payload),
  }).catch(() => {});
}
