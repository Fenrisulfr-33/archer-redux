import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadNationalDex } from "../../../redux/pokemon/dexes/dexActions";
import { bindActionCreators } from "redux";
import PokemonLayout from "../PokemonLayout";
import { DexRow } from "../../../components/pokemon/components/DexRow";
import Pagination from "../../../components/pagination/Pagination";
import TableLayout from "../../../components/pokemon/components/tableLayout/tableLayout";
import { InputBox } from "../../../components/pokemon/components/inputBoxes/InputBox";
import { national } from "../../../components/pokemon/variables/headers";
import { types } from "../../../components/pokemon/variables/dropdowns";

const List = ({ list = [], pushRoute }) => {
  const styles = {
    th: "py-1 px-1 text-center",
  };
  // Pagination
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="pokemon-content" className="flex flex-col space-y-2 pb-4">
      <div
        className={
          "flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purp-300"
        }
      >
        <Pagination
          recordsPerPage={recordsPerPage}
          totalCount={list.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <TableLayout
        thead={national.map((header, index) => (
          <th key={index} className={styles.th}>
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
      <div
        className={
          "flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purp-300"
        }
      >
        <Pagination
          recordsPerPage={recordsPerPage}
          totalCount={list.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const NationalDex = ({ dex = [], loadNationalDex, loading }) => {
  const router = useRouter();
  const { query, isReady } = router;

  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let searchRoute = "/pokemon/national";
    const types = [typeOne, typeTwo];
    types.forEach((type, index) => {
      if (type !== ''){
        if (index === 0){
          searchRoute += `?typeOne=${type}`
        } else {
          searchRoute += `&typeTwo=${type}`
        }
      }
    })
    console.log(searchRoute);
    router.push(searchRoute);
  };

  const onResetHandler = () => {};

  useEffect(() => {
    if (isReady) {
      let searchQuery = "";
      if (Object.keys(query).length > 0) {
        searchQuery += "?";
        let index = 0;
        for (const [key, value] of Object.entries(query)) {
          if (index !== 0) {
            searchQuery += `&${key}=${value}`;
          } else {
            searchQuery += `${key}=${value}`;
          }
          index++;
        }
      }
      loadNationalDex(searchQuery);
    }
  }, [isReady, query]);

  return (
    <PokemonLayout>
      {loading ? (
        <Loading />
      ) : (
        <div>

          <div className="flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purple-300">
            <div className={"flex flex-row space-x-2"}>
              <h2 className={"label"}>Filters</h2>
              <button onClick={onResetHandler} className={`button`}>
                Reset
              </button>
                  <InputBox
                    value={typeOne}
                    setValue={setTypeOne}
                    placeholder={"Type One"}
                    list={types}
                  />
                                    <InputBox
                    value={typeTwo}
                    setValue={setTypeTwo}
                    placeholder={"Type Two"}
                    list={types}
                  />
                <button onClick={onSubmitHandler} className={"button"}>
                  Search
                </button>
            </div>
          </div>

          <List list={dex} pushRoute={""} />
        </div>
      )}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ dexes: { national }, apiCallsInProgress }) => {
    return {
      dex: national,
      loading: apiCallsInProgress > 0,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loadNationalDex: bindActionCreators(loadNationalDex, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(NationalDex);
