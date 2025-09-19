"use client"

import Link from "next/link"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

export default function CompanyInfo(){
    const containerRef = useRef<HTMLDivElement>(null)
     const imageRef = useRef<HTMLIFrameElement>(null)
     useEffect(() => {
    if (!containerRef.current) return
    if (!imageRef.current) return

    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2, // zpoždění mezi prvky
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // spustí, když top elementu dosáhne 80% viewportu
          toggleActions: "play none none none", // jen jednou
        },
      }
    );

    gsap.fromTo(
        imageRef.current,
        {opacity:0,x:50, y:50},
        {
        opacity:1,
        x:0,
        y:0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
        },
        }
    );
  }, [])
    return(
        <section className="w-full flex flex-col md:flex-row gap-4 p-4 lg:p-8">
            <div ref={containerRef} className="w-full md:w-1/2 flex flex-col space-y-4">
               <h2 className="font-light text-5xl sm:text-6xl">Kontakt</h2>
                <p className="text-gray-600 sm:max-w-2/3">
                    Díky našim zkušenostem Vám pomůžeme k vysněnému interiéru. Zakázkové truhlářství Praha zabývající se výrobou vestavěných skříní a nábytku na zakázku. Vestavěný nábytek Vám vyrobíme kvalitně, rychle a za přijatelnou cenu. Zajistíme zaměření, návrh vestavěné skříně, dopravu i montáž.
                </p>
                <div className="flex flex-col w-full space-y-5">
                <h3 className="text-gray-600 text-xl">E-mail</h3>
                <Link className="text-lg" href={"mailto:josef.mysicka@centrum.cz"}>josef.mysicka@centrum.cz</Link>
                <hr className=" w-full sm:w-2/3 bg-black "/>
                </div>
                <div className="flex flex-col w-full space-y-5">
                <h3 className="text-gray-600 text-xl">Telefon</h3>
                <Link className="text-lg" href={"tel:+420602544103"}>+420 602 544 103</Link>
                <hr className=" w-full sm:w-2/3 bg-black "/>
                </div>
                <div className="flex flex-col w-full space-y-5">
                <h3 className="text-gray-600 text-xl">Adresa</h3>
                <span className="text-lg">Mírovka 45, Havlíčkův Brod 580 01</span>
                <hr className=" w-full sm:w-2/3 bg-black "/>
                </div>
                <div className="flex flex-col w-full space-y-5">
                <h3 className="text-gray-600 text-xl">IČO</h3>
                <span className="text-lg">46482890</span>
                <hr className=" w-full sm:w-2/3 bg-black "/>
                </div>
            </div>
            <iframe ref={imageRef} className="w-full md:w-1/2 min-h-96 md:min-h-[400px] m-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.623026913539!2d15.61139177662624!3d49.58599947144011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d00c03b49c263%3A0x9ed8056d556a6da7!2zVFJVSEzDgcWYU1RWw40gSm9zZWYgTXnFoWnEjWth!5e0!3m2!1scs!2scz!4v1757006146143!5m2!1scs!2scz" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}