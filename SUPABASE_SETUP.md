# Supabase setup

The project is configured for Supabase project `kyrsdewrgqejoajhpfrn`.

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and fill in the database passwords locally:

   ```bash
   cp .env.example .env.local
   ```

   `DATABASE_URL` must use the Supabase pooler on port `6543` with `?pgbouncer=true`. `DIRECT_URL` must use the direct database connection on port `5432`. Do not commit `.env.local` or share either password.

3. Generate Prisma Client:

   ```bash
   npm run db:generate
   ```

4. After reviewing the schema, push it to Supabase:

   ```bash
   npm run db:push
   ```

   This command requires a configured `DATABASE_URL`/`DIRECT_URL`; it cannot be run from GitHub without those secrets.

## Optional Supabase CLI linking

Install the Supabase CLI, then authenticate and link from your local terminal:

```bash
supabase login
supabase init
supabase link --project-ref kyrsdewrgqejoajhpfrn
```

Interactive authentication is intentionally not automated by this repository.

## RLS checklist

Prisma creates tables but does not configure Supabase Row Level Security. Before production:

- Enable RLS on every user-owned table in Supabase Dashboard → Table Editor → each table → RLS.
- Add policies that scope rows to the authenticated user. Because this schema uses a server-side Prisma `User` record with a `clerkId`, map the authenticated Supabase subject to `User` before using `auth.uid()` policies, or use Supabase Auth consistently instead of Clerk.
- Add separate policies for public job listings if those are intended to be readable without authentication.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.

## Connection test

After local credentials are configured, a safe test is:

```bash
npx prisma db execute --stdin <<'SQL'
SELECT COUNT(*) FROM "User";
SQL
```

The repository only contains placeholders; it does not log or commit your database password.
