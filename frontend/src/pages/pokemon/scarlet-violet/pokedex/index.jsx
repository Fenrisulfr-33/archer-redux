import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { loadScViDex } from "../../../../redux/pokemon//dexes/dexActions";
import { bindActionCreators } from "redux";
import Loading from "../../../../components/Loading";
import PokemonLayout from "../../PokemonLayout";
import List from "../../../../components/pokemon/components/List";
import { dexes } from "../../../../components/pokemon/variables/headers";
import { createSearchQuery } from "../../../../helperFunctions/helperFunctions";

const ScViDex = ({ dex, loadScViDex, loading }) => {
  const router = useRouter();
  const { query, isReady } = router;

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
          <List list={dex} pushRoute={'scarlet-violet'} dexNumber={'scvi'} headers={dexes} searchRoute={'/pokemon/scarlet-violet/pokedex'} />
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
