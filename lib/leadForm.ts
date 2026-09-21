// Single source of truth for lead-form field names, shared by every quote
// form on the site (the compact hero widget and the full /get-quote/ page).
// Keeping these identical everywhere means a lead submitted from any page
// posts the same field names, so a single CRM webhook/integration can
// receive and map them consistently.
// email/phone/postal_code/full_name are GHL's own standard contact fields,
// auto-matched by name. The other three are GHL *custom* fields that
// already exist on this location -- GHL's external-tracking auto-detection
// only matches those reliably when the input's `name` attribute is the
// field's raw id (confirmed by testing live against the account: a
// snake_case guess like "has_title" either missed entirely or silently
// landed on the wrong unrelated field, e.g. "Appointment Booked Already").
export const LEAD_FIELDS = {
  name: "full_name",
  email: "email",
  phone: "phone",
  zip: "postal_code",
  hasTitle: "XQ780a9by4T5ccBaOegE", // GHL custom field: "Do you have a title?"
  runsAndDrives: "xcOhZsP0d9UDNgUnxHj6", // GHL custom field: "Does it run and drive?"
  vehicle: "0dK8kOWFWYnBlVImQYOZ", // GHL custom field: "What is Make, Model and trim, and Year?"
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

// GoHighLevel (LeadConnector) external tracking script id, used by the
// site-wide <script> tag in app/layout.tsx. This is a public identifier
// embedded in that tag already, not a secret. The script itself listens
// for every <form>'s native submit event on the page and captures fields
// by their `name` attribute (see GHL's "Form Fills / Optins" auto-sync
// requirements) -- so as long as a form is a real DOM <form> with named,
// enabled fields and is submitted via its native submit event, no manual
// tracking call is needed here.
export const GHL_TRACKING_ID = "tk_d5aa6ae46778483583b2988723d00363";
