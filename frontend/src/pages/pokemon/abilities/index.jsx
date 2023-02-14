import { useEffect } from "react";
import AllAbilitiesList from "../../../components/pokemon/components/abilities/AllAbilitiesList";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadAbilities } from "../../../redux/pokemon/abilities/abilitiesActions";
import { bindActionCreators } from "redux";
import PokemonLayout from '../PokemonLayout';

const AbilitiesList = ({ abilities, loadAbilities, loading }) => {
  useEffect(() => {
    if(abilities.length === 0){
      loadAbilities();
    }
  }, []);

  return (
    <PokemonLayout>
      {loading ?<Loading/> : <AllAbilitiesList list={abilities} />}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ abilities, apiCallsInProgress}) => {
    return {
        abilities: abilities.list,
        loading: apiCallsInProgress > 0,
    };
}, mapDispatchToProps = (dispatch) => {
    return {
        loadAbilities: bindActionCreators(loadAbilities, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AbilitiesList);