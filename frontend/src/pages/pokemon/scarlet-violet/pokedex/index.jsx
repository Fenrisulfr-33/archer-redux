import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { loadScViDex } from "../../../../redux/pokemon//dexes/dexActions";
import { bindActionCreators } from "redux";
import Loading from "../../../../components/Loading";
import PokemonLayout from "../../PokemonLayout";
import ListFilters from "../../../../components/pokemon/components/filters/Filters";
import { types } from "../../../../components/pokemon/variables/dropdowns";
import List from "../../../../components/pokemon/components/List";
import { dexes } from "../../../../components/pokemon/variables/headers";
import { createSearchQuery, onFilterSubmitHandler } from "../../../../helperFunctions/helperFunctions";

const ScViDex = ({ dex, loadScViDex, loading }) => {
  const router = useRouter();
  const { query, isReady } = router;

  let searchRoute = "/pokemon/scarlet-violet/pokedex";
  // Generic Filter code ----- START
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [sort, setSort] = useState("");
  const [stat, setStat] = useState("");
  // Reset filter variables
  const onResetHandler = () => {
    setTypeOne("");
    setTypeTwo("");
    setSort("");
    setStat("");
    if (searchRoute !== "/pokemon/scarlet-violet/pokedex") {
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

  useEffect(() => {
    if (isReady) {
      const searchQuery = createSearchQuery(query);
      loadScViDex("scarlet-violet", searchQuery);
    }
  }, [isReady, query]);

  return (
    <PokemonLayout>
      {loading ? (
        <Loading />
      ) : (
        <div>
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
          <List list={dex} pushRoute={'scarlet-violet'} dexNumber={'scvi'} headers={dexes} />
        </div>
      )}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ dexes: { scarlet_violet }, apiCallsInProgress }) => {
    return {
      dex: scarlet_violet,
      loading: apiCallsInProgress > 0,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loadScViDex: bindActionCreators(loadScViDex, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ScViDex);
