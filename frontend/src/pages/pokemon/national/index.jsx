import { useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadNationalDex } from "../../../redux/pokemon/dexes/dexActions";
import { bindActionCreators } from "redux";
import PokemonLayout from "../PokemonLayout";
import List from "../../../components/pokemon/components/List";
import { createSearchQuery } from "../../../helperFunctions/helperFunctions";

const NationalDex = ({ dex = [], loadNationalDex, loading }) => {
  // Get query and isReady for useEffect
  const router = useRouter();
  const { query, isReady } = router;

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
          <List list={dex} pushRoute={""} headers={'national'} searchRoute={'/pokemon/national'} />
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
