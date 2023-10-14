import { useState, useEffect } from "react";
import { sign } from "../assets";
import { SignIn, SignUp } from "../components";
import { style } from "../style";
import { auth } from "../firebase.config"
import { SignOutBtn } from "../components";

export default function Dashboard() {
    const [isRegistered, setIsRegistered] = useState(true);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    // =============================================================
    // ==== Masiih Perlu Diperbaiki strukturnya ini Authentiksi ====
    // =============================================================

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (isLoading) {
        // Menampilkan indikator loading sementara Firebase memeriksa status otentikasi
        return <p>Loading...</p>;
    }

    if (user) {
        // Jika pengguna telah login, Anda dapat menampilkan konten dashboard atau yang sesuai.
        return (
            <div>
                <p>Telah Login</p>
                <SignOutBtn />
                {/* Tambahkan komponen dashboard atau yang sesuai di sini */}
            </div>
        );
    }

    return (
        <div className="flex flex-col sm:flex-row items-start w-full py-10 sm:py-16">
            {isRegistered && !isLoading && user == null ? (
                <div>
                    <SignIn />
                    <p className="mt-5">
                        Belum Punya Akun? Silahkan
                        <span
                            className="font-anltpB hover:cursor-pointer"
                            onClick={() => setIsRegistered(false)}
                        > Register</span>
                    </p>
                </div>
            ) : (
                <div>
                    <SignUp />
                    <p className="mt-5">
                        Sudah Punya Akun? Silahkan 
                        <span
                            className="font-anltpB hover:cursor-pointer"
                            onClick={() => setIsRegistered(true)}
                        > Login</span>
                    </p>
                </div>
            )}
            <img
                src={sign}
                alt="DoPa Illustration"
                className={style.imgPadding}
            />
        </div>
    );
}
