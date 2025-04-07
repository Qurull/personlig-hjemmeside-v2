"use client"
import type { ReactNode } from "react"

export interface IGrade {
    name: string;
    grade: number | string;
    ects: number;
    semester: string;
    id: string;
}

interface BaseProps {
    className?: string;
    children?: ReactNode;
}

interface GradeTableHeaderProps {
    titles: string[];
}

export function GradeTableContainer({ children }: Readonly<BaseProps>) {
    return (
        <table className="flex flex-col text-right w-full p-24 uppercase">
            {children}
        </table>
    )
}

export function GradeTableHeader({ titles }: Readonly<GradeTableHeaderProps>) {
    return (
        <thead>
            <tr className="grid grid-cols-3 p-2">
                {titles.map((title, index) => (
                    <th key={index} className="first:text-left text-xl font-bold uppercase">{title}</th>
                ))}
            </tr>
        </thead>
    )
}

export function GradeTableBody({ children }: Readonly<BaseProps>) {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

export function GradeTableData({ name, ects, semester, id }: Readonly<IGrade>) {
    const handleClick = () => {
        open(`https://kurser.dtu.dk/course/${id}`, "_blank")
    }

    return (
        <tr className="relative grid grid-cols-3 bg-white p-3 rounded-sm hover:shadow-lg z-10 cursor-pointer" onClick={handleClick}>
            <td className="text-left">{name}</td>
            <td>{ects}</td>
            <td>{semester}</td>
        </tr>
    )
}
