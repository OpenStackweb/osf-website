async function TurnstileCaptchaValidation(request) {
  try {
    const { GATSBY_TURNSTILE_SECRET_KEY, GATSBY_TURNSTILE_API_URL } = process.env;
    const body = await request.formData();
    // Turnstile injects a token in "cf-turnstile-response".
    const token = body.get("cf-turnstile-response");
    const ip = request.headers.get("CF-Connecting-IP");

    // Validate the token by calling the
    // "/siteverify" API endpoint.
    let formData = new FormData();
    formData.append("secret", GATSBY_TURNSTILE_SECRET_KEY);
    formData.append("response", token);
    formData.append("remoteip", ip);

    const url = GATSBY_TURNSTILE_API_URL || "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
      body: formData,
      method: "POST",
    });

    const outcome = await result.json();
    if (outcome.success) {
      return new Response(JSON.stringify({ success: true, token: (outcome.cdata ?? null) }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    else {
      return new Response(JSON.stringify({ success: false, error: outcome["error-codes"] }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
export default TurnstileCaptchaValidation;
