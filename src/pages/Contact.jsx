import { useState } from "react"
import { useMyCreate } from "../hooks"
import { style } from "../style"
import { contact } from "../constans"
import { AiOutlineClose } from "react-icons/ai"

export default function Contact() {
    const [newMessage, setNewMessage] = useState({name: "", email: "", message: ""})
    const { isCreating, error, createData } = useMyCreate("contact")
    const [isSendSuccess, setIsSendSuccess] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewMessage({ ...newMessage, [name]: value })
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await createData(newMessage)
        
        // Jika berhasil mengirim pesan
        setNewMessage({name: "", email: "", message: ""})
        setIsSendSuccess(true)
    }

    return (
        <div className="flex flex-col sm:flex-row items-start w-full py-10 sm:py-16">
            <div className="w-full mb-10">
                <h1 className={style.secTitl}>
                    Hubungi
                    <span className={style.grad}> Kami</span>
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
            <form onSubmit={handleSubmit}>
                {isSendSuccess && !error && (
                    <div className="bg-secondary p-2 mb-5 rounded-md flex justify-between items-center">
                        <p><span className="font-anltpB">Yoss..</span> Pengiriman Berhasil</p>
                        <AiOutlineClose className="hover:cursor-pointer" onClick={() => setIsSendSuccess(false)} />
                    </div>
                )}
                <label
                    htmlFor="name"
                    className="font-anltpB"
                >Nama</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    className="w-full bg-gray-200 px-5 py-3 rounded-lg mb-5 outline-none"
                    value={newMessage.name}
                    onChange={handleChange}
                    required
                />
                <label
                    htmlFor="email"
                    className="font-anltpB"
                >Email</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    className="w-full bg-gray-200 px-5 py-3 rounded-lg mb-5 outline-none"
                    value={newMessage.email}
                    onChange={handleChange}
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
                    value={newMessage.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" className={style.btn} disabled={isCreating}>
                    {isCreating ? "Mengirim..." : "Kirim"}
                </button>
            </form>
        </div>
    )
}