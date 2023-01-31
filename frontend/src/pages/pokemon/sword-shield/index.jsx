import { useEffect } from "react";
import { connect } from "react-redux";
import { loadDex } from "../../../redux/pokemon/dexActions";
import { bindActionCreators } from "redux";
import { DexList } from "../../../components/pokemon/components/DexList";
import Loading from '../../../components/Loading';
import PokemonLayout from "../PokemonLayout";

const SwShDex = ({ dex, loadDex, loading }) => {
  useEffect(() => {
    loadDex('sword-shield');
  }, []);

  return (
    <PokemonLayout>
      {loading ? <Loading /> : dex[0]?.pokedexNumber?.swsh && <DexList list={dex} filters={true} game={'swsh'}/>}
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
export default connect(mapStateToProps, mapDispatchToProps)(SwShDex);