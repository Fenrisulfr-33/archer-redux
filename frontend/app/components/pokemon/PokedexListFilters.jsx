import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { pokedexOnFilterSubmit } from "@/helperFunctions/pokedexOnFilterSubmit";

const FilterLabel = ({ label }) => (
  <div className="text-gray-100 italic font-bold p-2 mb-1 border-b border-purple-50">
    {label}
  </div>
);

export default function PokedexListFilters({
  searchRoute,
}) {
  const router = useRouter();
  const { asPath } = router;
  const stateInitial = () => "";
  const [filters, setFilters] = useState(false);
  const [typeOne, setTypeOne] = useState(() => stateInitial());
  const [typeTwo, setTypeTwo] = useState(() => stateInitial());
  const [sortSelected, setSortSelected] = useState(() => stateInitial());
  const [statSelected, setStatSelected] = useState(() => stateInitial());
  const [selectedTypes, setSelectedTypes] = useState([]);
  const onResetHandler = () => {
    // setTypeOne("");
    // setTypeTwo("");
    setSelectedTypes([]);
    setSortSelected("");
    setStatSelected("");
    if (asPath !== searchRoute) {
      router.push(searchRoute);
    }
  };
  // When filter search is clicked
  const onFilterSubmit = (event) => {
    // create params for the query
    const params = {
      typeOne: selectedTypes[0] ? selectedTypes[0] : null,
      typeTwo: selectedTypes[1] ? selectedTypes[1] : null,
      sort: sortSelected,
      stat: statSelected,
    };
    // This pushes the route with the new query
    pokedexOnFilterSubmit(event, router, params, searchRoute);
  };

  const types = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];
  const sorting = ["Asc", "Desc"];
  const stats = ["HP", "Atk", "Def", "SpAtk", "SpDef", "Spd"];

  const onTypeSelectHandler = (event, type) => {
    const newTypes = selectedTypes;
    if (newTypes.includes(type)){
      const foundTypeIndex = newTypes.indexOf(type);
      newTypes.splice(foundTypeIndex, 1);
      setSelectedTypes([...newTypes]);
    } else {
      if (selectedTypes.length < 2){
        newTypes.push(type);
        setSelectedTypes([...newTypes]);
      }
    } 
  }

  return (
    <div className="flex flex-col space-y-4 p-2 font-mono bg-gray-700 m-2 rounded-lg border-2 border-purple-300">
      <button
        className={`bg-gray-900 rounded-lg px-4 py-2 text-purple-50 ${
          filters ? "font-bold border-2 border-purple-50 shadow-selected" : ""
        }`}
        onClick={() => setFilters(!filters)}
      >
        Filters {filters ? "[close]" : "[open]"}
      </button>
      <div className={`space-y-2 ${filters ? "" : "hidden"} `}>
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
          <div className="flex flex-col">
            <FilterLabel label={"Pick a type"} />
            <div className="flex flex-wrap">
              {types.map((type) => (
                <button onClick={(event) => onTypeSelectHandler(event, type)}>
                  <Image
                    src={`/pokemon/typeIcons/${type.toLowerCase()}.svg`}
                    alt={type}
                    height={60}
                    width={60}
                    className={`p-1 m-1 ${
                      selectedTypes.includes(type)
                        ? "border-4 border-purple-100 rounded-full shadow-lg shadow-purple-300"
                        : null
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          {/* <div className="flex flex-col">
            <FilterLabel label={"Pick another type"} />
            <div className="flex flex-wrap">
              {types.map((type) => (
                <button onClick={() => setTypeTwo(type)}>
                  <Image
                    src={`/pokemon/typeIcons/${type.toLowerCase()}.svg`}
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
          </div> */}
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
            <div className="grid grid-cols-3 tablet:grid-cols-6">
              {stats.map((stat) => (
                <button
                  onClick={() => setStatSelected(stat)}
                  className={`col-span-1 bg-gray-900 rounded-lg p-4 m-1 text-purple-50 ${
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

          <div className={`flex flex-row`}>
            <button
              onClick={onResetHandler}
              className="w-1/2 bg-purple-100 rounded-lg px-4 py-2 m-1 text-gray-900 font-bold"
            >
              Reset
            </button>
            <button
              onClick={onFilterSubmit}
              className="w-1/2 bg-purple-100 rounded-lg px-4 py-2 m-1 text-gray-900 font-bold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}