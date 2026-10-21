# The Hidden True Ministry — Website V1

A professional, responsive, static-first website built for The Hidden True Ministry. 

## 1. Project Purpose
This website serves as the official online presence for the ministry, providing visitors with information about services, upcoming events, sermons, location, and contact details. It is built as a secure, fast, and accessible static site.

## 2. Technology Stack
- **Framework:** Astro (Static Site Generation)
- **Language:** TypeScript
- **Styling:** Standard CSS (No external UI libraries or frameworks)
- **Version Control:** Git
- **Package Manager:** npm

## 3. Prerequisites
- **Node.js:** Version `22.22.0` or higher (see `package.json` for exact engine requirements).
- **npm:** Installed automatically with Node.js.

## 4. Installation & Local Development
To set up the project locally, run:
```bash
npm install
```

To start the local development server (usually at http://localhost:4321), run:
```bash
npm run dev
```

## 5. Production Build & Testing
To generate the optimized static production build, run:
```bash
npm run build
```
*(This generates the `dist/` folder, which is the deployable website).*

**CRITICAL TEST:** Before deploying, you MUST run the placeholder validation check:
```bash
npm run check-placeholders
```
If this command fails, the build contains unresolved placeholder content and MUST NOT be deployed to production.

## 6. Project Structure
```text
/
├── public/          # Static assets (robots.txt, _headers)
├── scripts/         # Node.js validation scripts
├── src/
│   ├── components/  # Reusable UI (Header, Footer)
│   ├── data/        # Central site-config.ts
│   ├── layouts/     # BaseLayout.astro
│   ├── pages/       # All website routes (Home, About, etc.)
│   └── styles/      # Global CSS and design tokens
└── astro.config.mjs # Astro configuration
```

## 7. Where to Update Content
- **Global Settings (Phone, Email, Socials, Address):** Update `src/data/site-config.ts`. This updates the Header, Footer, Contact page, and Visit Us page automatically.
- **Page Text:** Open the specific page in `src/pages/` (e.g., `src/pages/about.astro` to update the Mission and Vision).
- **Design (Colors/Fonts):** Update the CSS variables in `src/styles/global.css`.

## 8. Replacing Placeholders (Pre-Launch)
The website currently uses strict placeholders formatted as `[PLACEHOLDER: FIELD_NAME]` because official ministry facts have not yet been supplied.
1. Search the entire codebase for `[PLACEHOLDER:`.
2. Replace them with verified ministry information.
3. Run `npm run build`.
4. Run `npm run check-placeholders`. It must display a "✅ Success" message.

## 9. Deployment Instructions
- **Domain Configuration:** Open `astro.config.mjs` and change `site: 'https://example.com'` to your real domain. Do the same in `public/robots.txt`.
- **Headers:** Ensure your static host supports the `public/_headers` file (Netlify and Cloudflare Pages support this natively).
- **Build:** Run `npm run build`.
- **Deploy:** Upload the `dist/` folder to your hosting provider.

## 10. Recovery & Rollback
This project is tracked using Git. If a deployment or code change breaks the site:
1. Run `git log` to find the last known good commit hash.
2. Run `git checkout <commit-hash>`.
3. Rebuild the site (`npm run build`) and redeploy.

## 11. V1 Limitations
Per the approved project scope, V1 explicitly does NOT include:
- A CMS, database, or backend.
- User accounts or login systems.
- Online donations or payments.
- Contact form backend processing (the site uses direct `tel:`, `mailto:`, and WhatsApp links).
- Custom livestreaming infrastructure.