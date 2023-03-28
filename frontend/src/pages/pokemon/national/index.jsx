import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadNationalDex } from "../../../redux/pokemon/dexes/dexActions";
import { bindActionCreators } from "redux";
import PokemonLayout from "../PokemonLayout";
//
import { DexRow } from "../../../components/pokemon/components/DexRow";
import Pagination from "../../../components/pagination/Pagination";
import TableLayout from "../../../components/pokemon/components/tableLayout/tableLayout";
import { InputBox } from "../../../components/pokemon/components/inputBoxes/InputBox";

const List = ({ list = [], pushRoute }) => {
  console.log('list', list);
  const router = useRouter();
  const styles = {
    th: "py-1 px-1 text-center",
  };
  const headers = [
    "Nat. Dex",
    "Pokemon",
    "Sprite",
    "Type",
    "Abilities",
    "Total",
    "HP",
    "Atk",
    "Def",
    "SpAtk",
    "SpDef",
    "Spd",
  ];
  const types = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dark',
    'Dragon',
    'Steel',
    'Fairy',
  ];
  const [typeOne, setTypeOne] = useState('');
  const [typeTwo, setTypeTwo] = useState('');
  const onResetHandler = () => setSearchParams({ ...initalSearchParams });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let searchRoute = '/pokemon/national?'
    // make it so you can enter 4 moves anywhere
    const types = [typeOne, typeTwo];
    const checkTypes = () => {
      types.forEach((type) => {
        if (type !== ''){
          searchRoute += `typeOne=${type}`
        }
      })
    }
    checkTypes();
    router.push(searchRoute);
  }
  // Pagination
  const [recordsPerPage, setRcordsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="pokemon-content" className="flex flex-col space-y-2 pb-4">
      <div className="flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purple-300">
        <div className={"flex flex-row space-x-2"}>
          <h2 className={"label"}>Filters</h2>
          <button onClick={onResetHandler} className={`button`}>
            Reset
          </button>
        </div>
        <div
          className={
            "flex flex-row justify-between overflow-auto scrollbar-hide"
          }
        >
          <div className={"flex flex-row space-x-2 h-10"}>
            <label className={'flex flex-row space-x-2'}>
              <div className={'label'} disabled={true}>{'Type One'}</div>
              <InputBox value={typeOne} setValue={setTypeOne} placeholder={'Type One'} list={types} />
            </label>
            <button onClick={onSubmitHandler} className={'button'}>Search</button>
          </div>
        </div>
      </div>
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
        thead={headers.map((header, index) => (
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
  useEffect(() => {
    if (isReady) {
      console.log(query);
      let searchQuery = '';
      if (Object.keys(query).length > 0){
        for (const [key, value] of Object.entries(query)){
          searchQuery += '?'
          searchQuery += `${key}=${value}`
        }
      }
      console.log(searchQuery)
      loadNationalDex(searchQuery);
    }
  }, [isReady, query]);

  return (
    <PokemonLayout>
      {loading ? <Loading /> : <List list={dex} pushRoute={""} />}
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
