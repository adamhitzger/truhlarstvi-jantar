"use client"

import { Service } from "@/types"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import gsap from "gsap"
import { useRef, useEffect } from "react"
export default function ServiceComp({service}: {service: Service}){
    const textRef = useRef<HTMLParagraphElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
    const linkRef = useRef<HTMLAnchorElement>(null)
    console.log(service)
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
      imgRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1 },
       // spustí se o půl sekundy dřív (lehce překryté)
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
        <main className="flex flex-col w-full space-y-5">
                    <header className="w-full flex flex-col md:flex-row">
            <div className="w-full mt-20 lg:mt-0 space-y-3 md:w-1/2 flex flex-col justify-center items-center p-12">
                <h1 ref={headingRef} className="font-medium text-black text-5xl sm:text-6xl ">{service.name}</h1>
                <p ref={textRef} className="text-gray-600">
                    {service.description} 
                    </p>
                
                    <Link ref={linkRef} href="/">
                        <Button>
                            Kontaktujte nás
                        </Button>
                    </Link>
            </div>
           <div
  className="relative w-full md:w-1/2"

>
  <div
    ref={imgRef}
    className="w-full min-h-[400px] md:min-h-[450px] lg:min-h-[800px] bg-no-repeat bg-center bg-cover"
    style={{ backgroundImage: `url(${service.photo})` }}
  />
  <div className="absolute inset-0 bg-black/50 " />
</div>
        </header>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-4 gap-5">
            {!service.images && <></>} 
        {service.images !== null && service.images.length > 0 && service.images.map((s: string, i: number) => (
            <Image src={s} key={i} alt={service.name + "Truhlářství Jantar"} width={300} height={500}/>
        ))}
        </section>
        </main>
    )
}