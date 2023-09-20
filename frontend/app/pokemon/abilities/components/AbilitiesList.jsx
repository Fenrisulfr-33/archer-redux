'use client';

import { useState } from "react";
import PaginationLayout from "@/components/pagination/PaginationLayout";
import AbilitiesRow from "./AbilitiesRow";
import { abilities } from "@/constants/pokemonHeaders";
import PokemonTableLayout from "@/components/pokemon/PokemonTableLayout";

export default function AbilitiesList({ list }) {
  // Pagination
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PaginationLayout
      recordsPerPage={recordsPerPage}
      totalCount={list.length}
      paginate={paginate}
      currentPage={currentPage}
      children={
        <PokemonTableLayout
          thead={abilities.map((header, index) => (
            <th key={index} className="p-2">
              {header}
            </th>
          ))}
          tbody={currentRecords.map((ability) => (
            <AbilitiesRow key={ability._id} ability={ability} />
          ))}
        />
      }
    ></PaginationLayout>
  );
}
