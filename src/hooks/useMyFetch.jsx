import { useState, useEffect } from "react"
import { db } from "../firebase.config"
import { collection, getDocs } from "firebase/firestore"

export default function useMyFiredata(record) {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(false)
    const dataCollection = collection(db, record)

    useEffect(() => {
        const getData = async () => {
            try {
                const datas = await getDocs(dataCollection)
                setData(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsError(false)
            } catch (error) {
                console.error("Error fetching data:", error)
                setIsError(true)
                setIsPending(false)
            }
        }
        getData()
    }, [])

    return { data, isError, isPending }
}