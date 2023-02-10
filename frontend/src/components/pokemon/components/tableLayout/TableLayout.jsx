export default function TableLayout({ thead, tbody }){
    return (
        <div className='rounded-lg border-2 border-purp-100 overflow-x-auto scrollbar-hide sm:-mx-6 lg:-mx-8'>
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full font-mono bg-gray-300 text-xs laptop:text-sm">
                <thead className="bg-gray-600 text-gray-300 uppercase leading-normal">
                    <tr>{thead}</tr>
                </thead>
                <tbody className="text-gray-600 font-light">
                    {tbody}
                </tbody>
               </table>
            </div>
        </div>
    </div>
    )
}