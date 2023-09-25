import { footer_logo } from "../assets"
import { navlinks } from "../constans"

export default function Footer() {
    return (
        <div className="absolute bg-primary flex flex-col justify-center items-center w-full py-8 sm:p-16">
            <a href="#" className="mt-20 mb-10">
                <img src={footer_logo} alt="DoPa Logo" />
            </a>
            <ul className="flex">{
                navlinks.map((nav, index) => (
                    <li key={nav.id} >
                        <p>
                            <a href={nav.link} className="mx-2 sm:mx-5 sl:mx-10">{nav.title}</a>
                            {index === navlinks.length - 1 ? " " : " | "}
                        </p>
                    </li>
                ))
            }</ul>
            <div className="bg-white w-full h-8 sm:h-10 sl:h-20 absolute top-0 left-0 rounded-b-[58px]"></div>
        </div>
    );
}
