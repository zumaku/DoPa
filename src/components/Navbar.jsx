import { useState } from "react"

import { logo } from "../assets"
import { navlinks } from "../constans";
import { IoClose } from 'react-icons/io5'
import { HiMenuAlt3 } from 'react-icons/hi'

export default function Navbar() {
    const [isActive, setIsactive] = useState(false);

    return (
        <div className="py-4 flex justify-between items-center">
            <a href="#" className="flex">
                <img src={logo} className="mr-5 w-10 sl:w-12" alt="DoPa Logo" />
                <p className="font-anltpB text-3xl sl:text-5xl">DoPa</p>
            </a>

            <ul className="text-2xl hidden sl:flex">{
                navlinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`${
                            index == navlinks.length - 1 ? 'mr-0' : 'mr-12'
                        } hover:font-bold transition-all duration-300`}
                    >
                        <a href={nav.link}>{
                            nav.title
                        }</a>
                    </li>
                ))
            }</ul>

            <HiMenuAlt3 
                className="text-4xl sl:hidden flex" 
                onClick={()=>{
                    setIsactive(() => !isActive);
                }}
            />

            <div
                className={`${
                    isActive ? '' : 'translate-x-full'
                } sl:hidden flex flex-col fixed top-0 bottom-0 right-0 bg-primary px-8 py-5 transition duration-300`
            }>
                <IoClose
                    className="text-4xl self-end"
                    onClick={()=>{
                        setIsactive(() => !isActive);
                    }}
                />
                <ul className="text-2xl flex flex-col mt-10">{
                    navlinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`${
                                index == navlinks.length - 1 ? 'mb-0' : 'mb-10'
                            } hover:font-bold transition-all duration-300`}
                        >
                            <a href={nav.link}>{
                                nav.title
                            }</a>
                        </li>
                    ))
                }</ul>
            </div>
        </div>
    );
}
