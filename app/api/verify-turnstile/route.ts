import { NextResponse } from "next/server";

// Cloudflare's always-pass test secret, paired with the test site key in
// TurnstileWidget.tsx. Only used when TURNSTILE_SECRET_KEY isn't set.
const TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

export async function POST(request: Request) {
  const { token } = await request.json().catch(() => ({ token: null }));

  if (!token || typeof token !== "string") {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY || TEST_SECRET_KEY;

  const verifyResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  );

  const result = await verifyResponse.json();

  return NextResponse.json({ success: result.success === true });
}
