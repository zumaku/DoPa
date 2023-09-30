import { logo } from "../assets"

export default function Preload() {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex justify-center items-center">
            <div className="relative h-64 w-64 flex justify-center items-center">
                <div className="absolute border-t-transparent border-solid animate-spin rounded-full border-primary border-8 h-64 w-64"></div>
                <img src={logo} className="w-1/2" alt="DoPa Logo" />
            </div>
        </div>
    )
}