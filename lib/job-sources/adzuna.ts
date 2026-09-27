import axios from 'axios'
import type { NormalizedJobListing } from './index'

export async function fetchAdzunaJobs(query: string, appId: string, appKey: string, country = 'us', limit = 50): Promise<NormalizedJobListing[]> {
  const response = await axios.get(`https://api.adzuna.com/v1/api/jobs/${country}/search/1`, { params: { app_id: appId, app_key: appKey, results_per_page: limit, what: query, sort_by: 'date' } })
  return (response.data.results ?? []).map((job: any) => ({ sourceId: `adzuna_${job.id}`, title: job.title, company: job.company?.display_name ?? 'Unknown', location: job.location?.display_name, description: job.description, url: job.redirect_url, postedAt: job.created ? new Date(job.created) : undefined, source: 'adzuna' }))
}
