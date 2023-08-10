import { useState } from "react";
import NewInputBox from "../inputBoxes/NewInputBox";

export default function ListFilters({
  inputs,
  onResetHandler,
  onFilterSubmit,
}) {
  const [filters, setFilters] = useState(false);

  return (
    <div className="flex flex-col space-y-2 p-2 font-mono bg-gray-700 m-2 rounded-lg border-2 border-purple-300">
      <button className={"label"} onClick={() => setFilters(!filters)}>
        Filters {filters ? "[close]" : "[open]"}
      </button>
      <div className={`space-y-2 ${filters ? "" : "hidden"} `}>
        <div className={`flex flex-row space-x-2 overflow-auto scrollbar-hide`}>
          <button onClick={onResetHandler} className={`button`}>
            Reset
          </button>
          <button onClick={onFilterSubmit} className={`button`}>
            Search
          </button>
        </div>
        <div
          className={
            "text-xxs phone:text-sm text-gray-400 ml-2 italic leading-tight"
          }
        >
          Note: You must pick a Sort and Stat for the dex to get sorted.
        </div>
        <div
          className={
            "text-xxs phone:text-sm text-gray-400 ml-2 italic leading-tight"
          }
        >
          Note: You can select any type combo in any order. ex: [Fire/Normal] &
          [Normal/Fire] give the same results.
        </div>
        <div className={`relative space-y-1 font-mono`}>
          {inputs.map((input, index) => {
            return (
              <NewInputBox
                key={index}
                value={input.value}
                setValue={input.setValue}
                placeholder={input.placeholder}
                list={input.list}
                isType={input.isType}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
