import { useState, useEffect } from "react";

const useMyFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPanding, setIsPanding] = useState(true)
    const [isErr, setErr] = useState(false)

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
            .then(respont => {
                if(!respont.ok) throw Error("Tipe Error: Feching Gagal!")
                return respont.json()
            })
            .then(data => {
                setData(data)
                setIsPanding(false)
                setErr(null)
            })
            .catch(err => {
                setErr(err.message)
                setIsPanding(false)
            })
        }, 1000)
    }, [url] )
    
    return { data, isPanding, isErr };
}

export default useMyFetch;