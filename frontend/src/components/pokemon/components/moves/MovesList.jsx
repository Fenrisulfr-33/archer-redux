import { useState } from "react";
import { colors } from "../../variables/typeColors";
import Link from "next/link";
import TableLayout from "../tableLayout/tableLayout";
import Pagination from "../../../pagination/Pagination";

const styles = {
  th: "py-1 px-1 text-center",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};

const MoveRow = ({
  move: { _id, name, type, category, pp, power, accuracy },
}) => {
  const styles = {
    type: "col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75",
  };

  return (
    <tr className="text-center hover:bg-purple-200 hover:text-gray-900 hover:font-bold">
      <td>{_id}</td>
      <td><Link href={`/pokemon/moves/${_id}}`} passHref >{name.english}</Link></td>
      <td className={`${styles.type} ${colors[type.toLowerCase()]}`}>{type}</td>
      <td>{category ? category : "-"}</td>
      <td>{pp ? pp : "-"}</td>
      <td>{power ? power : "-"}</td>
      <td>{accuracy ? accuracy : "-"}</td>
    </tr>
  );
};

export default function MovesList({ list }){
  const headers = ["No.", "Name", "Type", "Category", "PP", "Power", "Accuracy"];
  // Pagination
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
        <div className={'flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purple-300'}>
          <h2 className={'label'}>Page</h2>
            <Pagination 
                recordsPerPage={recordsPerPage} 
                totalCount={list.length} 
                paginate={paginate} 
                currentPage={currentPage}
            />
        </div>
      <TableLayout
        thead={headers.map((header, index) => (
          <th key={index} className={styles.th}>
            {header}
          </th>
        ))}
        tbody={currentRecords.map((move) => (
          <MoveRow key={move._id} move={move} />
        ))}
      />
    </>
  );
};