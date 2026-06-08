# Big Mike's Jerky — Shopify Theme

A custom, bold-and-modern Shopify theme for **Big Mike's Jerky**.
Black background, white text, and a `#B11F24` red accent. Built from scratch in Liquid.

---

## What's inside

```
big-mikes-jerky/
├── assets/
│   ├── theme.css          # All styling (design system + components)
│   └── global.js          # Mobile nav, qty steppers, gallery, cart count
├── config/
│   ├── settings_schema.json   # Theme settings (colors, fonts, layout)
│   └── settings_data.json     # Saved values for those settings
├── layout/
│   └── theme.liquid       # Global HTML shell (<head>, header, footer)
├── locales/
│   └── en.default.json    # All UI text strings
├── sections/
│   ├── header.liquid          # Sticky nav + cart/search icons
│   ├── footer.liquid          # Footer with menu columns
│   ├── hero.liquid            # Homepage hero + ticker strip
│   ├── flavor-showcase.liquid # The 4-flavor grid
│   ├── value-props.liquid     # "Why our jerky" icons row
│   ├── featured-products.liquid
│   ├── newsletter.liquid
│   ├── main-product.liquid    # Product page body
│   └── main-collection.liquid # Collection (product grid) body
├── snippets/
│   └── product-card.liquid    # Reusable product card
└── templates/
    ├── index.json             # Homepage (assembles the sections above)
    ├── product.json
    ├── collection.json
    ├── list-collections.liquid
    ├── cart.liquid
    ├── search.liquid
    ├── page.liquid
    └── 404.liquid
```

---

## Quick start (preview live, then publish)

You'll need a Shopify store and Node.js installed.

### 1. Install the Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
```

### 2. Preview the theme on your store
From inside the `big-mikes-jerky/` folder:
```bash
shopify theme dev --store your-store.myshopify.com
```
This opens a live local preview that updates as files change. It will ask you to log in to your store the first time.

### 3. Push it to your store (as an unpublished draft)
```bash
shopify theme push --unpublished --theme "Big Mike's Jerky"
```
The theme now appears in **Shopify admin → Online Store → Themes** as a draft.

### 4. Make it the main design
In **Online Store → Themes**, find "Big Mike's Jerky" and click **Publish**. That's it — it's now your live storefront design.

> Prefer no command line? You can instead zip the `big-mikes-jerky` folder and upload it via
> **Online Store → Themes → Add theme → Upload zip file**.

---

## Setting up your content (do this once)

The design ships with placeholder copy already filled in. To make it *your* store:

1. **Create your 4 products** in Shopify admin (Products → Add product). Suggested:
   Original, Teriyaki, Black Pepper, Habanero Heat. Add a photo and price to each.
2. **Create a collection** (e.g. "Best Sellers" or "All Jerky") and add your products.
3. **Open the theme editor** (Themes → Customize). Then:
   - **Header**: upload a logo, or keep the "BIG MIKE'S **JERKY**" text logo. Set the nav menu.
   - **Hero**: upload a background photo (a dark, smoky shot works best).
   - **Flavor showcase**: drop an image into each of the 4 flavor cards and link them to products.
   - **Featured products**: pick the collection you created in step 2.
   - **Footer**: set your menu columns.
4. **Navigation menu**: Online Store → Navigation → "Main menu" controls the header links.

---

## Customizing the look (no code needed)

Open **Themes → Customize → Theme settings**:
- **Colors** — background, surface, text, muted text, and the two accent reds.
- **Typography** — heading + body fonts (Shopify font library).
- **Layout** — max page width, and the announcement bar text/toggle.

All colors and fonts flow through CSS variables in `layout/theme.liquid`, so changing a setting updates the whole site.

---

## Notes & honest caveats

- **Cart & checkout**: The cart page uses Shopify's standard cart form, and checkout is handled by Shopify (secure + PCI compliant) — you don't manage payment code.
- **Images**: Where you haven't uploaded a photo yet, Shopify shows a built-in placeholder graphic.
- **This is a clean, lightweight custom theme.** If you later want advanced features (mega menu, predictive search dropdown, product quick-view, etc.), those can be added as new sections/snippets.

Smoked, not joked. 🔥
