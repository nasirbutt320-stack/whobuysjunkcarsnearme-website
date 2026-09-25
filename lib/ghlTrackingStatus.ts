// Tracks whether the GoHighLevel external-tracking script (loaded in
// app/layout.tsx) has actually finished loading. Forms use this to avoid
// showing a "Thanks, we got it!" success message when the script that
// captures the lead into the CRM hasn't attached its submit listener yet
// (e.g. a slow connection) -- without this check, a real lead could be
// silently lost while the visitor sees a success message either way.

export type GhlTrackingStatus = "pending" | "loaded" | "error";

declare global {
  interface Window {
    __ghlTrackingStatus?: GhlTrackingStatus;
  }
}

export const GHL_TRACKING_EVENT = "ghl-tracking-status-change";

export function getGhlTrackingStatus(): GhlTrackingStatus {
  if (typeof window === "undefined") return "pending";
  return window.__ghlTrackingStatus ?? "pending";
}

export function setGhlTrackingStatus(status: GhlTrackingStatus) {
  if (typeof window === "undefined") return;
  window.__ghlTrackingStatus = status;
  window.dispatchEvent(new CustomEvent(GHL_TRACKING_EVENT, { detail: status }));
}
