export const LEGAL_COPY = {
  dataUsageSummary: `We collect the information you give us directly — your profile details,
resume content, job applications, and messages you send our AI assistant —
to power the features you use: resume tailoring, job matching, roadmap
generation, and interview practice.

We do not sell your personal data. Resume and chat content may be sent to
our AI provider (Anthropic) to generate suggestions, but it is not used to
train their models on your behalf beyond standard API terms. You can export
or delete your data at any time from this page.`,

  privacyPolicy: `PRIVACY POLICY
CareerOS Ultimate — operated by Maccy Creations
Last updated: ${new Date().toISOString().split('T')[0]}

1. WHO WE ARE
CareerOS Ultimate is developed and operated by Maccy Creations ("we", "us").
Contact: careerosultimate@gmail.com.

2. INFORMATION WE COLLECT
- Account information: name, email, authentication data (via our login provider)
- Profile & career data: target role, skills, resume content, cover letters,
  job applications, interview notes
- Usage data: feature usage, AI credit consumption, device/browser information
- Content you submit to the AI assistant (chat messages, uploaded documents)

3. HOW WE USE INFORMATION
- To provide and improve the Service (resume tailoring, job matching,
  roadmap generation, mock interviews)
- To send you service emails (reminders, digests) — you can opt out of
  non-essential emails in Settings
- To process payments (via Stripe; we do not store card details ourselves)
- To monitor and improve reliability and security

4. HOW WE SHARE INFORMATION
- With service providers strictly to operate the app: our AI provider
  (Anthropic, for generating AI features), our database/hosting provider,
  our email provider (Resend), and our payment processor (Stripe)
- We do not sell personal information to third parties
- We may disclose information if required by law

5. DATA RETENTION
We retain your data while your account is active. You may delete your
account at any time from Settings, which removes your profile, resumes,
applications, and chat history within 30 days.

6. YOUR RIGHTS
Depending on your location, you may have the right to access, correct,
export, or delete your personal data. You can do most of this directly from
the Data & Privacy section of Settings, or by emailing
careerosultimate@gmail.com.

7. SECURITY
We use industry-standard measures (encryption in transit, access controls)
to protect your data, but no system is 100% secure.

8. CHILDREN'S PRIVACY
CareerOS Ultimate is not directed at children under 16.

9. CHANGES TO THIS POLICY
We may update this policy from time to time; material changes will be
notified in-app or by email.

10. CONTACT
Questions about this policy: careerosultimate@gmail.com`,

  termsOfService: `TERMS OF SERVICE
CareerOS Ultimate — operated by Maccy Creations
Last updated: ${new Date().toISOString().split('T')[0]}

By using CareerOS Ultimate, you agree to these terms.

1. THE SERVICE
CareerOS Ultimate provides AI-assisted career tools (resume building, job
search, roadmap planning, interview practice). AI-generated content (resumes,
roadmaps, feedback) is a suggestion, not a guarantee of employment outcomes.

2. YOUR ACCOUNT
You're responsible for keeping your login credentials secure and for the
accuracy of the information you provide.

3. ACCEPTABLE USE
Don't use the Service to upload unlawful content, attempt to reverse-engineer
the platform, or abuse the AI features (e.g., excessive automated requests).

4. SUBSCRIPTIONS & BILLING
Paid plans are billed via Stripe on a recurring basis until cancelled.
Refunds are handled per your refund policy.

5. THIRD-PARTY DATA
Job listings are sourced from third-party providers and public job boards;
we don't guarantee their accuracy or availability.

6. LIMITATION OF LIABILITY
The Service is provided "as is." Maccy Creations is not liable for career
or employment outcomes resulting from use of the Service.

7. TERMINATION
We may suspend accounts that violate these terms.

8. CONTACT
careerosultimate@gmail.com`,

  aboutCopy: `CareerOS Ultimate\nVersion 1.0.0\n\nAn all-in-one AI career productivity suite — resume building, job search,\nskill development, and interview prep in one place.\n\nBuilt by Saket Yadav\nMaccy Creations\n\nContact: careerosultimate@gmail.com`,
} as const

export const SETTINGS_SECTIONS = {
  account: {
    label: 'Account',
    items: ['Profile', 'Login & Sessions', 'Security & 2FA'],
  },
  preferences: {
    label: 'Preferences',
    items: ['Notifications', 'Theme', 'Language'],
  },
  billing: {
    label: 'Billing',
    items: ['Current Plan', 'Usage', 'Payment Method'],
  },
  dataPrivacy: {
    label: 'Data & Privacy',
    items: ['How We Use Data', 'Privacy Policy', 'Terms of Service', 'Export Data', 'Delete Account'],
  },
  supportFeedback: {
    label: 'Support & Feedback',
    items: ['Reviews', 'Contact Us', 'Help & FAQ'],
  },
  about: {
    label: 'About',
    items: ['App Info', 'Credits', 'Contact'],
  },
} as const
