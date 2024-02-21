'use client';

import { useState } from "react";
import PokemonTableLayout from "../../../components/pokemon/PokemonTableLayout";
import PaginationLayout from "../../../components/pagination/PaginationLayout";
import MovesRow from "./MovesRow";
import { moves } from "../../../components/variables/pokemonHeaders";

export default function MovesList({ list }) {
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
          thead={moves.map((header, index) => (
            <th key={index} className="py-1 px-1 text-center">
              {header}
            </th>
          ))}
          tbody={currentRecords.map((move) => (
            <MovesRow key={move._id} move={move} />
          ))}
        />
      }
    ></PaginationLayout>
  );
}
