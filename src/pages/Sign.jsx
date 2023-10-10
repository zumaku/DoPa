import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase.config"

export default function Sign() {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [emailError, setEmailError] = useState(null)

    const validateEmail = (email) => {
        // Ekspresi reguler untuk memeriksa format email yang valid
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

    const register = async () => {
        // Validasi email sebelum mencoba membuat akun
        if (!validateEmail(registerEmail)) {
            setEmailError("Email tidak valid");
            return; // Jangan lanjutkan jika email tidak valid
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)

            // Reset nilai input kembali kosong jika registrasi berhasil
            setRegisterEmail("");
            setRegisterPassword("");
            setEmailError(null); // Hapus pesan error email
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <h1>Register User</h1>
            <input type="email" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
            <p>Password: {registerPassword}</p>
            <p style={{ color: "red" }}>{emailError}</p>
            <button onClick={register}>Create User</button>
        </div>
    )
}
