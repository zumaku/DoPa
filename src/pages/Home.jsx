import { style } from "../style"
import { hero, money } from "../assets"
import { whydopa } from "../constans"

export default function Homer() {
    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between w-full py-10 sm:py-16">
                <div className="max-w-[474px] mb-12 sm:mb-0">
                    <h1 className="font-anltpB text-4xl sl:text-5xl">
                        Kelola
                        <span className={style.grad}> Keuangan </span>
                        Harianmu Dengan Mudah
                    </h1>
                    <p className="text-lg sl:text-xl mt-5">Suka bingung uangmu habis kepake untuk apa aja? Coba kelola menggunakan DoPa.</p>
                    <a href="" className={`btn mt-12 ${style.btn}`}>Coba DoPa</a>
                </div>
                <img src={hero} alt="DoPa Illustration" className="sm:w-1/2 w-11/12 self-center" />
            </div>

            {/* Why Section */}
            <div className="flex flex-col sm:flex-row-reverse sm:justify-between w-full py-10 sm:py-16">
                <div className="sm:ml-16 mb-12 sm:mb-0">
                    <h1 className="font-anltpB text-4xl mb-10">
                        Kenapa Harus
                        <span className={style.grad}> Dopa </span>
                        ?
                    </h1>
                    <ul>{
                        whydopa.map((why) => (
                            <li
                            key={why.id}
                            className="mb-6"
                            >
                                <h3 className="text-2xl font-anltpB mb-3">
                                    {why.tiltB}
                                    <span className="font-anltpI"> {why.tiltI}</span>
                                </h3>
                                <p className="w-4/5">{why.content}</p>
                            </li>
                        )
                        )}</ul>
                </div>
                <img src={money} alt="DoPa Illustration" className="sm:w-1/2 w-11/12 self-center" />
            </div>
        </>
    )
}