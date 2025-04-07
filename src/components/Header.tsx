import Navbar from "./Navbar"

export default function Header() {
    return (
        <header className="absolute flex justify-between items-center top-0 w-full p-14 z-10">
            <h1 className="text-white text-3xl font-bold uppercase">Magnus E. Bennett</h1>
            <Navbar />
        </header>
    )
}