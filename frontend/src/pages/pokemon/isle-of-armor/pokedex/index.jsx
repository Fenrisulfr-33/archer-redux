import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { loadDex } from "../../../../redux/pokemon/dexes/dexActions";
import { bindActionCreators } from "redux";
import Loading from "../../../../components/Loading";
import PokemonLayout from "../../PokemonLayout";
import List from "../../../../components/pokemon/components/List";
import { createSearchQuery } from "../../../../helperFunctions/helperFunctions";

const IoaDex = ({ dex, loadDex, loading }) => {
  const router = useRouter();
  const { query, isReady } = router;
  useEffect(() => {
    if (isReady) {
      const searchQuery = createSearchQuery(query);
      loadDex("isle-of-armor", searchQuery);
    }
  }, [isReady, query]);

  return (
    <PokemonLayout>
      {loading ? (
        <Loading />
      ) : (
        <List
        list={dex}
        dexNumber={"ioa"}
        pushRoute={"isle-of-armor"}
        searchRoute={"/pokemon/isle-of-armor/pokedex"}
      />
      )}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ dexes: { dex }, apiCallsInProgress }) => {
    return {
      dex,
      loading: apiCallsInProgress > 0,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loadDex: bindActionCreators(loadDex, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(IoaDex);
