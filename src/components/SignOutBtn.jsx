import { style } from "../style";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom"

export default function SignOutBtn() {
    const history = useHistory()
    const signout = async () => {
        await signOut(auth);
        history.push("/")
    };

    return (
        <button className={style.btn} onClick={signout}>
            Sign Out
        </button>
    );
}
