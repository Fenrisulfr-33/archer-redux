import { useState } from "react";
import { useRouter } from "next/router";
import TableLayout from "../tableLayout/TableLayout";
import { DexRow } from "./DexRow";
import PaginationLayout from "../pagination/PaginationLayout";
import ListFilters from "../filters/Filters";
import { onFilterSubmitHandler } from "../../../helperFunctions/helperFunctions";
import { types } from "../variables/dropdowns";
import { national, dexes } from "../variables/headers";

export default function List({
  list = [],
  pushRoute,
  header,
  dexNumber,
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
  const headers = header === "national" ? national : dexes;
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
    onFilterSubmitHandler(event, router, params, searchRoute);
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
      <ListFilters
        inputs={[
          {
            value: typeOne,
            setValue: setTypeOne,
            list: types,
            placeholder: "Type One",
            isType: true,
          },
          {
            value: typeTwo,
            setValue: setTypeTwo,
            list: types,
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
            list: ["Total", "HP", "Atk", "Def", "SpAtk", "SpDef", "Speed"],
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
          <TableLayout
            thead={headers.map((header, index) => (
              <th key={index} className={"py-1 px-1 text-center bg-purple-900"}>
                {header}
              </th>
            ))}
            tbody={currentRecords.map((pokemon) => (
              <DexRow
                key={pokemon._id}
                pokemon={pokemon}
                dexNumber={
                  dexNumber ? pokemon.pokedexNumber[dexNumber] : pokemon._id
                }
                pushRoute={pushRoute}
              />
            ))}
          />
        }
      ></PaginationLayout>
    </div>
  );
}
