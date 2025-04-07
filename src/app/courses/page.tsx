import { HeroBanner, HeroTitle } from "@/components/HeroBanner"
import { GradeTableContainer, GradeTableHeader, GradeTableBody, GradeTableData, type IGrade } from "@/components/GradeTable"

import grades from "@/libs/data/grades.json"

export default function Courses() {
    return (
        <>
            <HeroBanner source="DTUBygning101.jpg" width={1000} height={400}>
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