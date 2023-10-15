import { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { collection, query, getDocs } from "firebase/firestore";

function useMyFetch(record, additionalQuery = null) {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [isErr, setIsErr] = useState(false);
    const dataCollection = collection(db, record);

    useEffect(() => {
        const getData = async () => {
            try {
                let dataQuery = dataCollection;

                // Jika ada query tambahan, gabungkan dengan query awal
                if (additionalQuery) {
                    dataQuery = query(dataQuery, ...additionalQuery);
                }

                const datas = await getDocs(dataQuery);
                setData(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsErr(false);
                setIsPending(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsErr(true);
                setIsPending(false);
            }
        };

        getData();
    }, [additionalQuery]);

    return { data, isErr, isPending };
}

export default useMyFetch;
