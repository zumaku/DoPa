import useMyFetch from "../hooks/useMyFetch"
import { faq } from "../assets"
import { style } from "../style"
import { Accordion, ErrRes, Preload } from "../components"


const FAQ = () => {
    const { data, isErr, isPending } = useMyFetch('faqs')
    // console.log(data, isErr, isPending)

    return (
        <div className="flex flex-col sm:flex-row items-start w-full py-10 sm:py-16">
            <div className="w-full p-0 sm:pr-5">
                {isErr && <ErrRes err={isErr} />}
                {isPending && <Preload />}
                {data && <FaqList data={data} />}
            </div>
            <img src={faq} className="sm:w-1/2 w-11/12 p-10" alt="DoPa Illustration" />
        </div>
    )
}

const FaqList = (props) => {
    return (
        <>
            <h1 className={style.secTitl}>
                Kamu
                <span className={style.grad}> Nanya</span>
                ? FAQ
            </h1>
            {
                props.data.map((faq) => (
                    <div key={faq.id}>
                        <Accordion q={faq.question} a={faq.answer} />
                        <div className="bg-gray-200 h-[3px] w-full my-6"></div>
                    </div>
                ))
            }
            <form action="" className="mt-20">
                <label htmlFor="faq-form" className="font-anltpB text-base">Mau nanya? Tuliskan pertanyaanmu dibawah.</label>
                <textarea name="" id="faq-form" className="w-full bg-gray-200 resize-y my-5 h-36 p-5 rounded-lg outline-none"></textarea>
                <button type="submit" className={style.btn}>Kirim</button>
            </form>
        </>
    )
}

export default FAQ