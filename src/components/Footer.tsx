import Image from "next/image"
import Link from "next/link"

interface SocialLink {
    path: string;
    imageSource: string;
    alt: string;
}

const SOCIAL_LINKS: SocialLink[] = [
    { 
        path: "https://github.com/magn3144", 
        imageSource: "github.png", 
        alt: "GitHub"
    },
    { 
        path: "https://play.unity.com/en/user/bfaa1667-93e1-492d-9460-e1cc37baaea5", 
        imageSource: "unity.png",
        alt: "Unity"
    },
    { 
        path: "https://www.linkedin.com/in/magn3144", 
        imageSource: "linkedin.png",
        alt: "LinkedIn"
    }
] as const

export default function Footer() {
    return (
        <footer className="border-t p-4">
            <ul className="flex justify-center gap-x-8">
                {SOCIAL_LINKS.map((socialLink, index) => <SocialLink key={index} {...socialLink}/>)}
            </ul>
        </footer>
    )
}

function SocialLink({ path, imageSource, alt }: Readonly<SocialLink>) {
    return (
        <li>
            <Link href={path} target="_blank">
                <Image className="rounded-full shadow-xl" src={`/images/icons/${imageSource}`} width={50} height={50} alt={alt}/>
            </Link>
        </li>
    )
}
