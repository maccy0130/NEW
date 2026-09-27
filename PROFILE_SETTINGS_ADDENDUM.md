# CareerOS Ultimate — Profile & Settings Addendum

## Structure

The Settings tab is organized into six main sections accessible via cards or an accordion:

1. **Account** — Profile, login/sessions, security & 2FA
2. **Preferences** — Notifications, theme, language
3. **Billing** — Current plan, usage, payment method
4. **Data & Privacy** — How we use data, Privacy Policy, Terms, export/delete
5. **Support & Feedback** — Reviews (1-5 star + comment), Contact Us, Help/FAQ
6. **About** — App version, credits (Saket Yadav / Maccy Creations), contact

## Legal Templates

All copy is included in `lib/legal-copy.ts` and ready to display:

- **Data Usage Summary** — Short, plain-language explanation (shown inline in Settings)
- **Privacy Policy** — Full policy template covering data collection, use, sharing, retention, rights, security
- **Terms of Service** — Usage terms, subscriptions, AI limitations, liability, contact

## Database

The Prisma schema now includes:

- `Review` — 1-5 star ratings + optional comments from users
- `FeedbackMessage` — User/anonymous feedback emails (stored, can be reviewed internally)

## Next Steps

1. Run `npm run db:generate && npm run db:push`
2. Build the Account subsection (profile edit, session management, 2FA toggle via Clerk)
3. Build Preferences (toggle switches, theme picker, language dropdown)
4. Wire up Stripe Customer Portal for Billing
5. Add Export Data and Delete Account handlers (Server Actions)
6. Display legal copy on Privacy, Terms, About pages
7. Implement review and feedback submission forms

## Important Note on Legal Review

The templates provided are a solid starting point, **not legal advice**. Before launch, especially if users outside your home country sign up, consider a quick review by a lawyer or a legal template service (Termly, iubenda) to ensure GDPR/CCPA compliance.
