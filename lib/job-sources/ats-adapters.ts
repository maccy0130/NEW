import axios from 'axios'
import type { NormalizedJobListing, ATSType } from './index'

export async function fetchGreenhouseBoard(boardToken: string): Promise<NormalizedJobListing[]> {
  const response = await axios.get(`https://boards-api.greenhouse.io/v1/boards/${encodeURIComponent(boardToken)}/jobs?content=true`)
  return (response.data.jobs ?? []).map((job: any) => ({ sourceId: `greenhouse_${job.id}`, title: job.title, company: job.company?.name ?? 'Unknown', location: job.location?.name, description: job.content, url: job.absolute_url, postedAt: job.updated_at ? new Date(job.updated_at) : undefined, source: 'greenhouse' }))
}

export async function fetchLeverBoard(boardToken: string): Promise<NormalizedJobListing[]> {
  const response = await axios.get(`https://api.lever.co/v0/postings/${encodeURIComponent(boardToken)}?mode=json`)
  return (response.data ?? []).map((job: any) => ({ sourceId: `lever_${job.id}`, title: job.text, company: job.categories?.team ?? 'Unknown', location: job.categories?.location, description: job.descriptionPlain, url: job.hostedUrl, postedAt: job.createdAt ? new Date(job.createdAt) : undefined, source: 'lever' }))
}

export async function fetchATSBoard(type: ATSType, token: string): Promise<NormalizedJobListing[]> {
  if (type === 'greenhouse') return fetchGreenhouseBoard(token)
  if (type === 'lever') return fetchLeverBoard(token)
  console.warn(`ATS adapter not implemented yet: ${type}`)
  return []
}
