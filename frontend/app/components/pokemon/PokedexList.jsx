"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import PokemonTableLayout from "./PokemonTableLayout";
import PokedexRow from "./PokedexRow";
import PaginationLayout from "../pagination/PaginationLayout";
import PokedexListFilters from "./PokedexListFilters";
import { pokedexOnFilterSubmit } from "@/helperFunctions/pokedexOnFilterSubmit";
import { pokemonTypes } from "../variables/pokemonDropDowns";
import { nationalHeaders, pokedexHeaders } from "../variables/pokemonHeaders";
import { createSearchQuery } from "@/helperFunctions/createSearchQuery";

export default function PokedexList({
  list,
  pushRoute,
  national,
  game,
  searchRoute,
}) {
  // Set headers variables
  const headers = national ? nationalHeaders : pokedexHeaders;
  // Pagination
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="dex-list-content" className="flex flex-col space-y-2 pb-4">
      <PokedexListFilters searchRoute={searchRoute} />
      <PaginationLayout
        recordsPerPage={recordsPerPage}
        totalCount={list.length}
        paginate={paginate}
        currentPage={currentPage}
        children={
          <PokemonTableLayout
            thead={headers.map((header, index) => (
              <th key={index} className="p-2">
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
