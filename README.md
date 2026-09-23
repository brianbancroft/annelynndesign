# Anne-Lynn Design — portfolio

Plain HTML, CSS and JavaScript. There's no framework. [Vite](https://vite.dev) only runs the local dev server (with live reload) and builds the production files.

## Run it

```bash
npm install          # first time only
npm run dev          # http://localhost:5173 (and http://annelynn.local once set up)
```

### http://annelynn.local

```bash
npm run domain       # asks for your Mac password once
```

This adds `annelynn.local` to `/etc/hosts` and forwards port 80 to Vite's port 5173. The port forward goes away when you restart your Mac. Run `npm run domain` again after a restart. To undo everything, run `sudo bash scripts/setup-local-domain.sh --remove`.

## Build for hosting

```bash
npm run build        # static site in dist/ — upload anywhere (Netlify, GitHub Pages, cPanel…)
npm run preview      # check the built version locally
```

## Contact form

The form posts to `/api/contact`, a Cloudflare Pages Function. It checks the Cloudflare Turnstile token and sends the email with Resend. It needs two secrets, `RESEND_API_KEY` and `TURNSTILE_SECRET_KEY`. Both are stored as GitHub Actions secrets, and the deploy workflow copies them to the Pages project. `npm run dev` doesn't run the function. To test it locally, run `npm run build && npx wrangler pages dev dist` with a `.dev.vars` file that holds the two secrets.

## Where things live

| Path | What |
| --- | --- |
| `index.html` | Home: hero, project grid, intro |
| `about.html`, `contact.html` | About and Contact pages |
| `work/*.html` | The 8 case studies |
| `src/styles/base.css` | Colours, fonts, header, bottom nav |
| `src/styles/home.css` | Home page |
| `src/styles/case-study.css` | Shared case-study layout. Each page sets its colour with `--accent` on `<body>` |
| `src/styles/pages.css` | About and Contact |
| `src/main.js` | Scroll fade-ins and the contact form |
| `functions/api/contact.js` | Contact form API (Cloudflare Pages Function): checks Turnstile, sends via Resend to hello@annelynn.com |
| `public/img/` | Images from the Figma file, resized for the web (max 1600px) |

To add a case study, copy one of the files in `work/` and change the text, the images and `--accent`. Then add a tile for it in `index.html`.

## To-dos

- The Instagram, Twitter and LinkedIn icons on the About page still need your profile URLs.
- Two images are still missing: `public/img/shower/new-look.png` and `public/img/shower/new-designs.png` (Shower Cap page). Export them from Figma and drop them in with those names.
