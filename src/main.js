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

// 2. Contact form → opens the visitor's mail app with the message filled in.
//    (Swap for Formspree/Netlify Forms etc. once the site is hosted.)
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Portfolio enquiry from ${data.get('name')}`;
    const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
    window.location.href =
      `mailto:hello@annelynn.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'Opening your email app… thanks for reaching out!';
  });
}
