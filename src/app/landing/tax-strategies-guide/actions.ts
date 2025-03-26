"use server";

import { cookies } from "next/headers";

export async function submitEmailForm(formData: FormData) {
  // Add a small delay to simulate processing
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");

    // Validate inputs
    if (!name || !email || !company) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toString())) {
      return {
        success: false,
        message: "Please enter a valid email address",
      };
    }

    // In a real implementation, you would:
    // 1. Add the contact to your CRM using the CRM_API_KEY
    // 2. Send the guide via email
    // 3. Log the conversion

    // Example CRM integration (commented out as placeholder)
    /*
    const CRM_API_KEY = process.env.CRM_API_KEY
    
    if (!CRM_API_KEY) {
      console.error('CRM_API_KEY is not defined')
      return {
        success: false,
        message: 'Server configuration error'
      }
    }
    
    const crmResponse = await fetch('https://your-crm-api.com/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CRM_API_KEY}`
      },
      body: JSON.stringify({
        name,
        email,
        company,
        source: 'tax_guide_exit_intent',
        tags: ['manufacturing', 'tax_guide']
      })
    })
    
    if (!crmResponse.ok) {
      throw new Error('Failed to add contact to CRM')
    }
    */

    // Set a cookie to remember this user has downloaded the guide
    cookies().set("guide_downloaded", "true", {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    return {
      success: true,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "An error occurred while processing your request",
    };
  }
}

export async function submitEmail(formData: FormData) {
  // This is a simplified version for the exit intent popup
  const email = formData.get("email");

  // In a real implementation, you would add this to your CRM/email list

  return {
    success: true,
    message: `Thank you! The guide has been sent to ${email}.`,
  };
}
