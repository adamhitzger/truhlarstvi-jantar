"use client"
import { navLinks } from "@/constants"
import { NavLinks } from "@/types"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <>
        <footer className="text-white grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[#434141] gap-4 px-4 pb-4">
            <div className="w-full flex flex-col items-center">
                <Link href={"/"} passHref className="bg-foreground h-fit pb-2 rounded-bl-2xl rounded-br-2xl">
                    <Image
                        src={"/logo-black.png"}
                        alt="Logo Truhlářství Jantar"
                        width={300}
                        height={300}
                    />
                    
                </Link>
                <p className="text-center text-base py-4"> 
                     Zaměřujeme se na výrobu nábytku na zakázku. Vyrábíme kuchyně na zakázku i běžný kuchyňský nábytek, vestavěné skříně i zakázkovou výrobu nábytku pro domácnosti i firmy.
                    </p>
            </div>
            <div className="w-full flex flex-col space-y-4 items-center justify-center">
               <h3 className="text-2xl font-medium">Menu</h3>
                {navLinks.map((n: NavLinks, i: number) => (
                    <Link className="text-nowrap font-light" key={i} href={n.link}>
                        {n.name}
                    </Link>
                ))}
            </div>
            <div className="w-full flex flex-col space-y-4 items-center justify-center">
               <h3 className="text-2xl font-medium">Služby</h3>
                    <Link className="text-nowrap font-light" href={"/kuchynske-linky-na-miru"}>
                        Kuchyňské linky na míru
                    </Link>

                    <Link className="text-nowrap font-light" href={"/kancelare-a-pracovny"}>
                        Kanceláře a interiéry obchodů
                    </Link>
                    <Link className="text-nowrap font-light" href={"/bytovy-nabytek"}>
                        Bytový nábytek
                    </Link>
                    <Link className="text-nowrap font-light" href={"/kancelare-a-pracovny"}>
                        Věstavené skríně na míru
                    </Link>
            </div>

            <div className="w-full flex flex-col space-y-4 items-center justify-center">
               <h3 className="text-2xl font-medium">Provozovna</h3>
                    <span className="text-nowrap font-light" >
                        Mírovka 45, Havlíčkův Brod 580 01
                    </span>

                    <Link className="text-nowrap font-light" href={"tel:+420602544103"}>
                        +420 602 544 103
                    </Link>
                    <Link className="text-nowrap font-light" href={"mailto:josef.mysicka@centrum.cz"}>
                        josef.mysicka@centrum.cz
                    </Link>
            </div>
            <div className="w-full flex flex-col space-y-4 items-center justify-center">
               <h3 className="text-2xl font-medium">Fakturační údaje</h3>
                    <span className="text-nowrap font-light" >
                        Bělohradská 1424, Havlíčkův Brod 580 01
                    </span>

                    <span className="text-nowrap font-light" >
                        IČO: 46482890
                    </span>
                    <span className="text-nowrap font-light" >
                        IČO: CZ7012032973
                    </span>
                    <Link className="text-nowrap font-light" href={"tel:+420602544103"}>
                        +420 602 544 103
                    </Link>
                    <Link className="text-nowrap font-light" href={"mailto:josef.mysicka@centrum.cz"}>
                        josef.mysicka@centrum.cz
                    </Link>
            </div>
            <div className="w-full flex flex-row sm:col-span-2 md:col-span-4">
 <Link href={"adamhitzger.com"} className="bg-[#434141] text-white text-center font-medium w-full text-xl p-2">
                Developed by Adam Hitzger
            </Link>
            </div>
        </footer>
       
            </>
    )
}