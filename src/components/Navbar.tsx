"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { BurgerMenu } from "./BurgerMenu"
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
            <BurgerMenu isVisible={isVisible} handleClick={setIsVisible}/>
            <menu className={`lg:relative lg:visible lg:flex gap-x-12 lg:inset-auto transition-colors ${isVisible ? "fixed visible flex flex-col items-end gap-y-6 bg-opacity-50 backdrop-blur-xl inset-0 p-6 pt-20" : "absolute invisible inset-0"}`}>
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
