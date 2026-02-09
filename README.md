# Baza Studio

A Next.js App Router starter with Tailwind CSS and Prisma.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a local environment file:
   ```bash
   cp .env.example .env
   ```
3. Generate the Prisma client and run migrations:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project structure

- `app/` - App Router pages and API routes.
- `prisma/` - Prisma schema and migration history.
- `lib/` - Shared utilities, including the Prisma client.

## Booking API

POST `/api/booking` accepts JSON payloads:

```json
{
  "name": "Alex",
  "email": "alex@domain.com",
  "service": "Signature styling",
  "date": "2026-04-02"
}
```

## Stripe setup (local + dashboard)

1. Create a product + price in the Stripe Dashboard (Payments → Products) for the booking deposit.
2. Copy your API keys from Developers → API keys and set them in `.env`:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
3. Create a webhook endpoint in Developers → Webhooks that points to:
   - `http://localhost:3000/api/webhook`
   - Subscribe to the `checkout.session.completed` event.
4. For local development, use Stripe CLI to forward webhooks:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
   Then copy the displayed signing secret into `STRIPE_WEBHOOK_SECRET`.
5. Ensure `NEXT_PUBLIC_APP_URL` matches your local or production base URL so Stripe can return to
   `/success` and `/cancel`.
