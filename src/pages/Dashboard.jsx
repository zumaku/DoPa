import { useState, useEffect } from "react";
import { useMyFetch } from "../hooks"
import { auth } from "../firebase.config"
import { Auth, Preload, SignOutBtn, ErrRes } from "../components";
import { style } from "../style";
import { where } from "firebase/firestore";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
    // console.log(isErr);

    return (
        <>
            {user == null && <Auth />}
            {isLoading || isPending && <Preload />}
            {user && (
                <div className="flex flex-col items-start w-full py-10 sm:py-16">
                    <div className="flex flex-col sm:flex-row justify-between w-full mb-10">
                        <h1 className={style.secTitl}>
                            Transaksi
                            <span className={style.grad}> Bulan Ini</span>
                        </h1>
                        <div className="flex">
                            <button className={`${style.btn} h-fit mr-4`}>Tambah</button>
                            <button className={`${style.btn} h-fit`}>Menu</button>
                        </div>
                    </div>
                    <table className="w-[730px] sm:w-full">
                        <thead className="bg-primary">
                            <tr>
                                <th className="text-start px-3 py-2 w-40 rounded-l-lg">Tanggal</th>
                                <th className="text-start px-3 py-2 w-48">Transaksi</th>
                                <th className="text-start px-3 py-2 w-28">Pemasukan</th>
                                <th className="text-start px-3 py-2 w-28">Pengeluaran</th>
                                <th className="text-start px-3 py-2">Catatan</th>
                                <th className="text-start px-3 py-2 w-24 rounded-r-lg">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="p-2">
                                        {item.date.toDate().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </td>
                                    <td className="p-2">{item.transaction}</td>
                                    {item.flow && (<>
                                        <td className="p-2">{item.amount}</td>
                                        <td className="p-2"></td>
                                    </>)}
                                    {!item.flow && (<>
                                        <td className="p-2"></td>
                                        <td className="p-2">{item.amount}</td>
                                    </>)}
                                    <td className="p-2">{item.note}</td>
                                    <td className="p-2">Edit Hapus</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}
