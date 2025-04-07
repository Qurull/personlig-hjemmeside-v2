import { HeroBanner, HeroTitle } from "@/components/HeroBanner"
import { GradeTableContainer, GradeTableHeader, GradeTableBody, GradeTableData, type IGrade } from "@/components/GradeTable"

import grades from "@/libs/data/grades.json"

export default function Courses() {
    return (
        <>
            <HeroBanner source="cover_03.jpg">
                <HeroTitle text="A complete list of the courses i have taken at dtu"/>
            </HeroBanner>
            <GradeTableContainer>
                <GradeTableHeader titles={["Course Name", "ECTS", "Semester"]}/>
                <GradeTableBody>
                    {grades.map((grade: IGrade, index) => <GradeTableData key={index} {...grade}/>)}
                </GradeTableBody>
            </GradeTableContainer>
        </>
    )
}