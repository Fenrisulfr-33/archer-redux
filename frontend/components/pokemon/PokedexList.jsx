import { useState } from "react";
import { useRouter } from "next/router";
import PokemonTableLayout from "./PokemonTableLayout";
import PokedexRow from "./PokedexRow";
import PaginationLayout from "../pagination/PaginationLayout";
import PokedexListFilters from "./PokedexListFilters";
import { pokedexOnFilterSubmit } from "@/helperFunctions/pokedexOnFilterSubmit";
import { pokemonTypes } from "../variables/pokemonDropDowns";
import { nationalHeaders, pokedexHeaders } from "../variables/pokemonHeaders";

export default function PokedexList({
  list,
  pushRoute,
  national,
  game,
  searchRoute,
}) {
  const router = useRouter();
  const { asPath } = router;
  // Generic Filter code ----- START
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [sort, setSort] = useState("");
  const [stat, setStat] = useState("");
  // Set headers variables
  const headers = national ? nationalHeaders : pokedexHeaders;
  // Reset filter variables
  const onResetHandler = () => {
    setTypeOne("");
    setTypeTwo("");
    setSort("");
    setStat("");
    if (asPath !== searchRoute) {
      router.push(searchRoute);
    }
  };
  // When filter search is clicked
  const onFilterSubmit = (event) => {
    // create params for the query
    const params = {
      typeOne: typeOne,
      typeTwo: typeTwo,
      sort: sort,
      stat: stat,
    };
    // This pushes the route with the new query
    pokedexOnFilterSubmit(event, router, params, searchRoute);
  };
  // Generic Filter code ----- END
  // Pagination
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="dex-list-content" className="flex flex-col space-y-2 pb-4">
      <PokedexListFilters
        inputs={[
          {
            value: typeOne,
            setValue: setTypeOne,
            list: pokemonTypes,
            placeholder: "Type One",
            isType: true,
          },
          {
            value: typeTwo,
            setValue: setTypeTwo,
            list: pokemonTypes,
            placeholder: "Type Two",
            isType: true,
          },
          {
            value: sort,
            setValue: setSort,
            list: ["Asc", "Desc"],
            placeholder: "Sort",
          },
          {
            value: stat,
            setValue: setStat,
            list: ["Total", "HP", "Atk", "Def", "SpAtk", "SpDef", "Spd"],
            placeholder: "Stats",
          },
        ]}
        onResetHandler={onResetHandler}
        onFilterSubmit={onFilterSubmit}
      />
      <PaginationLayout
        recordsPerPage={recordsPerPage}
        totalCount={list.length}
        paginate={paginate}
        currentPage={currentPage}
        children={
          <PokemonTableLayout
            thead={headers.map((header, index) => (
              <th key={index}>
                {header}
              </th>
            ))}
            tbody={currentRecords.map((pokemon) => (
              <PokedexRow
                key={pokemon._id}
                pokemon={pokemon}
                dexNo={game ? pokemon.pokedexNumber[game] : null}
                national={national}
                pushRoute={pushRoute}
              />
            ))}
          />
        }
      ></PaginationLayout>
    </div>
  );
}
