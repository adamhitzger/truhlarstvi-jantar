"use client"

import Link from "next/link"
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem 
} from "./ui/carousel"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import  AutoPlay from "embla-carousel-autoplay"
import { useRef, useEffect } from "react"
import gsap from "gsap"

export default function Header({images}: {images: string[]}) {
    const plugin = useRef(
        AutoPlay({ delay: 4000, stopOnInteraction: true })
    )
    const textRef = useRef<HTMLParagraphElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const linkRef = useRef<HTMLDivElement>(null)
     useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power3.out" } })
tl.fromTo(
      textRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0 }
    )
    // nejdřív text
     tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0 },
      "-=0.2"
    )

     tl.fromTo(
      linkRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0 },
      "-=0.4"
    )
    // potom obrázek s overlayem
   
  }, [])
    return(
        <header className="w-full flex flex-col md:flex-row">
            <div className="h-20 md:hidden"/>
            <div className="w-full space-y-3 md:w-1/2 mt-20 lg:mt-0 flex flex-col justify-center items-center p-12">
                <h1 ref={headingRef} className="font-medium text-black text-5xl sm:text-6xl">Zakázkové <span className="underline underline-offset-4 decoration-3 decoration-foreground">truhlářství</span> v Havlíčkově Brodě</h1>
                <p ref={textRef} className="text-gray-600">
                    Zaměřujeme se na výrobu nábytku na zakázku. Vyrábíme kuchyně na zakázku i běžný kuchyňský nábytek, vestavěné skříně i zakázkovou výrobu nábytku pro domácnosti i firmy.
                </p>
                <div ref={linkRef} className="flex flex-row gap-4">
                    <Link href="/#onas">
                        <Button>
                            O nás <ArrowRight/>
                        </Button>
                    </Link>
                    <Link href="tel:+420602544103">
                        <Button variant={"secondary"}>
                            Kontaktujte nás
                        </Button>
                    </Link>
                </div>
            </div>
            <Carousel 
                className="w-full md:w-1/2"
                plugins={[plugin.current]}
                >
                <CarouselContent>
                    {images.length > 0 && images.map((s: string, i: number) => (
                       <CarouselItem
  className="relative w-full min-h-[400px] md:min-h-[450px] lg:min-h-[800px]"
  key={i}
>
  <div
    className="w-full min-h-[400px] md:min-h-[450px] lg:min-h-[800px] bg-no-repeat bg-center bg-cover"
    style={{ backgroundImage: `url(${s})` }}
  />
  <div className="absolute inset-0 bg-black/50" />
</CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </header>
    )
}