import { useState } from "react";
import TableLayout from "../../../components/pokemon/components/tableLayout/TableLayout";
import { DexRow } from "../../../components/pokemon/components/DexRow";
import PaginationLayout from "../../../layout/Pagination";

export default function List({ list = [], pushRoute, headers }) {
  // Pagination
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="pokemon-content" className="flex flex-col space-y-2 pb-4">
      <PaginationLayout
        recordsPerPage={recordsPerPage}
        totalCount={list.length}
        paginate={paginate}
        currentPage={currentPage}
        children={
          <TableLayout
            thead={headers.map((header, index) => (
              <th key={index} className={'py-1 px-1 text-center bg-purple-900'}>
                {header}
              </th>
            ))}
            tbody={currentRecords.map((pokemon) => (
              <DexRow
                key={pokemon._id}
                pokemon={pokemon}
                dexNumber={pokemon._id}
                pushRoute={pushRoute}
              />
            ))}
          />
        }
      ></PaginationLayout>
    </div>
  );
}
