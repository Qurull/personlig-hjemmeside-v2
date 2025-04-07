import Navbar from "./Navbar"

export default function Header() {
    return (
        <header className="absolute flex justify-between items-center top-0 w-full px-6 sm:px-24 py-6 sm:py-16 z-10">
            <h1 className="text-white text-xl sm:text-3xl font-bold uppercase">Magnus E. Bennett</h1>
            <Navbar />
        </header>
    )
}