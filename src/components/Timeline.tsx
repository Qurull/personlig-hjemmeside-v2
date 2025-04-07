interface TimelineContainerProps {
    children?: React.ReactNode;
    title: string;
}

interface TimelineItemProps {
    title: string;
    description: string;
}

export function TimelineContainer({ title, children }: Readonly<TimelineContainerProps>) {
    return (
        <section className="flex flex-col gap-y-6 sm:gap-y-12 uppercase p-6 sm:p-14">
            <h3 className="text-3xl text-center font-bold">{title}</h3>
            <ul>
                {children}
            </ul>
        </section>
    )
}

export function TimelineItem({ title, description }: Readonly<TimelineItemProps>) {
    return (
        <li className="group grid grid-cols-[32px_1fr] gap-x-4">
            <div className="grid grid-rows-[32px_1fr] justify-items-center">
                <div className="border-2 size-full rounded-full"/>
                <div className="group-last:hidden bg-black w-[2px] h-full"/>
            </div>
            <section className="pb-8">
                <h4 className="font-semibold">{title}</h4>
                <p>{description}</p>
            </section>
        </li>
    )
}
