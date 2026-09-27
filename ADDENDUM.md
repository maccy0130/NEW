# CareerOS Addendum

## Skills and role alignment

The full categorized skill taxonomy and role matrix are in `lib/skill-categories.ts`. Use the categories for collapsible Skills UI groups and `ROLE_SKILL_MATRIX` for role recommendations. A competent skill is currently defined as a self-rating or AI level of 3 or higher.

## Live jobs strategy

Tier A sources are free/public: Adzuna, USAJobs, Arbeitnow, RemoteOK, Remotive, Himalayas, and WeWorkRemotely. Tier B sites such as LinkedIn, Indeed, Glassdoor, Naukri, and FlexJobs should not be scraped; use an official partnership or a licensed aggregator such as JSearch later. Tier C adapters should use public ATS feeds, beginning with Greenhouse and Lever.

The Prisma schema now includes `RoleSkillMap` and `CompanyBoard`. Run `npm run db:generate` after installing dependencies, then `npm run db:push` with a configured `DATABASE_URL`.
