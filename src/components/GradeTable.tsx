"use client";
export interface IGrade {
    name: string;
    grade: number | string;
    ects: number;
    semester: string;
    id: string;
}

interface BaseProps {
    className?: string;
    children?: React.ReactNode;
}

interface GradeTableHeaderProps {
    titles: string[];
}

interface GradeTableHeadProps {
    title: string;
}

export function GradeTableContainer({ children }: Readonly<BaseProps>) {
    return (
        <table className="relative flex flex-col text-right w-full p-4 lg:p-24 uppercase">
            {children}
        </table>
    )
}

export function GradeTableHeader({ titles }: Readonly<GradeTableHeaderProps>) {
    return (
        <thead>
            <tr className="grid grid-cols-3 p-3 gap-x-4">
                {titles.map((title, index) => <GradeTableHead key={index} title={title}/>)}
            </tr>
        </thead>
    )
}

export function GradeTableHead({ title }: Readonly<GradeTableHeadProps>) {
    return (
        <th className="first:text-left text-sm sm:text-2xl font-bold uppercase">{title}</th>
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
        <tr className="relative grid grid-cols-3 gap-x-4 bg-white text-sm sm:text-lg p-3 hover:shadow-lg hover:z-10 transition-shadow cursor-pointer" onClick={handleClick}>
            <td className="text-left">{name}</td>
            <td>{ects}</td>
            <td>{semester}</td>
        </tr>
    )
}
