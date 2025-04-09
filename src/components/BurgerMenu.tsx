"use client"
import type { Dispatch, SetStateAction } from "react";

interface BurgerMenuProps {
    isVisible: boolean;
    handleClick: Dispatch<SetStateAction<boolean>>;
}

export function BurgerMenu({ isVisible, handleClick }: Readonly<BurgerMenuProps>) {
    return (
        <div className={`lg:relative flex lg:hidden flex-col justify-between w-8 h-6 z-10 top-6 right-6 ${isVisible ? "fixed [&_#line]:last:hidden [&_#line]:first:rotate-45 [&_#line]:first:translate-y-[11px] [&_#line]:nth-[2]:-rotate-45 [&_#line]:nth-[2]:-translate-y-[11px]" : ""}`} onClick={() => handleClick(prevState => !prevState)}>
            {Array(3).fill(null).map((_, index) => (
                <div key={index} id="line" className="bg-white w-full h-[2px] transition-transform"/>
            ))}
        </div>
    )
}
