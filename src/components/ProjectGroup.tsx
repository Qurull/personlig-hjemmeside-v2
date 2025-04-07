"use client"
import Image from "next/image"
import Link from "next/link"
import { Modal } from "./Modal"

export interface IProjectItem {
    image: string;
    name: string;
    date: string;
    description: string;
    links: IProjectItemLink[];
}

interface IProjectItemLink {
    icon: string;
    path: string;
}

interface ProjectGroupProps {
    children?: React.ReactNode;
    title: string;
}

interface ProjectGroupItemProps extends IProjectItem {
    onOpen: React.Dispatch<boolean>;
    onSelect: React.Dispatch<IProjectItem>;
}

interface ProjectGroupModalProps {
    isOpen: boolean;
    onClose: React.Dispatch<boolean>;
    selected: IProjectItem | null;
}

export function ProjectGroupContainer({ title, children }: Readonly<ProjectGroupProps>) {
    return (
        <section>
            <h2 className="text-3xl font-mono font-bold uppercase border-y p-4">{title}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3">
                {children}
            </ul>
        </section>
    )
}

export function ProjectGroupItem({ image, name, date, description, links, onOpen, onSelect }: Readonly<ProjectGroupItemProps>) {
    const handleClick = () => {
        onSelect({ image, name, date, description, links })
        onOpen(true)
    }
    
    return (
        <li className="overflow-hidden aspect-square" onClick={handleClick}>
            <section className="relative size-full uppercase hover:-translate-y-[196px] duration-400 transition-transform cursor-pointer">
                <section className="relative size-full">
                    <Image className="object-cover size-full" src={`/images/thumbnails/${image}`} width={512} height={512} alt="..." unoptimized/>
                    <h3 className="absolute bg-black text-white text-sm sm:text-2xl text-center font-bold truncate sm:overflow-visible sm:whitespace-normal sm:text-clip h-fit inset-0 m-auto p-2">{name}</h3>
                </section>
                <section className="flex flex-col gap-y-6 text-center px-6 py-6">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{date}</p>
                    <p>{description.slice(0, 100)}...</p>
                </section>
            </section>
        </li>
    )
}

export function ProjectGroupModal({ isOpen, onClose, selected }: Readonly<ProjectGroupModalProps>) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <section className={`relative transition-all duration-300 delay-150 ${isOpen ? "h-[300px]" : "h-[600px]"}`}>
                <Image className="object-cover size-full" src={`/images/thumbnails/${selected?.image}`} width={1000} height={300} alt="..." unoptimized/>
                <h2 className="absolute bg-black text-white text-xl sm:text-4xl text-center font-bold uppercase size-fit inset-0 px-4 py-2 m-auto">{selected?.name}</h2>
            </section>
            <section className="flex flex-col gap-y-6 p-6 sm:p-12">
                <ul className="flex gap-x-4">
                    {selected?.links.map((link, index) => <ProjectGroupLink key={index} {...link}/>)}
                </ul>
                <p>{selected?.date}</p>
                <p dangerouslySetInnerHTML={{ __html: selected?.description ?? "" }}></p>
            </section>
        </Modal>
    )
}

function ProjectGroupLink({ icon, path }: Readonly<IProjectItemLink>) {
    return (
        <li>
            <Link href={path} target="_blank">
                <Image className="rounded-full shadow-lg" src={`/images/icons/${icon}`} width={50} height={50} alt="..."/>
            </Link>
        </li>
    )
}
