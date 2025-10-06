"use client"

import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
export default function About({about}: {about: string[]}){
    console.log(about)
    const [api, setApi] = useState<CarouselApi>()
    const plugin = useRef(Autoplay({
        delay: 5000, 
    }))
    
      const scrollPrev = useCallback(() => {
        api?.scrollPrev()
      }, [api])
    
      const scrollNext = useCallback(() => {
        api?.scrollNext()
      }, [api])
    return(
        <Carousel  opts={{
    loop: true,
  }} plugins={[plugin.current]} id="onas" setApi={setApi} className="w-full flex lg:flex-row gap-4 flex-col-reverse">
            <CarouselContent className="lg:w-1/2 w-full">
                {about.length >0 && about.map((p: string, i: number) => (
                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-full flex flex-col justify-center">
                        <Image src={p} alt="Truhlářství Jantar" width={350} height={800}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
             <div className="flex flex-col lg:w-1/2 w-full text-right items-end justify-center space-y-5 px-4 lg:p-8">
                <h2 className="text-5xl md:text-7xl tracking-wide font-light">Kdo jsme ?</h2>
                <p>
                    Truhlářství Jantar Havlíčkův Brod nabízí zakázkovou výrobu nábytku. Výroba truhlářství zahrnuje převážnou část vybavení interiérů rodinných domů, kanceláří a barů.
Nabízíme výrobu kuchyní, dětských pokojů, ložnic a další zakázkový nábytek pro vybavení domu, dále vyrábíme zařízení kanceláří, barů, heren. Kuchyně jsme schopni navrhnout, vyrobit a namontovat. Vše podle přání zákazníka od jednoduchých sestav až po složité zakázky.
                </p>
                <div className=" flex flex-row w-fit gap-4">
                   <div onClick={() => scrollPrev()} className="hover:scale-1.1 transition-all duration-300 bg-foreground size-12 rounded-full flex justify-center items-center flex-row"><ArrowLeft strokeWidth={1.5} className="text-white"/></div>
                <div onClick={() => scrollNext()} className="hover:scale-1.1 transition-all duration-300 bg-foreground size-12 rounded-full flex justify-center items-center flex-row"><ArrowRight strokeWidth={1.5} className="text-white"/></div>
                </div>
            </div>
        </Carousel>
    )
}