import React, { useState } from 'react'
import { BsEarbuds } from "react-icons/bs";
function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="relative flex items-center justify-between px-6 md:px-10 py-6 text-white">

            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                <div className='flex gap-2'>
                    <BsEarbuds />
                    HEADPHONE
                </div>

            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-sm font-medium">

                <li className="text-white border-b-2 border-white pb-1 cursor-pointer">
                    HOME
                </li>

                <li className="cursor-pointer transition-all duration-300 hover:text-blue-400 hover:-translate-y-1">
                    CATEGORIES
                </li>

                <li className="cursor-pointer transition-all duration-300 hover:text-blue-400 hover:-translate-y-1">
                    BEST SELLERS
                </li>

                <li className="cursor-pointer transition-all duration-300 hover:text-blue-400 hover:-translate-y-1">
                    FLASH SALE
                </li>

                <li className="cursor-pointer transition-all duration-300 hover:text-blue-400 hover:-translate-y-1">
                    CONTACT
                </li>

            </ul>

            {/* Mobile Menu Button */}
            <div
                className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className={`w-7 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""
                    }`}></div>

                <div className={`w-7 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                    }`}></div>

                <div className={`w-7 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                    }`}></div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-blue-950/95 backdrop-blur-md md:hidden transition-all duration-500 overflow-hidden z-40 ${menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                    }`}
            >
                <ul className="flex flex-col items-center justify-center h-full gap-8 text-lg font-medium">

                    <li className="text-white pb-1 cursor-pointer">
                        HOME
                    </li>

                    <li className="cursor-pointer hover:text-blue-400 transition">
                        CATEGORIES
                    </li>

                    <li className="cursor-pointer hover:text-blue-400 transition">
                        BEST SELLERS
                    </li>

                    <li className="cursor-pointer hover:text-blue-400 transition">
                        FLASH SALE
                    </li>

                    <li className="cursor-pointer hover:text-blue-400 transition">
                        CONTACT
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar