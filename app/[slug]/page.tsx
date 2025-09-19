import ServiceComp from "@/components/service"
import { sanityFetch } from "@/sanity/lib/client"
import { SERVICE } from "@/sanity/lib/queries"
import { Service } from "@/types"


export default async function SlugPage({ params }: { params: Promise<{ slug: string}> }) {
    const param = await params
    const slug = param.slug
    const service = await sanityFetch<Service>({query: SERVICE, params: {slug}})

    return(
       <ServiceComp service={service}/>
    )
}