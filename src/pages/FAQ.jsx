import { useMyFetch, useMyCreate } from "../hooks"
import { useState } from "react"
import { faq } from "../assets"
import { style } from "../style"
import { Accordion, ErrRes, Preload } from "../components"
import { AiOutlineClose } from "react-icons/ai"

const FAQ = () => {
    const { data, isErr, isPending } = useMyFetch("faqs")

    return (
        <div className="flex flex-col sm:flex-row items-start w-full py-10 sm:py-16">
            <div className="w-full p-0 sm:pr-5">
                {isErr && <ErrRes err={isErr} />}
                {isPending && <Preload />}
                {data && <FaqList data={data} />}
            </div>
            <img
                src={faq}
                className="sm:w-1/2 w-11/12 p-10"
                alt="DoPa Illustration"
            />
        </div>
    )
}

const FaqList = (props) => {
    const [newQuestion, setNewQuestion] = useState({ question: "", answered: false})
    const { isCreating, error, createData } = useMyCreate("question")
    const [isSendSuccess, setIsSendSuccess] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewQuestion({ ...newQuestion, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createData(newQuestion)    // fungsi createData ini berasal dari useMyCreate
        setNewQuestion({ question: "", answered: false})
        setIsSendSuccess(true)
    }

    return (
        <>
            <h1 className={style.secTitl}>
                Kamu
                <span className={style.grad}> Nanya</span>? FAQ
            </h1>
            {props.data.map((faq) => (
                <div key={faq.id}>
                    <Accordion q={faq.question} a={faq.answer} />
                    <div className="bg-gray-200 h-[3px] w-full my-6"></div>
                </div>
            ))}
            <form onSubmit={handleSubmit} className="mt-20">
                <label htmlFor="faq-form" className="font-anltpB text-base">
                    Mau nanya? Tuliskan pertanyaanmu dibawah.
                </label>
                {isSendSuccess && !error && (
                    <div className="bg-secondary p-2 rounded-md flex justify-between items-center">
                        <p><span className="font-anltpB">Yoss..</span> Pengiriman Berhasil</p>
                        <AiOutlineClose className="hover:cursor-pointer" onClick={() => setIsSendSuccess(false)} />
                    </div>
                )}
                {error && (
                    <div className="bg-secondary p-2 rounded-md flex justify-between items-center">
                        <p><span className="font-anltpB">Upss..</span> {error.message}</p>
                        <AiOutlineClose className="hover:cursor-pointer" onClick={() => setIsSendSuccess(false)} />
                    </div>
                )}
                <textarea
                    id="faq-form"
                    name="question"
                    className="w-full bg-gray-200 resize-y my-5 h-36 p-5 rounded-lg outline-none"
                    value={newQuestion.question}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" className={style.btn} disabled={isCreating}>
                    {isCreating ? "Mengirim..." : "Kirim"}
                </button>
            </form>
        </>
    )
}

export default FAQ
