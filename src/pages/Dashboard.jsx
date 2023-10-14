import { useState } from "react";
import { sign } from "../assets";
import { SignIn, SignUp } from "../components";
import { style } from "../style";

export default function Dashboard() {
    const [isRegistered, setIsRegistered] = useState(true);

    return (
        // <div className="h-screen flex justify-center items-center">
        //     <h1 className="text-6xl font-anltpB">Dashboard In Proggress</h1>
        // </div>
        <div className="flex flex-col sm:flex-row items-start w-full py-10 sm:py-16">
            {isRegistered ? (
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
