import Image from "next/image"
import { HeroBanner, HeroTitle } from "@/components/HeroBanner"
import { TimelineContainer, TimelineItem } from "@/components/Timeline"

import educations from "@/libs/data/educations.json"

export default function Home() {
    return <>
        <HeroBanner source="cover_01.jpg">
            <HeroTitle text="Welcome to my portfolio. I do data-science, machine learning, programming and game development"/>
        </HeroBanner>
        <article className="flex flex-col lg:grid grid-cols-[450px_1px_1fr] grid-rows-2 items-center gap-6 lg:gap-12 bg-pattern-200 text-2xl lg:text-3xl text-center lg:text-start uppercase p-8 lg:p-18">
            <h3 className="text-pattern-100 font-bold">About Me</h3>
            <p className="col-start-1 row-start-2">DTU student with a passion for programming</p>
            <div className="bg-black w-full lg:w-[1px] h-[1px] lg:h-full row-span-2"/>
            <p className="text-2xl row-span-2">I'm a 24 year old DTU student on the 2nd semester of my masters in Human-Centered Artificial Intelligence at DTU. I expect to graduate in August 2026.</p>
        </article>
        <section className="flex flex-col md:flex-row">
            <Image className="object-cover md:w-[35%]" src="/images/portrait.jpg" width={800} height={800} alt="picture of me"/>
            <TimelineContainer title="My timeline">
                {educations.map((education, index) => <TimelineItem key={index} {...education}/>)}
            </TimelineContainer>
        </section>
    </>
}
