export const FilterBar = ({ onResetHandler, searchParams, onChangeHandler }) => {
    return (
        <div className="flex flex-col space-y-2 phone:space-x-2 phone:space-y-0 phone:m-1 phone:flex-row">
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
            <button onClick={onResetHandler} className={`btn-purple mx-2`}>Reset</button>
        </div>
    )
}