# Qualz.ai Marketing Website

The official marketing website for Qualz.ai - an AI-powered qualitative research platform.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── features/          # Features page
│   ├── solutions/         # Solutions page
│   ├── pricing/           # Pricing page
│   ├── docs/              # Documentation page
│   └── contact/           # Contact page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturesPreview.tsx
│   │   ├── HowItWorks.tsx
│   │   └── ...
│   └── chatbot/           # Mock chatbot UI
├── data/                  # Static data files
│   ├── features.ts
│   ├── solutions.ts
│   └── pricing.ts
└── lib/                   # Utility functions
    └── utils.ts
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, features preview, solutions |
| Features | `/features` | All platform features and research lenses |
| Solutions | `/solutions` | Industry-specific use cases |
| Pricing | `/pricing` | Pricing tiers and FAQ |
| Docs | `/docs` | Documentation overview |
| Contact | `/contact` | Contact and demo booking |

## Brand Colors

```css
--brand-purple: #7C3AED
--brand-purple-light: #A855F7
--brand-green: #10B981
--brand-orange: #F59E0B
--brand-blue: #3B82F6
```

## Updating Content

### Features
Edit `src/data/features.ts` to add/modify features.

### Solutions
Edit `src/data/solutions.ts` to add/modify solutions.

### Pricing
Edit `src/data/pricing.ts` to update pricing tiers and FAQ.

### Logos
Add logos to `public/images/logos/` and update component references.

## Demo Booking

All "Request Demo" CTAs link to:
```
https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting
```

## Deployment

The site is configured for static export. Use the GitHub Actions workflow in `.github/workflows/deploy.yml` for CI/CD.

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

## Related Repositories

This is part of the Qualz marketing websites ecosystem:

- [bigyan_analytics](https://github.com/prwlnght/bigyananalytics_marketing.git)
- [consulting_marketing](https://github.com/prwlnght/consulting_marketing.git)
- [startup_insights_marketing](https://github.com/prwlnght/startup_insights_marketing.git)
- [nonprofit_insights_marketing](https://github.com/prwlnght/nonprofit_insights_marketing.git)
- [healthcare_marketing](https://github.com/prwlnght/healthcare_marketing.git)

## License

Proprietary - Qualz.ai
