import { google } from "googleapis";

// ✅ POST – main handler
export async function POST(request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return Response.json(
        { allowed: false, error: "Name is required." },
        { status: 400 }
      );
    }

    // ✅ Load and validate environment variables
    const {
      GOOGLE_SHEETS_ID,
      GOOGLE_CLIENT_EMAIL,
      GOOGLE_PRIVATE_KEY,
      GOOGLE_PROJECT_ID,
    } = process.env;

    if (!GOOGLE_SHEETS_ID || !GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      return Response.json(
        { allowed: false, error: "Missing Google API credentials." },
        { status: 500 }
      );
    }

    // ✅ Fix private key formatting (Vercel issue)
    const privateKey = GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

    // ✅ Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: GOOGLE_PROJECT_ID,
        private_key: privateKey,
        client_email: GOOGLE_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // ✅ Fetch guest list (adjust tab name and range as needed)
    const range = "GUESTLIST!A:A";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range,
    });

    const rows = response.data.values || [];
    const guestNames = rows
      .map((r) => r[0]?.trim().toLowerCase())
      .filter(Boolean);

    const normalizedName = name.trim().toLowerCase();
    const allowed = guestNames.includes(normalizedName);

    return Response.json({ allowed });
  } catch (error) {
    console.error("❌ Error checking guest list:", error);
    return Response.json(
      { allowed: false, error: error.message || "Server error" },
      { status: 500 }
    );
  }
}

// ✅ Optional GET endpoint (for testing)
export async function GET() {
  return new Response(
    "✅ /api/check-guest endpoint is live. Use POST with { name } JSON body to verify guests.",
    { status: 200 }
  );
}
