import { google } from "googleapis";

export async function POST(request) {
  try {
    const { name } = await request.json();
    if (!name) {
      return Response.json({ allowed: false, error: "Name missing" }, { status: 400 });
    }

    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.includes("\\n")
      ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
      : process.env.GOOGLE_PRIVATE_KEY;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key: privateKey,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const range = "GUESTLIST!A:A"; // adjust to your sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range,
    });

    const rows = response.data.values || [];
    const guestNames = rows.map(r => r[0]?.trim().toLowerCase()).filter(Boolean);
    const allowed = guestNames.includes(name.trim().toLowerCase());

    return Response.json({ allowed });
  } catch (error) {
    console.error("Error checking guest list:", error);
    return Response.json(
      { allowed: false, error: error.message || "Server error" },
      { status: 500 }
    );
  }
}
