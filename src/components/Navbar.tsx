"use client"
import type { HTMLAttributeAnchorTarget } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface NavLink {
    path: string;
    name: string;
    target?: HTMLAttributeAnchorTarget;
}

const NAV_LINKS: NavLink[] = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/courses", name: "Courses" },
    { path: "/files/CV.pdf", name: "Resumé", target: "_blank" }
] as const

export default function Navbar() {
    return (
        <nav>
            <menu className="flex gap-x-12">
                {NAV_LINKS.map((navLink, index) => <NavLink key={index} {...navLink}/>)}
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
