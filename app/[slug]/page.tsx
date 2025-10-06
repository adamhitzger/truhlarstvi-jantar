import ServiceComp from "@/components/service"
import { sanityFetch } from "@/sanity/lib/live"
import { SERVICE } from "@/sanity/lib/queries"


export default async function SlugPage({ params }: { params: Promise<{ slug: string}> }) {
    const param = await params
    const slug = param.slug
    const {data: service} = await sanityFetch({query: SERVICE, params: {slug}})

    return(
       <ServiceComp service={service}/>
    )
}