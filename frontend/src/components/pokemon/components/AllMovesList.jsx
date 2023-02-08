import { useState } from "react";
import ToolBar from "./toolbars/Toolbar";
import { colors } from "../variables/typeColors";

/* STYLES */
const styles = {
  th: "py-1 px-1 text-center",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};

export const MoveRow = ({ move: {_id, name, type, category, pp, power, accuracy }}) => {
    const styles = {
        type: "col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75",      
    }

    return (
      <tr className="text-center hover:bg-purple-200 hover:text-gray-900 hover:font-bold">
        <td>{_id}</td>
        <td>{name.english}</td>
        <td className={`${styles.type} ${colors[type.toLowerCase()]}`}>{type}</td>
        <td>{category ? category : '-'}</td>
        <td>{pp ? pp : '-'}</td>
        <td>{power ? power : '-'}</td>
        <td>{accuracy ? accuracy : '-'}</td>
      </tr>
    );
  };
/* MAIN COMPONENT */
export const AllMovesList = ({ list, filters = false, }) => {
    const initalSearchParams = {
      name: '',
      type: '',
      category: '',
      pp: '',
      power: '',
      accuracy: '',
    }, [searchParams, setSearchParams] = useState({ ...initalSearchParams }),
    searchParamsList = [
        {title: 'Name', name: 'name', value: searchParams.name, width: 'w-24'},
        {title: 'Type', name: 'type', value: searchParams.type, width: 'w-14'},
        {title: 'Category', name: 'category', value: searchParams.category, width: 'w-14'},
        {title: 'PP', name: 'pp', value: searchParams.pp, width: 'w-24'},
        {title: 'Power', name: 'power', value: searchParams.power, width: 'w-24'},
        {title: 'Accuracy', name: 'accuracy', value: searchParams.accuracy, width: 'w-24'},
    ], headers = [
        "No.",
        "Name", 
        "Type",
        "Category",
        "PP",
        "Power",
        "Accuracy",
      ],
    onChangeHandler = ({ target: { name, value } }) =>
      setSearchParams({ ...searchParams, [name]: value.toLowerCase() }),
    onResetHandler = () => setSearchParams({ ...initalSearchParams });

  // Pagination
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="pokemon-content" className="flex flex-col">
        {/* <ToolBar 
          onResetHandler={onResetHandler} 
          searchParams={searchParamsList} 
          onChangeHandler={onChangeHandler}
          recordsPerPage={recordsPerPage} 
          currentPage={currentPage}
          totalCount={list.length} 
          paginate={paginate}
        /> */}
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full font-mono bg-gray-300 text-xs laptop:text-sm">
                    <thead>
                        <tr className="bg-gray-500 text-gray-300 uppercase  leading-normal rounded-t-lg">
                            {headers.map((header, index) => (<th key={index} className={styles.th}>{header}</th>))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-light">
                        {currentRecords.map((move) => (
                            <MoveRow key={move._id} move={move} />
                        ))}
                    </tbody>
                   </table>
                </div>
            </div>
        </div>
    </div>
)};