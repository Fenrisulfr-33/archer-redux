'use client';

import { useState } from "react";
import PokemonTableLayout from "@/components/pokemon/PokemonTableLayout";
import PokedexRow from "@/components/pokemon/PokedexRow";
import PaginationLayout from "@/components/pagination/PaginationLayout";
import NationalDexFilters from "./NationalDexFilters";
import { nationalHeaders } from "@/components/variables/pokemonHeaders";

export default function NationalDexList({ pokedex }) {
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = pokedex.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col space-y-2 pb-4">

      <NationalDexFilters
        searchRoute={"/pokemon/national"}
      />
      <PaginationLayout
        recordsPerPage={recordsPerPage}
        totalCount={pokedex.length}
        paginate={paginate}
        currentPage={currentPage}
        children={
          <PokemonTableLayout
            thead={nationalHeaders.map((header, index) => (
              <th key={index} className="p-2">
                {header}
              </th>
            ))}
            tbody={currentRecords.map((pokemon) => (
              <PokedexRow
                key={pokemon._id}
                pokemon={pokemon}
                dexNo={null}
                national={true}
                pushRoute={""}
              />
            ))}
          />
        }
      ></PaginationLayout>
    </div>
  );
}
