import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.EMAILOCTOPUS_API_KEY?.trim();
    const listId = process.env.EMAILOCTOPUS_LIST_ID?.trim().split("?")[0];

    if (!apiKey || !listId) {
      console.error("Missing EMAILOCTOPUS_API_KEY or EMAILOCTOPUS_LIST_ID");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const url = `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: email,
        fields: {},
        tags: ["radiantroots-newsletter"],
        status: "SUBSCRIBED",
      }),
    });

    const text = await res.text();
    let data: Record<string, unknown> = {};
    try { data = JSON.parse(text); } catch { /* non-JSON body */ }

    if (res.ok) {
      return NextResponse.json({ success: true });
    }

    // Already subscribed — treat as success
    const code = (data?.error as Record<string, unknown>)?.code;
    if (code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
      return NextResponse.json({ success: true, alreadySubscribed: true });
    }

    console.error("EmailOctopus error:", res.status, text);
    return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 400 });

  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
