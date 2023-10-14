import { style } from "../style";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

export default function SignOutBtn() {
    const signout = async () => {
        await signOut(auth);
    };

    return (
        <button className={style.btn} onClick={signout}>
            Sign Out
        </button>
    );
}
