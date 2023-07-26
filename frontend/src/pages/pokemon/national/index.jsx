import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadNationalDex } from "../../../redux/pokemon/dexes/dexActions";
import { bindActionCreators } from "redux";
import PokemonLayout from "../PokemonLayout";
import { types } from "../../../components/pokemon/variables/dropdowns";
import List from "../../../components/pokemon/components/List";
import { national } from "../../../components/pokemon/variables/headers";
import ListFilters from "../../../components/pokemon/components/filters/Filters";
import { createSearchQuery, onFilterSubmitHandler } from "../../../helperFunctions/helperFunctions";

const NationalDex = ({ dex = [], loadNationalDex, loading }) => {
  // Get query and isReady for useEffect
  const router = useRouter();
  const { query, isReady } = router;
  // Define search route
  let searchRoute = "/pokemon/national";
  // Filter params
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [sort, setSort] = useState("");
  const [stat, setStat] = useState("");
  // Combine filter queries into list for sumbit

  const onResetHandler = () => {
    setTypeOne("");
    setTypeTwo("");
    setSort("");
    setStat("");
    if (searchRoute !== "/pokemon/national") {
      router.push(searchRoute);
    }
  };

  const onFilterSubmit = (event) => {
    const params = {
      typeOne: typeOne,
      typeTwo: typeTwo,
      sort: sort,
      stat: stat,
    };
    onFilterSubmitHandler(event, router, params, searchRoute)
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
