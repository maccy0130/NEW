export const SKILL_CATEGORIES = {
  'Professional & Communication Skills': ['English communication', 'Professional email writing', 'Presentation skills', 'Teamwork and collaboration', 'Cross-cultural communication', 'Remote-work collaboration', 'Public speaking', 'Conflict resolution'],
  'Cognitive & Personal Effectiveness': ['Problem-solving', 'Logical reasoning', 'Critical thinking', 'Time management', 'Adaptability', 'Leadership', 'Emotional intelligence', 'Prioritization and multi-tasking'],
  'Business & Delivery': ['Business and commercial awareness', 'Customer focus', 'Agile and Scrum', 'Project management', 'Documentation', 'IT service management', 'Risk and compliance', 'Change management / ITIL basics', 'Vendor and stakeholder management'],
  'Office & Data Tools': ['Microsoft Excel', 'PowerPoint', 'Power BI or Tableau', 'Customer relationship management (CRM)', 'SAP or enterprise software'],
  'Core Programming & Web Development': ['SQL', 'Python', 'Java', 'JavaScript/TypeScript', 'HTML and CSS', 'Git and GitHub', 'REST APIs', 'Data structures and algorithms', 'System design', 'Database management', 'Software testing', 'Debugging'],
  'Cloud & Infrastructure': ['Linux', 'Cloud computing', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Network fundamentals'],
  'Identity, Access & Security (IAM)': ['Cybersecurity fundamentals', 'Identity and Access Management (IAM)', 'Active Directory', 'OAuth 2.0', 'OpenID Connect', 'SAML', 'Single Sign-On (SSO)', 'Privileged Access Management (PAM)', 'Zero Trust fundamentals', 'API security basics'],
  'Data & AI': ['Data analytics', 'Artificial intelligence fundamentals', 'Machine learning fundamentals'],
  'Career Readiness': ['Interview skills', 'Resume writing', 'LinkedIn profile development', 'Portfolio and GitHub projects', 'Professional certifications', 'Ethical and responsible technology use'],
} as const

export const ROLE_SKILL_MATRIX: Record<string, string[]> = {
  'Cloud Engineer / Cloud Solutions Architect': ['Cloud computing', 'AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'Network fundamentals', 'System design'],
  'DevOps Engineer / Site Reliability Engineer': ['Linux', 'CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Cloud computing', 'Debugging', 'System design'],
  'Identity & Access Management (IAM) / Identity Security Engineer': ['Identity and Access Management (IAM)', 'Active Directory', 'OAuth 2.0', 'OpenID Connect', 'SAML', 'Single Sign-On (SSO)', 'Privileged Access Management (PAM)', 'Cybersecurity fundamentals', 'Zero Trust fundamentals'],
  'Cybersecurity Analyst': ['Cybersecurity fundamentals', 'Network fundamentals', 'Risk and compliance', 'Identity and Access Management (IAM)', 'API security basics'],
  'Full-Stack Developer': ['JavaScript/TypeScript', 'HTML and CSS', 'REST APIs', 'Git and GitHub', 'SQL', 'Data structures and algorithms'],
  'Backend / Software Engineer': ['Python', 'Java', 'System design', 'Database management', 'Software testing', 'Debugging', 'Data structures and algorithms'],
  'Data Analyst': ['SQL', 'Microsoft Excel', 'Power BI or Tableau', 'Data analytics'],
  'Data Scientist / ML Engineer': ['Python', 'Machine learning fundamentals', 'Artificial intelligence fundamentals', 'Data analytics', 'SQL'],
  'Product Manager': ['Agile and Scrum', 'Business and commercial awareness', 'Leadership', 'Vendor and stakeholder management', 'Documentation'],
  'IT Business Analyst': ['Documentation', 'SQL', 'Business and commercial awareness', 'IT service management'],
  'Scrum Master / Agile Coach': ['Agile and Scrum', 'Leadership', 'Teamwork and collaboration', 'Conflict resolution'],
  'IT Service Management Specialist': ['IT service management', 'Risk and compliance', 'Documentation', 'Change management / ITIL basics'],
  'CRM / SAP / Enterprise Software Consultant': ['Customer relationship management (CRM)', 'SAP or enterprise software', 'Business and commercial awareness'],
  'Technical Project Manager': ['Project management', 'Agile and Scrum', 'Documentation', 'Leadership', 'Vendor and stakeholder management'],
  'Customer Success / Technical Support Engineer': ['Customer focus', 'English communication', 'Problem-solving', 'Debugging'],
} as const
