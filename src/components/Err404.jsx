import { Link } from "react-router-dom"
import { losterr } from "../assets"
import { style } from "../style"

export default function Err404() {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full py-10 sm:py-16">
            <div className="">
                <h1 className={`${style.grad} text-9xl font-anltpB mb-0`}>404</h1>
                <h1 className={style.secTitl}>Halaman Tidak Ditemukan.</h1>
                <Link to="/" className={style.btn}>Ke Beranda</Link>
            </div>
            <img src={losterr} className="sm:w-1/2 w-11/12" alt="DoPa Illustration" />
        </div>
    )
}