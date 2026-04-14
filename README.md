# Pipe-Up — pipe-up.ca

Landing page for the Pipe-Up platform. Built with Next.js 14 App Router, deployed on Vercel.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules + global CSS variables
- **Fonts**: Montserrat via Google Fonts
- **Deployment**: Vercel

## Project structure

```
pipe-up/
├── app/
│   ├── api/contact/route.js   ← Contact form API endpoint
│   ├── globals.css            ← Brand tokens + shared styles
│   ├── layout.jsx             ← Root layout + metadata
│   └── page.jsx               ← Main page (assembles components)
├── components/
│   ├── Logo.jsx / *           ← SVG logo icon
│   ├── Nav.jsx / *            ← Fixed navigation
│   ├── Hero.jsx / *           ← Hero section
│   ├── ProblemBand.jsx / *    ← Orange problem statement band
│   ├── HowItWorks.jsx / *     ← 3-step how it works
│   ├── Features.jsx / *       ← 6 feature cards
│   ├── Audience.jsx / *       ← Who it's for
│   ├── Contact.jsx / *        ← Demo request form
│   └── Footer.jsx / *         ← Footer
└── public/                    ← Static assets (add logo PNG/SVG here)
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment (optional — enables email notifications)
cp .env.local.example .env.local
# Add your RESEND_API_KEY to .env.local

# 3. Run development server
npm run dev
# → http://localhost:3000
```

## Deploying to Vercel

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — Push to GitHub, import in Vercel dashboard
# vercel.com/new → Import Git Repository
```

### Point pipe-up.ca to Vercel

1. In Vercel dashboard → your project → Settings → Domains
2. Add `pipe-up.ca` and `www.pipe-up.ca`
3. Update DNS at your registrar:
   - `A` record → `76.76.21.21`
   - `CNAME www` → `cname.vercel-dns.com`

## Wiring up the contact form (email notifications)

The form currently logs submissions to the Vercel console. To receive email alerts:

1. Sign up at [resend.com](https://resend.com) (free tier covers this easily)
2. Add your API key to Vercel environment variables:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO_EMAIL` = your receiving email
3. Uncomment the Resend block in `app/api/contact/route.js`
4. Run `npm install resend`

## Adding your logo image

Replace the SVG icon in `components/Logo.jsx` with your actual logo file:

1. Drop `logo.svg` or `logo.png` into `/public/`
2. In `Logo.jsx`, replace the `<svg>` block with:
   ```jsx
   import Image from 'next/image';
   export default function Logo({ size = 44 }) {
     return <Image src="/logo.svg" width={size} height={size} alt="Pipe-Up" />;
   }
   ```

## Growing the site

Each section is its own component — adding pages is straightforward:

- `/app/blog/page.jsx` → Blog
- `/app/pricing/page.jsx` → Pricing page
- `/app/about/page.jsx` → About / team page
