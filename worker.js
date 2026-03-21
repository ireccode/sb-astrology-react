export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return handleOptions(request);
    }

    // Only allow POST requests for the contact form
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Ensure the request is from the allowed origin
    const origin = request.headers.get("Origin");
    if (origin !== "https://sb-astrology.pages.dev") {
      return new Response("Forbidden", { status: 403 });
    }

    let formData;
    try {
      formData = await request.json();
    } catch (error) {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // Basic validation
    const requiredFields = ["fullName", "email", "service"];
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        return new Response(JSON.stringify({ error: `Missing required field: ${field}` }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
    }

    // Simple email format check (more robust validation can be added)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // Construct email content
    const subject = `New astrology booking enquiry – ${formData.service} from ${formData.fullName}`;
    const emailBody = `
      Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phone || "N/A"}
      Country of Birth: ${formData.countryOfBirth || "N/A"}
      Selected Service: ${formData.service} (${formData.price || "Price not specified"})
      Preferred Date/Time: ${formData.preferredDateTime || "N/A"}
      Message: ${formData.message || "N/A"}
    `;

    try {
      // Send email using Cloudflare Email Worker binding
      await env.SEND_EMAIL.send({
        to: "info@stephenbaylissastrology.com.au",
        from: "webform@sb-astrology.pages.dev", // Replace with a valid address on your routed domain
        subject: subject,
        text: emailBody,
      });

      return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
  },
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://sb-astrology.pages.dev",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function handleOptions(request) {
  const headers = request.headers;
  if (
    headers.get("Origin") !== null &&
    headers.get("Access-Control-Request-Method") !== null &&
    headers.get("Access-Control-Request-Headers") !== null
  ) {
    // Handle CORS preflight requests.
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "https://sb-astrology.pages.dev",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        Allow: "POST, OPTIONS",
      },
    });
  }
}
