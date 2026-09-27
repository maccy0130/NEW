import axios from 'axios'

export interface NormalizedJobListing {
  sourceId: string
  title: string
  company: string
  location?: string
  description?: string
  url: string
  postedAt?: Date
  source: string
}

export const TIER_A_SOURCES = ['Adzuna', 'USAJobs', 'Arbeitnow', 'RemoteOK', 'Remotive', 'Himalayas', 'WeWorkRemotely'] as const
export const ATS_TYPES = ['greenhouse', 'lever', 'smartrecruiters', 'workday'] as const
export type ATSType = typeof ATS_TYPES[number]

export function deduplicateJobs(jobs: NormalizedJobListing[]) {
  const seen = new Set<string>()
  return jobs.filter((job) => {
    const key = `${job.title.trim().toLowerCase()}::${job.company.trim().toLowerCase()}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
