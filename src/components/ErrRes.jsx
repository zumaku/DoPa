import { style } from "../style"

export default function ErrRes(props) {
    return (
        <div className="w-full p-0 sm:pr-5">
            <h1 className={style.secTitl}>Upss..</h1>
            <p>Mohon Maaf. Sepertinya terjadi sebuah kesalahan.</p>
            <p className="font-anltpB">{props.err}</p>
        </div>
    )
}