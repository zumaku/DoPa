import useMyFetch from "../hooks/useMyFetch";
import { faq } from "../assets";
import { style } from "../style";
import { Accordion, ErrRes, Preload } from "../components";
import { useState } from "react";

import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase.config"

const FAQ = () => {
    const { data, isErr, isPending } = useMyFetch("faqs");

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
    );
};

const FaqList = (props) => {
    const [newQuestion, setNewQuestion] = useState("")
    const {isSending, setIsSending} = useState(false)

    const dataCollection = collection(db, "question")
    const createNewQuestion = async () => {
        () => setIsSending(true)
        try{
            await addDoc(dataCollection, { question: newQuestion, answered: false})
        } catch (error){
            console.log(error)
        }
        () => setIsSending(false)
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
            <div className="mt-20">
                <label htmlFor="faq-form" className="font-anltpB text-base">
                    Mau nanya? Tuliskan pertanyaanmu dibawah.
                </label>
                <textarea
                    id="faq-form"
                    className="w-full bg-gray-200 resize-y my-5 h-36 p-5 rounded-lg outline-none"
                    onChange={(e) => setNewQuestion(e.target.value)}
                ></textarea>
                {isSending ? (
                    <button 
                        className={`${style.btnsend} flex justify-center items-center`}
                    >
                        <svg height="25" className="animate-spin" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#70E0C5"/>
                            <path d="M38.2181 11.7476C36.5859 8.1444 33.9219 5.10612 30.563 3.01696C27.204 0.927801 23.301 -0.118403 19.3475 0.0106462C15.394 0.139695 11.5675 1.4382 8.35199 3.74196C5.13645 6.04572 2.67627 9.25126 1.28255 12.9532L20 20L38.2181 11.7476Z" fill="white"/>
                            <circle cx="20" cy="20" r="15" fill="#00C493"/>
                        </svg>
                        <p className="ml-2">Mengirim</p>
                    </button>
                ) : (
                    <button 
                        className={style.btn}
                        onClick={createNewQuestion}
                    >Kirim</button>
                )}
            </div>
        </>
    );
};

export default FAQ;
