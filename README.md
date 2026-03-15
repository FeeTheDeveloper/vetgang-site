# Vet Gang Site

Official Next.js 14 website for Vet Gang — a veteran-owned national movement and verified business network.

This repository is structured for reliable local development and clean Vercel deployments with minimal setup friction.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint + Prettier
- Node.js 20.x
- Optional AWS DynamoDB-backed intake/admin workflow

## Quick Start (Local)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open:

   ```text
   http://localhost:3000
   ```

## Build + Verification Workflow

Run these before deploying to avoid common CI/Vercel issues:

```bash
npm run lint
npm run build
npm run start
```

If all three pass locally on Node 20.x, the app is in a good state for Vercel deployment.

## Production Deployment (Vercel)

### 1) Import the repository

- In Vercel, create a new project and import this repo.
- Framework preset should auto-detect as **Next.js**.

### 2) Keep build settings default

- **Build Command:** `next build`
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (or your lockfile default)

### 3) Set runtime version

- Ensure Node.js is **20.x** (matches `package.json` engines).

### 4) Configure environment variables (if using intake/admin)

Add these in Vercel Project Settings → Environment Variables:

- `DDB_TABLE_INTAKE`
- `ADMIN_USER`
- `ADMIN_PASS`
- `AWS_REGION` (or `AWS_DEFAULT_REGION`)
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `NEXT_PUBLIC_LAUNCH_MODE` (`pre` or `live`)

> If the intake/admin flow is not enabled, only set variables required by your active features.

### 5) Deploy

- Trigger deploy from main branch or your release branch.
- Verify homepage, join flow, contact page, and admin route behavior post-deploy.

## Routes

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

## Brand Notes

- Visual system is military-inspired, high-contrast, and dark-first.
- Core tokens and global styling are centralized in:
  - `tailwind.config.ts`
  - `app/globals.css`

## Troubleshooting

- Use Node 20.x to prevent build/runtime mismatches.
- Re-run `npm install` after dependency updates.
- If a Vercel deploy fails, reproduce with `npm run build` locally first.
- Confirm environment variables are configured for the target environment (Preview/Production).
