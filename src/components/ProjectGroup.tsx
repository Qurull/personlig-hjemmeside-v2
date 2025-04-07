import type { ReactNode } from "react"
import Image from "next/image"

interface BaseProps {
    children?: ReactNode;
}

interface ProjectGroupProps extends BaseProps {
    title: string;
}

interface ProjectGroupItemProps {
    image: string;
    name: string;
    date: string;
    description: string;
}

export function ProjectGroupContainer({ title, children }: Readonly<ProjectGroupProps>) {
    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
        </section>
    )
}

export function ProjectGroupItem({ image, name, date, description }: Readonly<ProjectGroupItemProps>) {
    return (
        <li>
            <section>
                <Image src={`/images/${image}`} width={300} height={300} alt=""/>
                <h3>{name}</h3>
            </section>
            <section>
                <h2>{name}</h2>
                <p>{date}</p>
                <p>{description}</p>
            </section>
        </li>
    )
}
