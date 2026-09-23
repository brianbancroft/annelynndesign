// Shared behaviour for every page — no framework, just the DOM.

// 1. Fade-in-on-scroll for anything marked .reveal
const revealables = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-visible'));
}

// 2. Contact form → POSTs to the /api/contact Pages Function (Turnstile + Resend).
const form = document.querySelector('#contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (!data.get('cf-turnstile-response')) {
      status.textContent = 'Please complete the spam check above.';
      return;
    }
    button.disabled = true;
    status.textContent = 'Sending…';
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || 'Something went wrong. Please try again.');
      form.reset();
      status.textContent = 'Thanks for reaching out! I’ll be in touch soon.';
    } catch (err) {
      status.textContent = err.message;
    } finally {
      window.turnstile?.reset();
      button.disabled = false;
    }
  });
}
