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
