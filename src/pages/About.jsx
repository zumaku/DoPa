import Decor from "../components/Decorations"
import { style } from "../style"
import { about, mine } from "../assets"

export default function About() {
    return (
        <>
            <div className="flex flex-col sm:flex-row sm:justify-between w-full py-10 sm:py-16">
                <div className="max-w-[474px] mb-12 sm:mb-0">
                    <h1 className={`${style.secTitl}`}>
                        Tentang
                        <span className={style.grad}> Dopa</span>
                    </h1>
                    <p className="mt-4">Mengelolah keuangan kadang menjadi hal yang menyebalkan untuk dilakukan, apalagi ketika kita tak mengetahui tentang ilmu ekonomi sama sekali. Kondisi dimana ketika kita kaget melihat dompet yang seketika isinya tinggal sedikit tanpa kita tau kita belanjakan ke mana uang tersebut.</p>
                    <p className="mt-4">Dopa mencoba untuk menyelesaikan masalah tersebut dengan menyediakan layanan bagi anda untuk memantau alur kas anda. Anda dapat melacak setiap pemasukan dan pengeluaran tiap harinya.</p>
                    <p className="mt-4">Dengan hanya mencatat setiap transaksi yang anda lakukan, anda dapat memantau serta membuat pelaporan hanya dengan aplikasi ini, alih-alih memuat transaksi anda di atas kertas.</p>
                </div>
                <img src={about} alt="DoPa Illustration" className="sm:w-1/2 w-11/12 self-center" />
            </div>
            <div className="flex flex-col sm:flex-row py-10 sm:py-16">
                <div className="w-full sm:w-1/2 flex justify-center">
                    <div className="relative h-[359px] w-[298px] group">
                        <img src={mine} className="absolute max-w-[298px] w-full h-fit scale-95 group-hover:scale-100 transition-all duration-200 z-10" alt="DoPa Owner" />
                        <div className="absolute -top-3 left-3 group-hover:-top-5 group-hover:left-5 rounded-[40px] w-full h-full bg-secondary translate-x-1 transition-all duration-200"></div>
                        <div className="absolute -bottom-4 right-4 group-hover:-bottom-5 group-hover:right-5 rounded-[40px] w-full h-full bg-primary  translate-x-1 transition-all duration-200"></div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 pt-16 sm:pt-0 flex flex-col">
                    <div className="hidden sm:block">
                        <Decor id={5} />
                    </div>
                    <h1 className={`${style.secTitl}`}>
                        Ini
                        <span className={style.grad}> Aku</span>
                        , Salam Kenal.
                    </h1>
                    <p className="max-w-lg">Nama, Zul Fadli. Junior Web Developer dan mahasiswa di UIN Alauddin Makassar. Aku mengalami masalah yang sama, susah mengatur keuanganku dan tidak tau uangku kuhabiskan kemana. Sehingga itu aku buat website ini. Selain menjadi aplikasi yang kugunakan pribadi, berharap aplikasi ini juga dapat bermanfaat bagi orang lain untuk mengatur keuangannya juga.</p>
                </div>
            </div>
        </>
    )
}