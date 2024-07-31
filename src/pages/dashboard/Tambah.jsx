import { style } from "../../style"

export default function Tambah({setIsAdd}) {
    return (
        <div className="fixed z-50 top-0 left-0 w-full h-screen p-20 overflow-y-scroll backdrop-blur-md flex justify-center items-start">
            <form className="bg-primary_light max-w-2xl p-10 rounded-xl">
                <h1 className={style.secTitl}>
                    Transaksi
                    <span className={style.grad}> Baru</span>
                </h1>
                <label className="font-anltpB" htmlFor="tanggal">Tanggal Transaksi</label>
                <input type="date" id="tanggal" className={`${style.input2}`} />
                <label className="font-anltpB" htmlFor="transaksi">Nama Transaksi</label>
                <input type="text" id="transaksi" className={`${style.input2}`} />
                <label className="font-anltpB" htmlFor="jtransaksi">Jenis Transaksi</label>
                <select id="jtransaksi" className={`${style.input2}`}>
                    <option value="false">Pengeluaran</option>
                    <option value="true">Pemasukan</option>
                </select>
                <label className="font-anltpB" htmlFor="jumlah">Jumlah</label>
                <input type="number" className={`${style.input2}`} />
                <label className="font-anltpB" htmlFor="note">Catatan</label>
                <textarea id="note" className={`${style.input2}`}></textarea>
                <div className="flex justify-end">
                    <button className={`${style.btn} mr-4`}>Tambah</button>
                    <button className={style.btn} onClick={() => setIsAdd(false)}>Batal</button>
                </div>
            </form>
        </div>
    )
}