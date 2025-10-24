import { google } from "googleapis";

export async function POST(request) {
  try {
    const { name } = await request.json();
    if (!name) {
      return Response.json({ allowed: false, error: "Name missing" }, { status: 400 });
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Fetch the guest list
    const range = "GUESTLIST!A:A"; // 👈 adjust this sheet name and column
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range,
    });

    const rows = response.data.values || [];

    // Normalize both input and guest names for better match
    const guestNames = rows.map(r => r[0]?.trim().toLowerCase()).filter(Boolean);
    const allowed = guestNames.includes(name.trim().toLowerCase());

    return Response.json({ allowed });
  } catch (error) {
    console.error("Error checking guest list:", error);
    return Response.json({ allowed: false, error: "Server error" }, { status: 500 });
  }
}
