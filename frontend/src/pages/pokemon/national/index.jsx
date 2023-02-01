import { useEffect } from "react";
import { DexList } from "../../../components/pokemon/components/DexList";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadDex } from "../../../redux/pokemon/dexActions";
import { bindActionCreators } from "redux";
import PokemonLayout from '../PokemonLayout';

const NationalDex = ({ dex, loadDex, loading }) => {
  useEffect(() => {
    loadDex('national');
  }, []);

  return (
    <PokemonLayout>
      {loading ? <Loading /> : <DexList list={dex} filters={true} national={true}/>}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ dex, apiCallsInProgress}) => {
  return {
    dex,
    loading: apiCallsInProgress > 0,
  };
}, mapDispatchToProps = (dispatch) => {
  return {
    loadDex: bindActionCreators(loadDex, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NationalDex);