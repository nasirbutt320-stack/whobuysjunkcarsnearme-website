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
