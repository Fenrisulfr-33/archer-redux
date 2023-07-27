import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { loadDex } from "../../../../redux/pokemon//dexes/dexActions";
import { bindActionCreators } from "redux";
import Loading from "../../../../components/Loading";
import PokemonLayout from "../../PokemonLayout";
import List from "../../../../components/pokemon/components/List";
import { createSearchQuery } from "../../../../helperFunctions/helperFunctions";

const ScViDex = ({ dex, loadDex, loading }) => {
  const router = useRouter();
  const { query, isReady } = router;

  useEffect(() => {
    if (isReady) {
      const searchQuery = createSearchQuery(query);
      loadDex("scarlet-violet", searchQuery);
    }
  }, [isReady, query]);

  return (
    <PokemonLayout>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <List
            list={dex}
            pushRoute={"scarlet-violet"}
            dexNumber={"scvi"}
            searchRoute={"/pokemon/scarlet-violet/pokedex"}
          />
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ScViDex);
