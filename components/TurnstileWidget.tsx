"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";

// Cloudflare's own always-pass test keys, used only when the real site key
// isn't configured (local dev without env vars). Never use these in
// production -- they accept every visitor, human or not.
const TEST_SITE_KEY = "1x00000000000000000000AA";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function TurnstileWidget({
  onVerify,
}: {
  onVerify: (token: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptTag, setScriptTag] = useState(0);
  const domId = useId();

  useEffect(() => {
    let cancelled = false;

    // The Turnstile script may already be loaded by another widget instance
    // on the page, in which case this component's own <Script onLoad> never
    // fires -- so we poll for window.turnstile instead of relying solely on
    // that callback.
    const interval = setInterval(() => {
      if (cancelled || widgetIdRef.current || !containerRef.current) return;
      if (!window.turnstile) return;

      const sitekey =
        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || TEST_SITE_KEY;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey,
        callback: (token) => onVerify(token),
        "expired-callback": () => onVerify(null),
        "error-callback": () => onVerify(null),
      });
      clearInterval(interval);
    }, 150);

    return () => {
      cancelled = true;
      clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptTag]);

  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => setScriptTag((n) => n + 1)}
      />
      <div ref={containerRef} id={`turnstile-${domId}`} />
    </div>
  );
}
