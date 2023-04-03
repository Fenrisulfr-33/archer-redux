import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadNationalDex } from "../../../redux/pokemon/dexes/dexActions";
import { bindActionCreators } from "redux";
import PokemonLayout from "../PokemonLayout";
import { InputBox } from "../../../components/pokemon/components/inputBoxes/InputBox";
import { types } from "../../../components/pokemon/variables/dropdowns";
import { createSearchQuery } from "../../../helperFunctions/createSearchQuery";
import { onFilterSubmitHandler } from "../../../helperFunctions/onFilterSubmitHandler";
import List from "../../../components/pokemon/components/List";
import { national } from "../../../components/pokemon/variables/headers";

const NationalDex = ({ dex = [], loadNationalDex, loading }) => {
  // Get query and isReady for useEffect
  const router = useRouter();
  const { query, isReady } = router;
  // Define search route
  const searchRoute = '/pokemon/national'
  // Filter params
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  // Combine filter queries into list for sumbit
  const queries = [
    [ 'typeOne', typeOne ],
    [ 'typeTwo', typeTwo ],
  ]

  const onResetHandler = () => {
    setTypeOne('');
    setTypeTwo('');
    router.push(searchRoute);
  };

  useEffect(() => {
    if (isReady) {
      const searchQuery = createSearchQuery(query);
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
            <div className={"flex flex-row space-x-2 overflow-auto scrollbar-hide"}>
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
                <button onClick={(event) => onFilterSubmitHandler(event, router, searchRoute, queries)} className={"button"}>
                  Search
                </button>
            </div>
          </div>

          <List list={dex} pushRoute={""} headers={national} />
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
