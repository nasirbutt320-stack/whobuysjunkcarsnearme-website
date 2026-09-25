"use client";

import { useEffect, useState } from "react";
import {
  GHL_TRACKING_EVENT,
  GhlTrackingStatus,
  getGhlTrackingStatus,
} from "./ghlTrackingStatus";

export function useGhlTrackingStatus(): GhlTrackingStatus {
  const [status, setStatus] = useState<GhlTrackingStatus>(getGhlTrackingStatus);

  useEffect(() => {
    setStatus(getGhlTrackingStatus());
    const handler = (e: Event) => {
      setStatus((e as CustomEvent<GhlTrackingStatus>).detail);
    };
    window.addEventListener(GHL_TRACKING_EVENT, handler);
    return () => window.removeEventListener(GHL_TRACKING_EVENT, handler);
  }, []);

  return status;
}
