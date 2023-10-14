import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { style } from "../style";
import SignOutBtn from "./SignOutBtn";

export default function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (curUser) => {
        setUser(curUser);
    });

    const validateEmail = (email) => {
        // Ekspresi reguler untuk memeriksa format email yang valid
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const register = async () => {
        // Validasi email sebelum mencoba membuat akun
        if (!validateEmail(registerEmail)) {
            setEmailError("Email tidak valid");
            return; // Jangan lanjutkan jika email tidak valid
        }

        try {
            await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );

            // Reset nilai input kembali kosong jika registrasi berhasil
            setRegisterEmail("");
            setRegisterPassword("");
            setEmailError(null); // Hapus pesan error email
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1 className={`${style.secTitl}`}>
                Register
                <span className={style.grad}> User</span>
            </h1>
            <label
                htmlFor="email"
                className="font-anltpB"
            >Email</label>
            <input
                type="email"
                id="email"
                placeholder="Email"
                value={registerEmail}
                className={style.input}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
            />
            <label
                htmlFor="Password"
                className="font-anltpB"
            >Password</label>
            <input
                type="password"
                id="passwrod"
                placeholder="Password"
                value={registerPassword}
                className={style.input}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
            />
            <p style={{ color: "red" }}>{emailError}</p>
            <button className={style.btn} onClick={register}>Create User</button>
            <p>Password: {registerPassword}</p>

            {/* Hapus Sign Out dibawah saat sudah selesai testig */}
            <p>{user?.email}</p>
            {auth.currentUser ? (
                <SignOutBtn />
            ) : ""}
        </div>
    );
}
