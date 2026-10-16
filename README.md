# Baker's Guns & Ammo — Website concept

Responsive, mobile-friendly storefront website for Baker's Auto & Tire LLC — Guns & Ammo, Andrews, NC.

## Features

- Business emblem and actual in-store photography
- Responsive showroom gallery and lightbox
- Information about the shop and services, click-to-call, and driving directions
- Informational website only; no ecommerce, online firearm purchasing, payments, or inventory listing

## GitHub Pages setup (one-time)

All website files are committed to `main`, and `.github/workflows/pages.yml` is ready to deploy automatically. **Pages must be enabled in repository settings before the first deployment can succeed:**

1. Visit https://github.com/Jack11111/bakers-guns-ammo/settings/pages
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Visit https://github.com/Jack11111/bakers-guns-ammo/actions/workflows/pages.yml and re-run the failed workflow (or push another commit to `main`).
4. After a successful deployment, visit https://jack11111.github.io/bakers-guns-ammo/

Subsequent commits to `main` redeploy automatically. No build step or secrets are needed.

## Before promoting the site to customers

Ask the store owner to approve photo/logo usage and verify their legal business name, services, FFL-transfer information, published address, and phone number. Store hours are intentionally omitted pending confirmation.

## Files

- `index.html`: website content, navigation, SEO tags
- `styles.css`: visual design and responsive layouts
- `script.js`: mobile navigation, transitions, photo gallery lightbox
- `assets/`: optimized photos and emblem
- `.github/workflows/pages.yml`: deployment workflow
