// <site-nav> — the bottom icon bar (Portfolio / About / Contact) shared by every page.
// Renders into the light DOM so the .icon-nav styles in base.css apply as-is.

const LINKS = [
  { href: '/', label: 'Portfolio', icon: '/img/nav/portfolio.svg', w: 51, h: 63 },
  { href: '/about.html', label: 'About', icon: '/img/nav/about.svg', w: 61, h: 59 },
  { href: '/contact.html', label: 'Contact', icon: '/img/nav/contact.svg', w: 63, h: 51 },
];

// Which link is "current" for the page we're on. Case studies live under /work/ → Portfolio.
function currentHref(path) {
  if (path.startsWith('/about')) return '/about.html';
  if (path.startsWith('/contact')) return '/contact.html';
  return '/';
}

class SiteNav extends HTMLElement {
  connectedCallback() {
    const current = currentHref(location.pathname);
    const items = LINKS.map(({ href, label, icon, w, h }) =>
      `<li><a href="${href}"${href === current ? ' aria-current="page"' : ''}>` +
      `<img src="${icon}" alt="" width="${w}" height="${h}" />${label}</a></li>`
    ).join('');
    this.innerHTML = `<nav class="icon-nav" aria-label="Site"><ul>${items}</ul></nav>`;
  }
}

customElements.define('site-nav', SiteNav);
