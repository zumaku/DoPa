import { Link } from "react-router-dom"
import { style } from "../style"
import { hero, money, users } from "../assets"
import { whydopa, testimonials } from "../constans"
import { Decor } from "../components"

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
                    <Link to="/dashboard" className={`btn mt-12 ${style.btn}`}>Coba Dopa</Link>
                </div>
                <img src={hero} alt="DoPa Illustration" className="sm:w-1/2 w-11/12 self-center" />
            </div>

            {/* Why Section */}
            <div className="flex flex-col sm:flex-row-reverse sm:justify-between w-full py-10 sm:py-16">
                <div className="sm:ml-16 mb-12 sm:mb-0">
                    <h1 className={`${style.secTitl}`}>
                        Kenapa Harus
                        <span className={style.grad}> Dopa</span>
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
                <img src={money} alt="DoPa Illustration p-10" className="sm:w-1/2 w-11/12 self-center" />
            </div>

            {/* Users Section */}
            <div className="flex flex-col justify-center items-center w-full py-10 sm:py-16">
                <h1 className={`${style.secTitl} max-w-md text-center`}>
                    Mereka yang Telah Menggunakan
                    <span className={style.grad}> DoPa</span>.
                </h1>
                <p className="max-w-lg text-center mb-10">DoPa telah membantu lebih dari 500+ orang dalam mengelolah keuangan hariannya.</p>
                <img src={users} alt="DoPa Image" />
            </div>

            {/* Testimonials Section */}
            <div className="relative testi-grad">
                <div className="grid ss:grid-cols-2 sm:grid-cols-3 sl:grid-cols-4 gap-4 grid-template-areas py-10 sm:py-16">
                    <div className="ss:col-span-2">
                        <h1 className={style.secTitl}>
                            Apa yang Mereka Katakan Tentang
                            <span className={style.grad}> DoPa</span>
                            ?
                        </h1>
                        <p>
                            Aplikasi ini telah
                            <span className="font-bold"> digunakan </span>
                            lebih dari 
                            <span className="font-bold"> 1.000+ </span>
                            pengguna dalam 3 bulan setelah dirilis, dan berikut beberapa testimoni dari mereka.
                        </p>
                    </div>
                    <div className="row-span-2 p-8 rounded-3xl shadow-xl h-fit bg-white">
                        <Decor id={1} />
                        <p className="my-7">“{testimonials[0].testimoni}”</p>
                        <div className="flex">
                            <img src={testimonials[0].img} className="w-12 h-12 mr-4" alt="DoPa Images" />
                            <div className="flex flex-col">
                                <p className="font-anltpB">{testimonials[0].nama}</p>
                                <p className="text-gray-500">{testimonials[0].job}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2">
                        <Decor id={2} />
                        <div className="mt-10 p-8 rounded-3xl shadow-xl h-fit bg-white">
                            <Decor id={1} />
                            <p className="my-7">“{testimonials[1].testimoni}”</p>
                            <div className="flex">
                                <img src={testimonials[1].img} className="w-12 h-12 mr-4" alt="DoPa Images" />
                                <div className="flex flex-col">
                                    <p className="font-anltpB">{testimonials[1].nama}</p>
                                    <p className="text-gray-500">{testimonials[1].job}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 flex flex-col items-end">
                        <Decor id={3} />
                        <div className="mt-16 p-8 rounded-3xl shadow-xl h-fit bg-white">
                            <Decor id={1} />
                            <p className="my-7">“{testimonials[2].testimoni}”</p>
                            <div className="flex">
                                <img src={testimonials[2].img} className="w-12 h-12 mr-4" alt="DoPa Images" />
                                <div className="flex flex-col">
                                    <p className="font-anltpB">{testimonials[2].nama}</p>
                                    <p className="text-gray-500">{testimonials[2].job}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 flex flex-col items-end">
                        <div className="mb-10 p-8 rounded-3xl shadow-xl h-fit bg-white">
                            <Decor id={1} />
                            <p className="my-7">“{testimonials[3].testimoni}”</p>
                            <div className="flex">
                                <img src={testimonials[3].img} className="w-12 h-12 mr-4" alt="DoPa Images" />
                                <div className="flex flex-col">
                                    <p className="font-anltpB">{testimonials[3].nama}</p>
                                    <p className="text-gray-500">{testimonials[3].job}</p>
                                </div>
                            </div>
                        </div>
                        <Decor id={4} />
                    </div>
                    <div className="p-8 rounded-3xl shadow-xl h-fit bg-white">
                        <Decor id={1} />
                        <p className="my-7">“{testimonials[4].testimoni}”</p>
                        <div className="flex">
                            <img src={testimonials[4].img} className="w-12 h-12 mr-4" alt="DoPa Images" />
                            <div className="flex flex-col">
                                <p className="font-anltpB">{testimonials[4].nama}</p>
                                <p className="text-gray-500">{testimonials[4].job}</p>
                            </div>
                        </div>
                    </div>
                    <div className="sl:mt-10 p-8 rounded-3xl shadow-xl h-fit bg-white">
                        <Decor id={1} />
                        <p className="my-7">“{testimonials[5].testimoni}”</p>
                        <div className="flex">
                            <img src={testimonials[5].img} className="w-12 h-12 mr-4" alt="DoPa Images" />
                            <div className="flex flex-col">
                                <p className="font-anltpB">{testimonials[5].nama}</p>
                                <p className="text-gray-500">{testimonials[5].job}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center items-center w-full py-10 sm:py-16">
                <h1 className={`${style.secTitl} text-center`}>
                    Mulai
                    <span className={style.grad}> Pencatatan </span>
                    Sekarang!
                </h1>
                <p className="text-center max-w-4xl">Coba Sekarang juga DoPa untuk mengambil kendali penuh atas keuangan Anda. Dengan DoPa, Anda dapat dengan mudah mencatat transaksi, mengelola pengeluaran, dan melihat tren keuangan Anda.</p>
                <Link to="/dashboard" className={`btn mt-12 ${style.btn}`}>Coba Dopa</Link>
            </div>
        </>
    )
}