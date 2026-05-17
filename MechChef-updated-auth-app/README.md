# MechChef

MechChef is a UK-based home-cooked food delivery marketplace built with Next.js 14, App Router, Tailwind CSS, Prisma, Supabase PostgreSQL, NextAuth.js, Stripe, and Cloudinary.

## Getting Started

1. Copy `.env.example` to `.env` and add Supabase, NextAuth, Stripe, and Cloudinary credentials.
2. Install dependencies with `npm install`.
3. Generate Prisma client with `npm run prisma:generate`.
4. Create the database schema with `npm run prisma:migrate`.
5. Start the app with `npm run dev`.

The first product pass includes the customer marketplace, browse filters, cook profiles, checkout surface, order tracking, cook dashboard, authentication hooks, Stripe checkout session route, and Cloudinary upload signing route.
