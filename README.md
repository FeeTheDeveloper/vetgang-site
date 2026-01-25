# VET GANG — Airspace Guard (Next.js App Router)

A Vercel-safe, cinematic WebGL flagship site for VET GANG using Next.js App Router, TailwindCSS, and @react-three/fiber.

## Quickstart

```bash
npm install
npm run dev
```

## Build + Deploy

```bash
npm run lint
npm run build
npm run start
```

Deploy on Vercel with the default Next.js settings (Node 20+).

## Admin Access

The intake pipeline stores submissions in DynamoDB and protects the admin review UI with basic auth. Set the following
environment variables in Vercel (or your local `.env`):  

- `DDB_TABLE_INTAKE`: DynamoDB table name for intake records.
- `ADMIN_USER`: Basic auth username for `/admin` and `/api/admin/*`.
- `ADMIN_PASS`: Basic auth password for `/admin` and `/api/admin/*`.
- `AWS_REGION` (or `AWS_DEFAULT_REGION`): AWS region for DynamoDB.
- `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`: IAM credentials with DynamoDB access.

## Structure

```
app/
  (site)/
    layout.tsx
    page.tsx
    join/page.tsx
    partners/page.tsx
    about/page.tsx
    contact/page.tsx
components/
  background/
    AirspaceBackground.tsx
    AirspaceCanvas.tsx
    layers/
  sections/
    Hero.tsx
  ui/
    Button.tsx
    Container.tsx
lib/
  constants.ts
  motion.ts
public/
  assets/silhouettes/*.svg
```

## Notes
- Background respects `prefers-reduced-motion` and performance tiers.
- WebGL loads lazily to protect first paint.
