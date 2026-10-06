// <project-pager> — "Next project / Previous project" links at the bottom of each case study.
// One ordered list (same order as the homepage grid) drives every page; previous/next wrap around. Renders into the light DOM so the
// .cs-next styles in case-study.css (and the page's --accent theme) apply as-is.

const PROJECTS = [
  { href: '/work/jas-cafe.html', title: 'Jas Cafe' },
  { href: '/work/cuddle-creatures.html', title: 'Cuddle Creatures' },
  { href: '/work/childrens-book.html', title: "Children's Book" },
  { href: '/work/ahh.html', title: 'Arrowsmith Herbal Healing' },
  { href: '/work/darcys-dog-days.html', title: "Darcy's Dog Days" },
  { href: '/work/giant-tiger.html', title: 'Giant Tiger' },
  { href: '/work/shower-cap-design.html', title: 'Shower Cap Design' },
  { href: '/work/extra-projects.html', title: 'Extra Projects' },
];

const normalise = (path) => path.replace(/\/$/, '').replace(/\.html$/, '');

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

class ProjectPager extends HTMLElement {
  connectedCallback() {
    const here = normalise(location.pathname);
    const i = PROJECTS.findIndex((p) => normalise(p.href) === here);
    if (i === -1) return;
    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    const link = (p, rel, label) =>
      `<a class="cs-next__link cs-next__link--${rel}" rel="${rel}" href="${p.href}">` +
      `<span class="cs-next__text"><span class="cs-next__label">${label}</span>` +
      `<span class="cs-next__title">${escapeHtml(p.title)}</span></span></a>`;
    this.innerHTML =
      `<nav class="cs-next" aria-label="More case studies">` +
      link(prev, 'prev', 'Previous project') + link(next, 'next', 'Next project') +
      `</nav>`;
  }
}

customElements.define('project-pager', ProjectPager);
