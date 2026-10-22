# Manjula Constructions — Home Design & Construction

A modern, responsive, architectural portfolio and lead-generation website built for **Manjula Constructions**, based in Kochchikade, Negombo, Sri Lanka.

![Manjula Constructions](/public/images/company-banner.jpg)

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, JavaScript & JSX)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with bespoke Navy & Construction Yellow brand system
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **SEO & Structured Data**: Built-in `HomeAndConstructionBusiness` Schema.org JSON-LD and OpenGraph metadata
- **Deployment Ready**: Optimized for [Vercel](https://vercel.com/)

---

## 🏢 Company Profile

- **Name**: Manjula Constructions
- **Category**: Home Design & Construction
- **Location**: No. 560/01, Daluwakotuwa, Kochchikade, Negombo, Sri Lanka
- **Contact Numbers**:
  - `077 808 8058`
  - `076 323 1495`
  - `076 889 8293` (WhatsApp connected)
- **Tagline**: *"Building Your Vision. Creating Your Future."*

---

## 🧭 Routes & Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero with architectural imagery, company intro, services grid, featured projects, process preview, why choose us, and CTAs. |
| `/about` | **About Us** | Company background in Kochchikade, mission & vision, quality commitments, and approach to materials & estimates. |
| `/services` | **Services** | All 9 core construction services (turnkey house construction, partition walls, plastering, tile fixing, ceiling work, electrical, plumbing, iron/aluminium, finishing work). |
| `/projects` | **Projects Gallery** | Filterable project showcase with category tags (House Construction, Ongoing Projects, Renovation & Finishing). |
| `/projects/[slug]` | **Project Detail** | Reusable dynamic route with project summary, gallery photos, delivered scope, and similar project CTA. |
| `/process` | **Our Process** | 6-stage construction journey from initial discussion to handover. |
| `/estimate` | **Request an Estimate** | Comprehensive inquiry form with client validation and API route integration. |
| `/testimonials` | **Testimonials & Values** | Verified feedback policy and core company commitments. |
| `/contact` | **Contact Us** | Direct `tel:` links, WhatsApp integration, live Google Maps embed of Kochchikade, and general contact form. |
| `/privacy-policy` | **Privacy Policy** | Transparent data collection notice for homeowners and visitors. |
| `not-found` | **Custom 404** | Branded error screen guiding users back to the homepage. |

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` if configuring custom domain or external email delivery:

```env
NEXT_PUBLIC_SITE_URL=https://manjulaconstructions.com
```

---

## 🌐 Deploy to Vercel

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Complete Manjula Constructions website"
   git push origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js and deploys seamlessly.
