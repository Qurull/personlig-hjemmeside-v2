"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { nav_links } from "@/libs/data/base.json"

interface NavLink {
    path: string;
    name: string;
    target?: React.HTMLAttributeAnchorTarget;
}

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <nav>
            <div className={`sm:relative flex sm:hidden flex-col justify-between w-8 h-6 z-10 top-6 right-6 ${isVisible ? "fixed [&_#line]:last:hidden [&_#line]:first:rotate-45 [&_#line]:first:translate-y-[11px] [&_#line]:nth-[2]:-rotate-45 [&_#line]:nth-[2]:-translate-y-[11px]" : ""}`} onClick={() => setIsVisible(prevState => !prevState)}>
                {[...Array(3)].map((_, index) => <div key={index} id="line" className="bg-white w-full h-[2px] transition-transform"/>)}
            </div>
            <menu className={`sm:relative sm:visible sm:flex gap-x-12 sm:inset-auto transition-colors ${isVisible ? "fixed visible flex flex-col items-end gap-y-6 bg-opacity-50 backdrop-blur-xl inset-0 p-6 pt-20" : "absolute invisible inset-0"}`}>
                {nav_links.map((navLink: NavLink, index) => <NavLink key={index} {...navLink}/>)}
            </menu>
        </nav>
    )
}

function NavLink({ path, name, target }: Readonly<NavLink>) {
    const currentPath = usePathname()

    return (
        <li>
            <Link className={`text-white text-xl font-semibold uppercase ${currentPath === path ? "underline" : "no-underline"}`} href={path} target={target}>
                {name}
            </Link>
        </li>
    )
}
