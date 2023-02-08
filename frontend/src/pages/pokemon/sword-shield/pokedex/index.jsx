import { useEffect } from "react";
import { connect } from "react-redux";
import { loadSwShDex } from "../../../../redux/pokemon//dexes/dexActions";
import { bindActionCreators } from "redux";
import { DexList } from "../../../../components/pokemon/components/DexList";
import Loading from '../../../../components/Loading';
import PokemonLayout from "../../PokemonLayout";

const SwShDex = ({ dex, loadSwShDex, loading }) => {
  useEffect(() => {
    if(dex.length === 0){
      loadSwShDex('sword-shield');
    }
  }, []);

  return (
    <PokemonLayout>
      {loading ? <Loading /> : dex[0]?.pokedexNumber?.swsh && <DexList list={dex} filters={true} game={'swsh'}/>}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ dexes:{sword_shield}, apiCallsInProgress }) => {
  return {
    dex: sword_shield,
    loading: apiCallsInProgress > 0,
  };
}, mapDispatchToProps = (dispatch) => {
  return {
    loadSwShDex: bindActionCreators(loadSwShDex, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SwShDex);