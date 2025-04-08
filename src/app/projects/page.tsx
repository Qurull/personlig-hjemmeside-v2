"use client"
import { useState } from "react"
import { HeroBanner, HeroTitle } from "@/components/HeroBanner"
import { ProjectGroupContainer, ProjectGroupItem, ProjectGroupModal, type IProjectItem } from "@/components/ProjectGroup"

import projects from "@/libs/data/projects.json"

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<IProjectItem | null>(null)

    return (
        <>
            <HeroBanner source="cover_02.png">
                <HeroTitle text="I have made machine learning, game development and various other programming projects"/>
            </HeroBanner>
            <section className="px-8 sm:px-64 py-6 sm:py-24 text-center sm:text-left uppercase">
                <h3 className="text-3xl font-bold">Welcome to the project catalogue</h3>
                <p className="text-2xl">Here you can get an insight into the relevant programming projects i have made in the last five years.</p>
            </section>
            {Object.entries(projects).map((category, categoryId) => (
                <ProjectGroupContainer key={categoryId} title={category[0]}>
                    {category[1].map((project, projectId) => <ProjectGroupItem key={projectId} item={project} onOpen={setIsOpen} onSelect={setSelected}/>)}
                </ProjectGroupContainer>
            ))}
            <ProjectGroupModal isOpen={isOpen} onClose={setIsOpen} selected={selected}/>
        </>
    )
}
