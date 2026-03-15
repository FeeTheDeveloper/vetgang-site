# Vet Gang Site

Premium flagship website for Vet Gang — a veteran-owned national movement and verified business network.

Built to be Vercel-safe, production-ready, and aligned with a disciplined, tactical, high-trust brand system.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Node 20.x
- Optional AWS DynamoDB intake/admin pipeline

## Brand + Design Direction

- Dark cinematic UI with military-inspired contrast
- Core palette:
  - `ink-950` `#050607`
  - `ink-900` `#0b0d10`
  - `ink-800` `#12151a`
  - `army-olive` `#6B8E23`
  - `army-khaki` `#F0E68C`
  - `army-burgundy` `#800020`
  - `army-lime` `#32CD32`
- Buttons:
  - `primary` (burgundy + khaki)
  - `secondary` (khaki outlined/tinted)
  - `ghost` (low-noise tactical)

## Logo

Official logo asset is:

- `public/logo_main.png`

Used in the site header and footer via `next/image`.

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Quality + Build Checks

```bash
npm run lint
npm run build
npm run start
```

## Deployment (Vercel)

1. Import or reconnect this repository in Vercel.
2. Keep default Next.js build settings.
3. Ensure Node runtime is `20.x`.
4. Add required environment variables (if using intake/admin APIs).
5. Deploy.

## Environment Variables (Intake/Admin)

- `DDB_TABLE_INTAKE`
- `ADMIN_USER`
- `ADMIN_PASS`
- `AWS_REGION` (or `AWS_DEFAULT_REGION`)
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `NEXT_PUBLIC_LAUNCH_MODE` (`pre` or `live`)

## Key Routes

- `/` — flagship landing page
- `/about` — organization positioning
- `/network` — verified ecosystem model
- `/join` — membership flow + application form
- `/partners` — strategic partnership page
- `/contact` — direct inquiry form
- `/press/kit` — approved brand assets and messaging
- `/admin` — protected intake review UI

## Project Structure

```txt
app/
  (site)/
    layout.tsx
    page.tsx
    about/page.tsx
    network/page.tsx
    join/page.tsx
    partners/page.tsx
    contact/page.tsx
    press/kit/page.tsx
  api/
  globals.css
components/
  site/
  sections/
  forms/
  ui/
  background/
lib/
public/
  logo_main.png
  press/
```

## Notes

- Site metadata and OG image routing are pre-configured.
- Styling system is centralized in `tailwind.config.ts` and `app/globals.css`.
- Architecture preserves and upgrades existing repository structure instead of greenfield rebuilding.
