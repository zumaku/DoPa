import { sign } from "../assets";
import { SignUp } from "../components";
import { style } from "../style";

export default function Dashboard() {
    return (
        // <div className="h-screen flex justify-center items-center">
        //     <h1 className="text-6xl font-anltpB">Dashboard In Proggress</h1>
        // </div>
        <div className="flex flex-col sm:flex-row items-start w-full py-10 sm:py-16">
            <SignUp />
            <img src={sign} alt="DoPa Illustration" className={style.imgPadding} />
        </div>
    )
}