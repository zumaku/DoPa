import { useState, useEffect } from "react"
import { db } from "../firebase.config"
import { collection, getDocs } from "firebase/firestore"

export default function useMyFetch(record) {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [isErr, setIsErr] = useState(false)
    const dataCollection = collection(db, record)

    useEffect(() => {
        const getData = async () => {
            try {
                const datas = await getDocs(dataCollection)
                setData(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsErr(false)
                setIsPending(false)
            } catch (error) {
                console.error("Error fetching data:", error)
                setIsErr(true)
                setIsPending(false)
            }
        }
        getData()
    }, [])

    return { data, isErr, isPending }
}