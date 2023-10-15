import { useState, useEffect } from "react";
import { auth } from "../firebase.config"
import { SignOutBtn } from "../components";
import { Auth, Preload } from "../components";

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

    return (
        <>
            {user == null && <Auth />}
            {isLoading && <Preload />}
            {user && (
                <div>
                    <p>Telah Login</p>
                    <SignOutBtn />
                    {/* Tambahkan komponen dashboard atau yang sesuai di sini */}
                </div>
            )}
        </>
    );
}
