"use client";

import Script from "next/script";
import { GHL_TRACKING_ID } from "@/lib/leadForm";
import { setGhlTrackingStatus } from "@/lib/ghlTrackingStatus";

export default function GhlTrackingScript() {
  return (
    <Script
      src="https://link.cashforcarsflorida.net/js/external-tracking.js"
      data-tracking-id={GHL_TRACKING_ID}
      strategy="afterInteractive"
      onLoad={() => setGhlTrackingStatus("loaded")}
      onError={() => setGhlTrackingStatus("error")}
    />
  );
}
