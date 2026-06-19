# Gaurav Kumar Arya — Portfolio

SEO-optimised personal portfolio for **Gaurav Kumar Arya**, Frontend Architect with 9+ years of experience.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion v12 |
| Forms | React Hook Form + Zod |
| Icons | Lucide React + inline SVG brand icons |
| Hosting | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout · metadata · JSON-LD
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind v4 theme + custom utilities
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   └── api/contact/
│       └── route.ts        # Contact form API (rate-limited + XSS-sanitized)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with scroll-aware styling
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ImpactSnapshot.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── AnimatedCounter.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── SectionWrapper.tsx
│       └── icons.tsx       # Brand SVGs (GitHub, LinkedIn, Dev.to, Medium)
├── data/
│   ├── personal.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
└── lib/
    └── utils.ts
```

## Deployment

Deploy instantly with Vercel:

```bash
npx vercel
```

Security headers (CSP, HSTS, X-Frame-Options, etc.) are pre-configured in `vercel.json`.

## Contact Form — Email Provider Setup

The `/api/contact` route validates and sanitizes inputs but needs an email provider to actually send mail.

**Option A – Resend (recommended):**
```bash
npm install resend
```
Add to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```
Then uncomment the Resend block in `src/app/api/contact/route.ts`.

**Option B – Nodemailer (SMTP):**
Add SMTP credentials to `.env.local` and uncomment the Nodemailer block.

See `.env.local.example` for all available environment variables.

## Resume PDF

Place your resume at `public/gaurav-arya-resume.pdf`. The hero and navbar "Resume" buttons point there.

## OG Image

Add an Open Graph image at `public/og-image.png` (1200×630 px) to complete SEO setup.

## Build

```bash
npm run build   # Production build (Turbopack)
npm start       # Start production server
```

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Navy | `#1a2639` | Primary background |
| Navy Dark | `#0d1520` | Deepest background |
| Gold | `#d4af37` | Accent, CTAs, highlights |
| Gold Light | `#e8c84a` | Hover state |
| Gray 300 | `#d1d5db` | Body text |
| Gray 400 | `#9ca3af` | Muted text |
