import type { ReactNode } from "react"

interface BaseProps {
    className?: string;
    children?: ReactNode;
}

interface TimelineContainerProps extends BaseProps {
    title: string;
}

interface TimelineItemProps extends BaseProps {
    title: string;
    description: string;
}

export function TimelineContainer({ className, title, children }: Readonly<TimelineContainerProps>) {
    return (
        <section className={className}>
            <h3>{title}</h3>
            <ul>
                {children}
            </ul>
        </section>
    )
}

export function TimelineItem({ title, description }: Readonly<TimelineItemProps>) {
    return (
        <li>
            <h4>{title}</h4>
            <p>{description}</p>
        </li>
    )
}
