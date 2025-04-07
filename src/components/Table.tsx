import type { ReactNode } from "react";

interface BaseProps {
    className?: string;
    children?: ReactNode;
}

interface TableContainerProps extends BaseProps {}

interface TableHeadProps extends BaseProps {

}

interface TableBodyProps extends BaseProps {

}

interface TableHeadingProps extends BaseProps {
    text: string;
}

interface TableDataProps {
    name: string;
    grade: number;
    ects: number;
    semester: string;
    id: number;
}

export function TableContainer({ className, children }: Readonly<TableContainerProps>) {
    return (
        <table className={className}>
            {children}
        </table>
    )
}

export function TableHead({ children }: Readonly<TableHeadProps>) {
    return (
        <thead>
            {children}
        </thead>
    )
}

export function TableBody({ children }: Readonly<TableBodyProps>) {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

export function TableHeading({ text }: Readonly<TableHeadingProps>) {
    return (
        <th>{text}</th>
    )
}

export function TableData({ name, grade, ects, semester, id }: Readonly<TableDataProps>) {
    return (
        <tr>
            <td>{name}</td>
            <td>{grade}</td>
            <td>{ects}</td>
            <td>{semester}</td>
        </tr>
    )
}
