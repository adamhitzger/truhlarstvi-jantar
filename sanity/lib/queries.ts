import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == 'homepage'][0]{
    "header": header[].asset->url,
    "about": about[].asset->url,
    workers[]{
        name,
        description,
    }
}`

export const SERVICES = groq`*[_type == 'service']{
    name,
    description,
    "slug": slug.current,
    "photo": photo.asset->url,
}`

export const SERVICE = groq`*[_type == 'service' && slug.current == $slug][0]{
    name,
    description,
    "slug": slug.current,
    "photo": photo.asset->url,
    "images": images[].asset->url, 
}`