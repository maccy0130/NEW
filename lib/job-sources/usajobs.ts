import axios from 'axios'
import type { NormalizedJobListing } from './index'

export async function fetchUSAJobsListings(query: string, apiKey: string, userEmail: string, limit = 50): Promise<NormalizedJobListing[]> {
  const response = await axios.get('https://data.usajobs.gov/api/search', { params: { Keyword: query, ResultsPerPage: limit }, headers: { 'Authorization-Key': apiKey, 'User-Agent': userEmail } })
  return (response.data.SearchResult?.SearchResultItems ?? []).map((item: any) => { const job = item.MatchedObjectDescriptor; const place = job.PositionLocation?.[0]; return { sourceId: `usajobs_${job.PositionID}`, title: job.PositionTitle, company: job.OrganizationName, location: [place?.CityName, place?.StateCode].filter(Boolean).join(', '), description: job.UserArea?.Details?.JobSummary, url: job.PositionURI, postedAt: job.PublicationStartDate ? new Date(job.PublicationStartDate) : undefined, source: 'usajobs' } })
}
