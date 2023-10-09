import { style } from "../style"
import { contact } from "../constans"

export default function Contact() {
    
    return (
        <div className="flex flex-col sm:flex-row items-start w-full py-10 sm:py-16">
            <div className="w-full mb-10">
                <h1 className={style.secTitl}>
                    Hubungi
                    <span className={style.grad}>Kami</span>
                </h1>
                <p className="font-anltp max-w-md mb-14">Ada pesan yang mau di sampaikan? Atau mau bahas sebuah project? Atau mungkin mau diskusi-diskusi? Kontak saja..</p>
                {
                    contact.map((c) => (
                        <div
                            key={c.id}
                            className="flex"
                        >
                            <p className="w-20 font-bold">{c.platform}</p>
                            <a href={c.link}> : {c.content}</a>
                        </div>
                    ))
                }
            </div>
            <form action="">
                <label
                    htmlFor="name"
                    className="font-anltpB"
                >Nama</label>
                <input 
                    type="text"
                    name="email"
                    id="name"
                    className="w-full bg-gray-200 px-5 py-3 rounded-lg mb-5 outline-none"
                    required
                />
                <label
                    htmlFor="email"
                    className="font-anltpB"
                >Email</label>
                <input 
                    type="number"
                    name="email"
                    id="email"
                    className="w-full bg-gray-200 px-5 py-3 rounded-lg mb-5 outline-none"
                    required
                />
                <label
                    htmlFor="message"
                    className="font-anltpB"
                >Pesan</label>
                <textarea
                    name="message"
                    id="message"
                    className="w-full bg-gray-200 resize-y my-5 h-36 p-5 rounded-lg outline-none"
                    required
                ></textarea>
                <button className={style.btn}>Kirim</button>
            </form>
        </div>
    )
}