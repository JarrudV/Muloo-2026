# Muloo Website

## Overview

Muloo is a marketing website for a Cape Town-based technical consultancy that specializes in HubSpot implementation, custom software engineering, and AI acceleration services. The site is built as a React SPA with an Express backend, designed as a high-fidelity prototype that will eventually be converted into a HubSpot CMS theme.

The four service streams are:
- **Muloo Hub** – HubSpot system implementation and optimization
- **Muloo Build** – Integrations, APIs, middleware, client portals
- **Muloo AI** – AI agents, vibe coding, Codex dev agents
- **Muloo Product** – Commercial SaaS and internal tools

The site uses a dark-mode-by-default aesthetic with a navy/teal color palette and service-stream accent colors (orange for Hub, blue for Build, purple for AI, green for Product).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — NOT React Router
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin, with CSS variables defined in `client/src/index.css`
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, located in `client/src/components/ui/`
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Typography**: Montserrat (headings/body) and JetBrains Mono (code snippets), loaded via Google Fonts

### Component Architecture
- `client/src/components/sections/` – Reusable page section components (Hero, FeatureGrid, ServiceCard, ContactForm, Partners). These are designed to map 1:1 to future HubSpot modules.
- `client/src/components/ui/` – Low-level UI atoms from shadcn/ui (Button, Card, Badge, Input, etc.)
- `client/src/components/layout/` – Layout shell components (Header, Footer, Layout wrapper, MulooAssist chat placeholder)
- `client/src/pages/` – Page-level components corresponding to routes. These map to future HubSpot templates.
- `client/src/lib/content.ts` – Centralized structured content objects (navigation links, home page copy, service descriptions). All copy lives here rather than being hardcoded in components.

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via `tsx`
- **API**: RESTful endpoints under `/api/` prefix
- **Current endpoints**:
  - `POST /api/inquiries` – Submit a contact form inquiry
  - `GET /api/inquiries` – List all inquiries
- **Dev server**: Vite dev server is integrated as middleware in development mode via `server/vite.ts`
- **Production**: Client is built to `dist/public/`, server is bundled with esbuild to `dist/index.cjs`

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's `pgTable` definitions
- **Tables**:
  - `users` – id (UUID), username, password
  - `inquiries` – id (UUID), name, email, company (optional), message, created_at
- **Validation**: Drizzle-Zod generates insert schemas from table definitions
- **Connection**: `pg` Pool using `DATABASE_URL` environment variable
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)

### Design System
- **Color tokens** are defined as CSS custom properties in `client/src/index.css` and mapped to Tailwind theme
- Core colors: Navy (`#050A30`), Teal (`#00C4CC`), White, Soft Teal (`#E6FBFD`)
- Stream accent colors: Orange (Hub), Blue (Build), Purple (AI), Green (Product)
- Stream accent colors (CSS variables): `--color-stream-hub` (#F47621), `--color-stream-build` (#155DFC), `--color-stream-ai` (#C140FF), `--color-stream-product` (#59BF96)
- Custom gradient classes: `bg-hero-gradient`, `bg-section-soft`, `bg-section-light`
- Stream glow backgrounds: `glow-hub`, `glow-build`, `glow-ai`, `glow-product`
- Box shadow glows: `glow-teal-sm`, `glow-orange-sm`, `glow-blue-sm`, `glow-purple-sm`, `glow-green-sm`
- Visual utilities: `glass-card`, `bg-grid-pattern`, `bg-grid-pattern-fade`, `code-block`
- Text gradients: `text-gradient-teal`, `text-gradient-orange`
- Badge variants: `teal`, `hubspot`, `navy` (in addition to shadcn defaults)

### Build System
- **Dev**: `npm run dev` runs the Express server with Vite middleware (hot module replacement)
- **Build**: `npm run build` runs a custom `script/build.ts` that builds the client with Vite and bundles the server with esbuild
- **Path aliases**: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

## External Dependencies

### Database
- **PostgreSQL** – Required. Connection via `DATABASE_URL` environment variable. Used through Drizzle ORM with the `pg` driver.

### Google Fonts
- Montserrat (weights 100-900) and JetBrains Mono (weights 400-600) loaded from Google Fonts CDN in `client/index.html`

### Key NPM Packages
- **Radix UI** – Full suite of accessible UI primitives (dialog, dropdown, tabs, accordion, etc.)
- **TanStack React Query** – Server state management and data fetching
- **React Hook Form** + **Zod** – Form handling and validation
- **Embla Carousel** – Carousel component
- **Lucide React** – Icon library
- **class-variance-authority** + **clsx** + **tailwind-merge** – Utility-first component styling

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` – Error overlay in development
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` – Dev tooling (conditionally loaded)
- Custom `vite-plugin-meta-images` – Updates OpenGraph meta tags with deployment URL

### Future Integration (Not Yet Implemented)
- **HubSpot CMS** – The component architecture is designed for conversion to HubSpot modules and templates
- **Muloo Assist** – Placeholder chat widget in bottom-right corner, to be replaced with a HubSpot agent