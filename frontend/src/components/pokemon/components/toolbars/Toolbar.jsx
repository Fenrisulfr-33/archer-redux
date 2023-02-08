import Pagination from "../../../pagination/Pagination";

export default function ToolBar({ onResetHandler, searchParams, onChangeHandler, recordsPerPage, totalCount, paginate, currentPage }){
    return (
        <div className="flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purp-300">
            <h2 className={'test-label'}>Filters</h2>
            <div className={'flex flex-row justify-between overflow-auto scrollbar-hide'}>
                <div className={'flex flex-row space-x-2'}>
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
                            text-xs 
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
                <button onClick={onResetHandler} className={`test-button ml-2`}>Reset</button>
            </div>
            <h2 className={'test-label'}>Page</h2>
            <Pagination 
                recordsPerPage={recordsPerPage} 
                totalCount={totalCount} 
                paginate={paginate} 
                currentPage={currentPage}
            />
        </div>
    )
}