import { style } from "../style"
import { hero } from "../assets"

export default function Homer() {
    return (
        <>
            <div className="flex flex-col sm:flex-row sm:justify-between w-full py-10 sm:py-16">
                <div className="max-w-[474px] mb-12 sm:mb-0">
                    <h1 className="font-anltpB text-4xl sl:text-5xl">
                        Kelola
                        <span className="bg-gradient-to-br from-primary to-accent text-transparent bg-clip-text"> Keuangan </span>
                        Harianmu Dengan Mudah
                    </h1>
                    <p className="text-lg sl:text-xl mt-5">Suka bingung uangmu habis kepake untuk apa aja? Coba kelola menggunakan DoPa.</p>
                    <a href="" className={`btn mt-12 ${style.btn}`}>Coba DoPa</a>
                </div>
                <img src={hero} alt="DoPa Illustration" className="sm:w-1/2 w-11/12 self-center" />
            </div>
        </>
    )
}