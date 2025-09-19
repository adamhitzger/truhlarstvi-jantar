"use client"

import { Worker } from "@/types"
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem 
} from "./ui/carousel"
import AutoPlay from "embla-carousel-autoplay"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function Employees({workers}: {workers: Worker[]}){
    const plugin = useRef(
            AutoPlay({ delay: 3000, stopOnInteraction: true })
        )
    
    return(
        <>
        {workers && workers.length > 0 &&
        <section className="w-full flex flex-col space-y-4 p-8">
              <h1 className="font-medium text-black text-5xl sm:text-6xl text-center">Sháníme posilu</h1>
            <Carousel 
                className="w-full rounded-xl"
                plugins={[plugin.current]}

                >
                <CarouselContent className="rounded-xl space-x-4">
                    {workers.map((s: Worker, i: number) => (
                       <CarouselItem
  className="md:basis-1/2 text-center  relative p-5 flex space-y-3 flex-col rounded-xl bg-foreground/20"
  key={i}
>
   
  <h2 className="text-4xl">{s.name}</h2>  
  <p className="text-lg">{s.description}</p>
   <Link className="w-full" href={"mailto:josef.mysicka@centrum.cz?subject=Dotaz%20na%20pozici&body=Dobrý%20den%20pane%20Myšičko,"}>
                        <Button>
                            Ozvěte se nám <ArrowRight/>
                        </Button>
    </Link>
</CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            </section>
        }
       </>
    )
}