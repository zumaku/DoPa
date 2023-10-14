import { useState } from "react"
import { auth } from "../firebase.config"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { style } from "../style";
import SignOutBtn from "./SignOutBtn";

export default function SignIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
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
        if (!validateEmail(loginEmail)) {
            setEmailError("Email tidak valid");
            return; // Jangan lanjutkan jika email tidak valid
        }

        try {
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );

            // Reset nilai input kembali kosong jika registrasi berhasil
            setLoginEmail("");
            setLoginPassword("");
            setEmailError(null); // Hapus pesan error email
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1 className={`${style.secTitl}`}>
                Login
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
                value={loginEmail}
                className={style.input}
                onChange={(e) => setLoginEmail(e.target.value)}
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
                value={loginPassword}
                className={style.input}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
            />
            <p style={{ color: "red" }}>{emailError}</p>
            <button className={style.btn} onClick={register}>Sign In</button>

            {/* Hapus Sign Out dibawah saat sudah selesai testig */}
            <p>{user?.email}</p>
            {auth.currentUser ? (
                <SignOutBtn />
            ) : ""}
        </div>
    )
}