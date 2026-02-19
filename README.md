# Muloo Website Project

This is a React-based website for Muloo, built with Vite, Tailwind CSS, and Wouter.
It is designed to be a high-fidelity prototype that can be converted into a HubSpot CMS theme.

## Project Structure

- `client/src/components/sections/`: Reusable section components (Hero, FeatureGrid, ServiceCard, etc.).
- `client/src/components/ui/`: Low-level UI atoms (Buttons, Cards, Inputs).
- `client/src/pages/`: Page components corresponding to routes.
- `client/src/lib/content.ts`: structured content objects containing the copy.
- `client/src/index.css`: Tailwind configuration and CSS variables for the design system.

## Design System

- **Colors**:
  - Navy: `hsl(233 81% 10%)` (Backgrounds, Text)
  - Teal: `hsl(182 100% 40%)` (Primary accents, Buttons, Links)
  - Orange: `hsl(24 90% 54%)` (HubSpot specific accents)
- **Typography**: Montserrat (Google Font).
- **Dark Mode**: The site is built with a "dark mode by default" aesthetic.

## How to Export for HubSpot Theme Conversion

To port this to a HubSpot Theme:

1.  **Global Styles (`theme.json`)**:
    -   Map the CSS variables in `client/src/index.css` to HubSpot `theme.json` fields.
    -   `--color-brand-navy` -> `colors.primary`
    -   `--color-brand-teal` -> `colors.secondary`
    -   `--font-sans` -> `fonts.primary`

2.  **Modules**:
    -   Each component in `client/src/components/sections/` should be converted to a HubSpot Module.
    -   Example: `Hero.tsx` -> `hero_section.module`
    -   Replace React props with HubL fields (`{{ module.headline }}`, `{{ module.subhead }}`).

3.  **Templates**:
    -   `client/src/pages/` components correspond to HubSpot page templates.
    -   `client/src/components/layout/` (Header, Footer) should be Global Partials.

4.  **Assets**:
    -   Upload fonts and images to HubSpot File Manager.
    -   Compile Tailwind CSS to a standard `main.css` file and include it in the theme.

## Development

-   Run `npm run dev` to start the local server.
-   Edit content in `client/src/lib/content.ts` or directly in page components.
