"use client"

import { Service } from "@/types"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services({services}: {services: Service[]}){
    return(
        <section id="sluzby" className="w-full h-full text-center flex flex-col items-center p-4 lg:p-8 space-y-8">
            <h1 className="text-black text-medium text-4xl md:text-6xl">Co Vám můžeme nabídnout ?</h1>
            <div className="w-full grid gap-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
                {services.length>0 && services.map((s: Service, i: number) => (
                    <article key={i} className="flex flex-col items-center space-y-1">
                        <h2 className="text-7xl font-light text-gray-600">{"0"+(i+1)}</h2>
                        <h3 className="text-xl">{s.name}</h3>
                        <p className="max-w-72 text-center text-gray-600">{s.description.slice(0,70)}</p>
                        <div className="flex justify-center space-x-2 flex-row items-center">
            <Link className="underline underline-offset-4 decoration-foreground text-lg" href={"/"+s.slug}>
                                        Zjistit více 
                                    </Link>
                                    <ArrowRight width={24} height={24} strokeWidth={1.3}/>
                        </div>
                        
                    </article>
                ))}
            </div>
        </section>
    )
}