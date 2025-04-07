import { HeroBanner, HeroTitle } from "@/components/HeroBanner"
import { ProjectGroupContainer, ProjectGroupItem } from "@/components/ProjectGroup"

import projects from "@/libs/data/projects.json"

export default function Projects() {
    return (
        <>
            <HeroBanner source="HiveMindWithSkybox.png" width={1000} height={400}>
                <HeroTitle text="I have made machine learning, game development and various other programming projects"/>
            </HeroBanner>
            <section>
                <h3>Welcome to the project catalogue</h3>
                <p>Here you can get an insight into the relevant programming projects i have made in the last five years.</p>
            </section>
            {Object.entries(projects).map((category, categoryId) => (
                <ProjectGroupContainer key={categoryId} title={category[0]}>
                    {category[1].map((project, projectId) => <ProjectGroupItem key={projectId} {...project}/>)}
                </ProjectGroupContainer>
            ))}
        </>
    )
}
