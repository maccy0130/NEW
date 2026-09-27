# CareerOS Ultimate

CareerOS is a polished Next.js career command center for job seekers and career changers. The initial dashboard shell is ready, with navigation for skills, AI coaching, roadmaps, resumes, jobs, applications, interviews, AI tools, and settings.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`. The dashboard currently renders with demo data and does not require credentials. Add Clerk, PostgreSQL, Anthropic, Stripe, Supabase, Resend, and job-board credentials as each module is connected.

## Database

```bash
npm run db:generate
npm run db:push
```

## Deployment

1. Push this repository to GitHub.
2. Import `maccy0130/NEW` into Vercel.
3. Add the variables from `.env.example` in Project Settings → Environment Variables.
4. Set the production build command to `npm run build`.
5. Deploy to the free `vercel.app` domain, then add a custom domain later under Vercel → Domains if needed.

## Product direction

The next implementation slices are authentication and persistence, then profile/settings, skills, resume editing, job aggregation, applications, roadmap generation, AI career chat, interviews, and the AI Hub.
