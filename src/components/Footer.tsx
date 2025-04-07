import Image from "next/image"
import Link from "next/link"

import { social_links } from "@/libs/data/base.json"

interface SocialLink {
    path: string;
    icon: string;
    alt: string;
}

export default function Footer() {
    return (
        <footer className="border-t p-4">
            <ul className="flex justify-center gap-x-16 sm:gap-x-8">
                {social_links.map((socialLink: SocialLink, index) => <SocialLink key={index} {...socialLink}/>)}
            </ul>
        </footer>
    )
}

function SocialLink({ path, icon, alt }: Readonly<SocialLink>) {
    return (
        <li>
            <Link href={path} target="_blank">
                <Image className="rounded-full shadow-xl" src={`/images/icons/${icon}`} width={50} height={50} alt={alt}/>
            </Link>
        </li>
    )
}
