import { createClient } from 'next-sanity'
import type { QueryParams } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    studioUrl: process.env.URL_ORIGIN
  }
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  
}: {
  query: string;
  params?: QueryParams;
  
}) {
  return client.fetch<QueryResponse>(query, params, {
    useCdn: true,
    next: { revalidate: 30 },
  });
}