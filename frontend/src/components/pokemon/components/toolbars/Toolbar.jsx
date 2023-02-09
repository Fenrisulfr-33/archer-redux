import Pagination from "../../../pagination/Pagination";

export default function ToolBar({ onResetHandler, searchParams, onChangeHandler, recordsPerPage, totalCount, paginate, currentPage }){
    return (
        <div className="flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purp-300">
            <div className={'flex flex-row space-x-2'}>
                <h2 className={'label'}>Filters</h2>
                <button onClick={onResetHandler} className={`button`}>Reset</button>
            </div>
            <div className={'flex flex-row justify-between overflow-auto scrollbar-hide'}>
                <div className={'flex flex-row space-x-2 h-10'}>
                    {searchParams.map((params, index) => (
                        <input
                            key={index}
                            placeholder={params.title}
                            className={`
                            w-min-fit
                            rounded-md 
                            bg-gray-600 
                            border-2 
                            border-purp-400 
                            text-sm 
                            font-mono
                            placeholder:italic
                            placeholder:text-purp-100
                            hover:font-bold
                            pl-2`}
                            name={params.name}
                            value={params.value}
                            onChange={onChangeHandler}
                        />
                    ))}
                </div>
            </div>
            <h2 className={'label'}>Page</h2>
            <Pagination 
                recordsPerPage={recordsPerPage} 
                totalCount={totalCount} 
                paginate={paginate} 
                currentPage={currentPage}
            />
        </div>
    )
}