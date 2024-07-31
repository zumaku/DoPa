import { useState, useEffect } from "react";
import { useMyFetch } from "../../hooks"
import { auth } from "../../firebase.config"
import { Auth, Preload, SignOutBtn, ErrRes } from "../../components";
import { style } from "../../style";
import { where } from "firebase/firestore";
import Table from "./Table";
import Tambah from "./Tambah";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hiddenScroll, setHiddenScroll] = useState(false)
    const [isAdd, setIsAdd] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // feching data transaksi
    const targetDateStart = new Date("2023-10-01"); // Tanggal awal bulan Oktober
    const targetDateEnd = new Date("2023-10-31"); // Tanggal akhir bulan Oktober
    const additionalQuery = [
        where("date", ">=", targetDateStart),
        where("date", "<=", targetDateEnd)
    ];
    const { data, isErr, isPending } = useMyFetch("transaction", additionalQuery)

    return (
        <>
            {user == null && <Auth />}
            {isLoading || isPending && <Preload />}
            {user && (
                <div className={`flex flex-col items-start w-full py-10 sm:py-16 ${
                    isAdd ? "overflow-hidden" : "overflow-auto"
                }`}>
                    <div className="flex flex-col sm:flex-row justify-between w-full mb-10">
                        <h1 className={style.secTitl}>
                            Transaksi
                            <span className={style.grad}> Bulan Ini</span>
                        </h1>
                        <div className="flex">
                            <button className={`${style.btn} h-fit mr-4`} onClick={() => setIsAdd(true)}>Tambah</button>
                            <button className={`${style.btn} h-fit`}>Menu</button>
                        </div>
                    </div>
                    <Table data={data} />
                    {isAdd && <Tambah setIsAdd={setIsAdd} />}
                </div>
            )}
        </>
    );
}
