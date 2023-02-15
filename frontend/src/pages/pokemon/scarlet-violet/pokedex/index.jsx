import { useEffect } from "react";
import { connect } from "react-redux";
import { loadScViDex } from "../../../../redux/pokemon//dexes/dexActions";
import { bindActionCreators } from "redux";
import { DexList } from "../../../../components/pokemon/components/DexList";
import Loading from "../../../../components/Loading";
import PokemonLayout from "../../PokemonLayout";

const ScViDex = ({ dex, loadScViDex, loading }) => {
  useEffect(() => {
    if (dex.length === 0) {
      loadScViDex("scarlet-violet");
    }
  }, []);

  return (
    <PokemonLayout>
      {loading ? (
        <Loading />
      ) : (
        <DexList
          list={dex}
          filters={true}
          game={"scvi"}
          pushRoute={"scarlet_violet"}
        />
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