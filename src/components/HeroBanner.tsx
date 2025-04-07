import Image from "next/image"

interface HeroProps {
    children?: React.ReactNode;
    source: string;
    width?: number;
    height?: number;
}

interface HeroTitleProps {
    text: string;
}

export function HeroBanner({ source, width = 600, height = 400, children }: Readonly<HeroProps>) {
    return (
        <section className="relative grid place-content-center h-[300px] sm:h-[600px]">
            <Image className="absolute object-cover size-full -z-10" src={`/images/covers/${source}`} width={width} height={height} alt="cover image" unoptimized/>
            {children}
        </section>
    )
}

export function HeroTitle({ text }: Readonly<HeroTitleProps>) {
    return (
        <h2 className="text-white text-xl sm:text-5xl text-center uppercase w-4/5 m-auto leading-normal">
            {text}
        </h2>
    )
}
