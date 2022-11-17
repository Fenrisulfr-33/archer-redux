export const FilterBar = ({ onResetHandler, searchParams, onChangeHandler }) => {
    return (
        <div className="flex space-x-2 m-1">
            {searchParams.map((params, index) => (
                <input
                    key={index}
                    placeholder={params.title}
                    className={`rounded-md 
                    bg-gray-600 
                    border-2 
                    border-purple-400 
                    text-xs 
                    font-mono
                    placeholder:italic
                     text-gray-100
                     placeholder:text-purple-400
                    px-1 ${params.width}`}
                    name={params.name}
                    value={params.value}
                    onChange={onChangeHandler}
                />
            ))}
            <button onClick={onResetHandler} className={`btn-purple`}>Reset</button>
        </div>
    )
}