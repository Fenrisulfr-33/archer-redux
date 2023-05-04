import { useState } from "react";
import TableLayout from "../tableLayout/TableLayout";
import PaginationLayout from "../../../../layout/Pagination";
import AbilitiesRow from "./AbilitiesRow";
import { abilities } from "../../variables/headers";

const styles = {
  th: "py-1 px-1 text-center",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};

export default function AllAbilitiesList({ list }) {
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
        <TableLayout
          thead={abilities.map((header, index) => (
            <th key={index} className={styles.th}>
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
