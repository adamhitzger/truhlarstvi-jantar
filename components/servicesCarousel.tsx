"use client"

import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useEffect,useCallback, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Service } from "@/types"
import gsap from "gsap"
import Link from "next/link"

export default function ServiceCarousel({services}: {services: Service[]}){
    console.log(services)
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState<number>(0);
    const plugin = useRef(Autoplay({
        delay: 5000, 
    }))
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!api) return

    const update = () => {
      // fade out starý text
      gsap.to(textRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          setCurrent(api.selectedScrollSnap())

          // fade in nový text
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4 }
          )
        },
      })
    }

    update() // při mountu

    api.on("select", update)
    api.on("reInit", update)

    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])
      const scrollPrev = useCallback(() => {
        api?.scrollPrev()
      }, [api])
    
      const scrollNext = useCallback(() => {
        api?.scrollNext()
      }, [api])
    return(
        <Carousel  opts={{
    loop: true,
  }} plugins={[plugin.current]} setApi={setApi} className="w-full py-2 flex lg:flex-row-reverse gap-4 flex-col-reverse">
            <CarouselContent className="lg:w-1/2 w-full">
                {services.length >0 && services.map((p: Service, i: number) => (
                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-full flex flex-col justify-center">
                        <Image src={p.photo} alt="Truhlářství Jantar" width={350} height={800}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
             <div  className="flex flex-col lg:w-1/2 w-full items-start justify-center space-y-5 px-4 lg:p-8">
             {services[current] && (
               <div ref={textRef} className="w-full flex flex-col items-start justify-center space-y-5">
                     <h2 className="text-5xl md:text-7xl tracking-wide font-light">{services[current].name}</h2>
                <p>
                    {services[current].description}    
                </p>
            
                </div>
             )}
                 <div className="flex justify-center space-x-2 flex-row items-center">
            <Link className="underline underline-offset-4 decoration-foreground text-lg" href={"/"+services[current].slug}>
                                        Zjistit více 
                                    </Link>
                                    <ArrowRight width={24} height={24} strokeWidth={1.3}/>
                        </div>
               
                <div className=" flex flex-row w-fit gap-4">
                   <div onClick={() => scrollPrev()} className="hover:scale-1.1 transition-all duration-300 bg-foreground size-12 rounded-full flex justify-center items-center flex-row"><ArrowLeft strokeWidth={1.5} className="text-white"/></div>
                <div onClick={() => scrollNext()} className="hover:scale-1.1 transition-all duration-300 bg-foreground size-12 rounded-full flex justify-center items-center flex-row"><ArrowRight strokeWidth={1.5} className="text-white"/></div>
                </div>
            </div>
        </Carousel>
    )
}