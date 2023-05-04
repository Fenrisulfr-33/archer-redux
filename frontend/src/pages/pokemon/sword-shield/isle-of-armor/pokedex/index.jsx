import { useEffect } from "react";
import { connect } from "react-redux";
import { loadIoaDex } from "../../../../../redux/pokemon//dexes/dexActions";
import { bindActionCreators } from "redux";
import { DexList } from "../../../../../components/pokemon/components/DexList";
import Loading from "../../../../../components/Loading";
import PokemonLayout from "../../../PokemonLayout";

const IoaDex = ({ dex, loadIoaDex, loading }) => {
  useEffect(() => {
    if (dex.length === 0) {
      loadIoaDex("isle-of-armor");
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
          game={"ioa"}
          pushRoute={"isle-of-armor"}
        />
      )}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ dexes: { isle_of_armor }, apiCallsInProgress }) => {
    return {
      dex: isle_of_armor,
      loading: apiCallsInProgress > 0,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loadIoaDex: bindActionCreators(loadIoaDex, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(IoaDex);
