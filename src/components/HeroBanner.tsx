import type { ReactNode } from "react"
import Image from "next/image"

import styles from "./HeroBanner.module.css"

interface BaseProps {
    className?: string;
    children?: ReactNode;
}

interface HeroProps extends BaseProps {
    source: string;
    width?: number;
    height?: number;
}

interface HeroTitleProps extends BaseProps {
    text: string;
}

export function HeroBanner({ source, width = 600, height = 400, children }: Readonly<HeroProps>) {
    return (
        <section className="relative grid place-content-center h-[600px]">
            <Image className="absolute object-cover size-full -z-10" src={`/images/${source}`} width={width} height={height} priority alt="cover image"/>
            {children}
        </section>
    )
}

export function HeroTitle({ text }: Readonly<HeroTitleProps>) {
    return (
        <h2 className="text-white text-5xl text-center uppercase w-2/3 m-auto leading-normal">{text}</h2>
    )
}
