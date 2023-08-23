import { useState } from "react";
import Image from "next/image";
import PokedexFilterInputBox from "./PokedexFilterInputBox";

const FilterLabel = ({ label }) => (
  <div className="text-gray-100 italic font-bold p-2 mb-1 border-b border-purple-50">
    {label}
  </div>
);

export default function PokedexListFilters({
  inputs,
  onResetHandler,
  onFilterSubmit,
}) {
  const stateInitial = () => null;
  const [filters, setFilters] = useState(false);
  const [typeOne, setTypeOne] = useState(() => stateInitial());
  const [typeTwo, setTypeTwo] = useState(() => stateInitial());
  const [sortSelected, setSortSelected] = useState(() => stateInitial());
  const [statSelected, setStatSelected] = useState(() => stateInitial());

  const types = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];
  const sorting = ["Asc", "Desc"];
  const stats = ["HP", "Atk", "Def", "SpAtk", "SpDef", "Spd"];

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
        <div className={`space-y-2 font-mono`}>
          {/* {inputs.map((input, index) => {
            return (
              <PokedexFilterInputBox
                key={index}
                value={input.value}
                setValue={input.setValue}
                placeholder={input.placeholder}
                list={input.list}
                isType={input.isType}
              />
            );
          })} */}

          <div className="flex flex-col">
            <FilterLabel label={"Pick a type"} />
            <div className="flex flex-wrap">
              {types.map((type) => (
                <button onClick={() => setTypeOne(type)}>
                  <Image
                    src={`/pokemon/typeIcons/${type}.svg`}
                    alt={type}
                    height={60}
                    width={60}
                    className={`p-1 m-1 ${
                      typeOne === type
                        ? "border-4 border-purple-100 rounded-full shadow-lg shadow-purple-300"
                        : null
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <FilterLabel label={"Pick another type"} />
            <div className="flex flex-wrap">
              {types.map((type) => (
                <button onClick={() => setTypeTwo(type)}>
                  <Image
                    src={`/pokemon/typeIcons/${type}.svg`}
                    alt={type}
                    height={60}
                    width={60}
                    className={`p-1 m-1 ${
                      typeTwo === type
                        ? "border-4 border-purple-100 rounded-full shadow-lg shadow-purple-300"
                        : null
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <FilterLabel label={"Asc = Lowest first / Desc = Greatest first"} />
            <div className="flex flex-row">
              {sorting.map((sort) => (
                <button
                  onClick={() => setSortSelected(sort)}
                  className={`w-1/2 bg-gray-900 rounded-lg p-4 m-1 text-purple-50 ${
                    sort === sortSelected
                      ? "border-2 border-purple-50 shadow-selected"
                      : ""
                  }`}
                >
                  {sort}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <FilterLabel label={"Select stat to sort by"} />
            <div className="flex flex-row">
              {stats.map((stat) => (
                <button
                  onClick={() => setStatSelected(stat)}
                  className={`w-1/6 bg-gray-900 rounded-lg p-4 m-1 text-purple-50 ${
                    stat === statSelected
                      ? "border-2 border-purple-50 shadow-selected"
                      : ""
                  }`}
                >
                  {stat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
