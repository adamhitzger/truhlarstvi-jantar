"use client"

import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { navLinks } from "@/constants"
import { NavLinks } from "@/types"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navbar(){
    return(
        <nav className=" flex flex-row absolute top-0 z-10 left-0 w-full ">
           <div className=" w-1/2 flex flex-row">
                <Link href={"/"}  className="bg-foreground h-fit pb-2 rounded-bl-2xl md:mx-20 min-w-[200px] rounded-br-2xl">
                <Image
                src={"/logo-black.png"}
                alt="Logo Truhlářství Jantar"
                width={300}
                height={300}
                />
                </Link>
            </div>  
            <div className="hidden w-1/2 md:flex flex-row justify-end md:justify-center space-x-2 text-lg py-3 text-white font-medium">
        {navLinks.map((n: NavLinks,i:number) => (
            <Link className="text-nowrap" key={i} href={n.link}>
                {n.name + " / "}
            </Link>
        ))}
            </div> 
            <div className="md:hidden w-1/2 flex flex-row justify-end">
            <Sheet>
                <SheetTrigger className="">
                    <div className="md:hidden bg-foreground rounded-full flex justify-center items-center size-14 m-4">
                        <Menu className="text-white size-8"/>
                    </div>
                </SheetTrigger>
                <SheetContent className="min-w-1/2 p-5 text-2xl font-medium flex flex-col">
{navLinks.map((n: NavLinks,i:number) => (
<Link key={i} href={n.link}>
                {n.name}
            </Link>
                    ))}
                </SheetContent>
            </Sheet>
            </div>
        </nav>
    )
}