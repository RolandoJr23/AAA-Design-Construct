# AAA Design & Construct

A modern, responsive company website for **AAA Design & Construct** — a professional design and construction firm offering premium residential and commercial services. Built with Next.js 15, Tailwind CSS v4, and a dark/gold theme that reflects the brand's elegance and craftsmanship.

---

## Overview

AAA Design & Construct is a full-service design and build company that creates functional, durable, and beautiful spaces. This website serves as their digital presence — showcasing their services, featured projects, company values, and a direct contact form for client inquiries.

The site is designed with a dark aesthetic (`bg-black`) accented with gold (`text-amber-400`, `border-amber-400`) to convey premium quality. All sections feature smooth scroll-reveal animations, responsive layouts, and optimized image loading.

---

## Features

### General
- Fully responsive across mobile, tablet, and desktop
- Smooth scroll-reveal animations on all sections using `IntersectionObserver`
- Dark/gold brand theme throughout
- Accessible — skip-to-content link, ARIA labels, keyboard navigation support
- Optimized `next/image` usage with correct `sizes` props on all `fill` images

### Navbar
- Fixed top navigation with gradient backdrop
- Smooth mobile hamburger menu with animated open/close
- Links to all page sections: Services, Projects, About, Contact
- "Get a quote" CTA button

### Hero Section
- Full-screen background image with gradient overlay
- Animated headline, subtext, and CTA buttons
- "Why clients choose us" card with key value propositions
- Stat badges: Premium, Crafted, Built, Delivered

### Services Section
- 9 services displayed in a responsive grid
- Initial view shows 3 cards with a "Load more" button that reveals all
- Each card links to `/explore?id=` for a dedicated service detail page
- Services covered:
  - Customized Cabinet
  - Ceiling and Partition
  - Paint
  - Re-Paint
  - Renovation
  - Finishing
  - Gate
  - Tiles
  - Laminated

### Featured Projects Section
- 10 real projects displayed in a 3-column responsive grid
- Initial view shows 6 cards with a "Load more" button
- Clicking any project card opens a full modal with:
  - Image slider (arrows, dot indicators, counter, keyboard arrow support)
  - Thumbnail strip for quick navigation
  - Project title and description
  - "Get a Quote" CTA that closes the modal and scrolls to contact
- Scroll lock on body when modal is open
- Hidden scrollbar inside modal

### Explore Page (`/explore?id=`)
- Dedicated page per service, driven by `?id=` query param
- Hero banner using the service's thumbnail image
- Overview section with full service description
- Project gallery grid of all service images
- CTA block linking back to the contact form
- "Other Services" grid showing all other services with their thumbnails

### About Section
- Company promise cards: Clean communication, Quality materials, Beautiful finishing
- Feature image with "Design + Build in one team" callout

### Contact Section
- Functional contact form powered by **EmailJS**
- Fields: Name, Email, Project type (dropdown), Message
- Sending state, success, and error feedback
- Contact details panel: email and phone
- Background image card with "Want faster planning?" prompt

### Footer
- Brand logo and tagline
- Quick links to all sections
- Contact info (phone, email)
- Social media links (Facebook, Instagram)
- Copyright notice

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.9 | React framework, App Router, SSR/SSG |
| [React](https://react.dev) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | ^4.3.1 | Utility-first styling |
| [MUI Icons](https://mui.com/material-ui/material-icons/) | ^9.1.1 | Icon components (loaded with `ssr: false`) |
| [Lucide React](https://lucide.dev) | ^1.22.0 | Lightweight icon set |
| [@emailjs/browser](https://www.emailjs.com) | latest | Client-side email sending |
| [next/image](https://nextjs.org/docs/app/api-reference/components/image) | built-in | Optimized image loading |
| [next/dynamic](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading) | built-in | Dynamic imports with `ssr: false` for MUI icons |

---

## Project Structure

```
app/
├── assets/
│   ├── images/
│   │   ├── featuredprojects/   # Project gallery images (project1–project10)
│   │   └── services/           # Service gallery images (9 categories)
│   ├── logo/                   # Brand logo variants
│   └── videos/
├── components/
│   ├── ContactForm.tsx         # EmailJS-powered contact form ("use client")
│   ├── FeaturedProjectsDetailsModal.tsx  # Project modal with image slider
│   ├── FeaturedProjectsGrid.tsx          # Projects grid with load more + modal state
│   ├── Footer.tsx              # Site footer
│   ├── Navbar.tsx              # Fixed top navigation
│   ├── ScrollReveal.tsx        # IntersectionObserver animation wrapper
│   ├── SectionHeading.tsx      # Reusable section title component
│   └── ServicesGrid.tsx        # Services grid with load more
├── explore/
│   └── page.tsx                # Service detail page (/explore?id=)
├── files/
│   ├── FeaturedPorjectsDetails.ts  # 10 featured project data + image imports
│   └── ServicesDetails.ts          # 9 service data + thumbnail/gallery imports
├── globals.css                 # Global styles, scrollbar-hide utility
├── layout.tsx                  # Root layout
└── page.tsx                    # Homepage (Server Component)
```

---

## Featured Projects

| # | Title | Description |
|---|---|---|
| 1 | Project 1 | Modern living space with custom wood-slat TV accent wall and forest green dining nook |
| 2 | Project 2 | Sleek minimalist kitchen with matte charcoal cabinetry and white marble backsplash |
| 3 | Project 3 | Custom floor-to-ceiling modular wardrobe with glossy beige doors |
| 4 | Project 4 | Modern L-shaped kitchen with warm wood cabinetry and integrated LED backlighting |
| 5 | Project 5 | Elegant custom bar counter with white marble surfaces and dark wood accent pillar |
| 6 | Project 6 | Minimalist straight kitchen with light wood-grain cabinetry and grey granite countertop |
| 7 | Project 7 | Modern home bar counter with dark wood-slat base and integrated side shelving |
| 8 | Project 8 | All-white minimalist U-shaped kitchen with marble-veined countertops |
| 9 | Project 9 | Contemporary open-concept living room with marble-clad TV accent wall |
| 10 | Project 10 | Luxurious entertainment area with glossy white TV backdrop and glass display cabinets |

---

## EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com) to send emails directly from the browser without a backend.

Open `app/components/ContactForm.tsx` and replace the placeholder values:

```ts
const SERVICE_ID  = "YOUR_SERVICE_ID";   // Email Services → your connected service
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // Email Templates → your template
const PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // Account → General → Public Key
```

Your EmailJS template should use these variables:

```
From: {{from_name}} ({{from_email}})
Project Type: {{project_type}}

{{message}}
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm run start
```

---

## Contact

**AAA Design & Construct**
- Email: aa019921@gmail.com
- Phone: +639975042829
