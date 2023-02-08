import { useEffect } from "react";
import { DexList } from "../../../components/pokemon/components/DexList";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadNationalDex } from "../../../redux/pokemon/dexes/dexActions";
import { bindActionCreators } from "redux";
import PokemonLayout from '../PokemonLayout';

const NationalDex = ({ dex, loadNationalDex, loading }) => {
  useEffect(() => {
    if (dex.length === 0){
      loadNationalDex();
    }
  }, []);

  return (
    <PokemonLayout>
      {loading ? <Loading /> : <DexList list={dex} filters={true} national={true}/>}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ dexes:{national}, apiCallsInProgress}) => {
  return {
    dex: national,
    loading: apiCallsInProgress > 0,
  };
}, mapDispatchToProps = (dispatch) => {
  return {
    loadNationalDex: bindActionCreators(loadNationalDex, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NationalDex);