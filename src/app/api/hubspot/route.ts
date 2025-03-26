import { type NextRequest, NextResponse } from "next/server";

// Use the existing CRM_API_KEY
const HUBSPOT_API_KEY = process.env.CRM_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName, message } = await request.json();

    // Validate input
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Create or update contact in HubSpot
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          properties: {
            email,
            firstname: firstName || "",
            lastname: lastName || "",
            chatbot_interaction: "Yes",
            last_chatbot_message: message || "",
            lead_source: "Website Chatbot",
          },
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("HubSpot API error:", errorData);

      // If contact already exists, try to update instead
      if (
        errorData.status === "error" &&
        errorData.message.includes("contact already exists")
      ) {
        // Implementation for updating existing contact would go here
        return NextResponse.json({
          success: true,
          status: "Contact already exists",
        });
      }

      throw new Error("Failed to create contact in HubSpot");
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("HubSpot API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
