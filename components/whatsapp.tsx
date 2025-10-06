"use client"
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function WhatsAppButton(){
    const link = useRef<HTMLAnchorElement>(null)
    useEffect(() => {
         if (!link.current) return;

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 3
        });
        tl.fromTo(link.current, {
    y: -100,  
   opacity: 0
  }, {
    y: 0,     
    opacity: 1,
     duration: 1,       // délka animace
    ease: "bounce.out", // typ „odrazové“ animace
  })
  .to(link.current, {
    x: -180,
    y:5,
    rotation: -90,
    duration: 1.3,
    ease: "power1.inOut"
  }, "+=5")
  .to(link.current, {
    y: 100,        // můžeš dát i větší, podle toho jak má „zahučet“
    opacity: 0,
    duration: 0.8,
    ease: "power1.in"
  }, "-=0.5");
    },[])
    return(
         <Link ref={link} href={"tel:+420602544103"} id="whatsapp"
        className="fixed bottom-6 right-6 z-40 size-18 rounded-full bg-foreground text-primary items-center justify-center flex flex-row shadow-lg"
      >
        <PhoneCall strokeWidth={1.5} className="size-10 text-white"/>
      </Link>
    )
}