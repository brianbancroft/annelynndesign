// POST /api/contact — Cloudflare Pages Function.
// Checks the Turnstile token, then sends the message through Resend.
// Needs RESEND_API_KEY and TURNSTILE_SECRET_KEY set as Pages secrets.

const TO = 'hello@annelynn.com';
const FROM = 'Anne-Lynn Design <contact-annelynn@brianbancroft.ca>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export async function onRequestPost({ request, env }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  const name = String(form.get('name') ?? '').trim().replace(/[\r\n]+/g, ' ').slice(0, 200);
  const email = String(form.get('email') ?? '').trim().slice(0, 320);
  const message = String(form.get('message') ?? '').trim().slice(0, 10000);
  const token = String(form.get('cf-turnstile-response') ?? '');

  if (!name || !message || !EMAIL_RE.test(email)) {
    return json({ error: 'Please fill in your name, a valid email and a message.' }, 400);
  }

  // 1. Turnstile
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get('CF-Connecting-IP') ?? '',
    }),
  }).then((r) => r.json()).catch(() => ({ success: false }));

  if (!verify.success) {
    return json({ error: 'Spam check failed. Please try again.' }, 403);
  }

  // 2. Resend
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `annelynn contact from ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
      html: `<p style="white-space:pre-wrap">${escapeHtml(message)}</p><p>— ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return json({ error: 'Sorry, the message could not be sent. Please email hello@annelynn.com.' }, 502);
  }

  return json({ ok: true });
}
