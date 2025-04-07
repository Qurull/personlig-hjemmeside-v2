import Image from "next/image"

import { HeroBanner, HeroTitle } from "@/components/HeroBanner"
import { TimelineContainer, TimelineItem } from "@/components/Timeline"

import educations from "@/libs/data/educations.json"

export default function Home() {
    return <>
        <HeroBanner source="Background_Image_HOME_edited.jpg" width={1000} height={400}>
            <HeroTitle text="Welcome to my portfolio. I do data-science, machine learning, programming and game development"/>
        </HeroBanner>
        <article>
            <h3>About Me</h3>
            <p>DTU student with a passion for programming</p>
            <p>I'm a 24 year old DTU student on the 2nd semester of my masters in Human-Centered Artificial Intelligence at DTU. I expect to graduate in August 2026.</p>
        </article>
        <section>
            <Image src="/images/Self_Portrait.jpg" width={300} height={300} alt="picture of me"/>
            <TimelineContainer title="Timeline">
                {educations.map((education, index) => <TimelineItem key={index} {...education}/>)}
            </TimelineContainer>
        </section>
    </>
}
