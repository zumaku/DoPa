export default function Table({data}) {
    return (
        <table className="w-[730px] sm:w-full">
            <thead className="bg-primary">
                <tr>
                    <th className="text-start px-3 py-2 w-40 rounded-l-lg">Tanggal</th>
                    <th className="text-start px-3 py-2 w-48">Transaksi</th>
                    <th className="text-start px-3 py-2 w-28">Pemasukan</th>
                    <th className="text-start px-3 py-2 w-28">Pengeluaran</th>
                    <th className="text-start px-3 py-2">Catatan</th>
                    <th className="text-start px-3 py-2 w-24 rounded-r-lg">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className="p-2">
                            {item.date.toDate().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </td>
                        <td className="p-2">{item.transaction}</td>
                        {item.flow && (<>
                            <td className="p-2">{item.amount}</td>
                            <td className="p-2"></td>
                        </>)}
                        {!item.flow && (<>
                            <td className="p-2"></td>
                            <td className="p-2">{item.amount}</td>
                        </>)}
                        <td className="p-2">{item.note}</td>
                        <td className="p-2">Edit Hapus</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}