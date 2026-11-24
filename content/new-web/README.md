Current page source: `content/web-content/*.html`, copied from the user-provided
workspace `web content` folder. These files supply complete content, SEO metadata,
browser interactions and the shared design stylesheet for the seven main pages.

The importer preserves the original website logo, Footer component, original
Home/About/Team/Contact sections, and original legal pages. App buttons use the
confirmed `com.recharge.online_saathi` Play Store listing. Internal HTML links
are converted to Gatsby routes, including section anchors.

Update the HTML files in `content/web-content/`, then run
`npm run import:new-web`. Gatsby also imports automatically at startup/build.
`content/new-web/data/settings.json` supplies the confirmed app link. The older
`content/new-web/templates/` and data are fallback inputs for pages without an
uploaded HTML file. Legal HTML files are kept as source references; the original
Privacy Policy, Terms and Refund Policy remain active.

Routes: `/`, `/about/`, `/workers/`, `/saathi/`, `/business/`, `/team/`,
`/contact/`, `/terms/`, `/privacy/`, `/refund/`. Existing `/about-us/`,
`/terms-condition/`, `/privacy-policy/`, `/refund-policy/` links remain supported.

Forms hand off their details to WhatsApp. PHP CMS/admin and server-side lead
storage are not part of the Gatsby integration.

Develop: `npm ci`, then `npm run develop`. Build: `npm run build`.

The original website Layout/Navbar/Footer are now used on all imported pages.
Home keeps the original hero layout but reads its copy and map from the uploaded
Home HTML (`src/data/new-web/hero.json`). Its two calls to action open Workers
and Saathi. The imported Home hero is removed from the additional sections so
it appears only once. Uploaded icons, SVGs, maps and embedded images are retained.

`static/imported-content.css` adapts imported content to the original theme.
`static/site-theme.css` and `ThemeToggle.js` add shared light/dark support to all
pages, including legacy and legal pages. The saved `os-theme` preference persists
between routes and reloads; otherwise the operating system preference is used.

Workers service cards use native sticky stacking with a small scroll-driven scale
in `components/NewWebsite/serviceStack.js`. Cards that cannot fit in the viewport
stay in normal flow; reduced-motion preferences disable stacking. Event listeners,
resize observers and animation frames are disposed when leaving the page.
