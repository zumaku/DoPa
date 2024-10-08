import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"

export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className={`${
                    isOpen ? 'open' : ''
                } hover:cursor-pointer font-anltpB flex items-center justify-between`}
                onClick={toggleAccordion}
            >
                <p>{props.q}</p>
                <AiFillCaretDown className={`text-xl ${isOpen ? "rotate-180" : "" }`} />
            </div>
            {isOpen && (
                <div className="accordion-content">
                    {props.a}
                </div>
            )}
        </>
    )
}