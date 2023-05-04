import { useEffect } from "react";
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAbility } from "../../../redux/pokemon/abilities/abilitiesActions";
import AbilityPage from "../../../components/pokemon/components/abilities/AbilityPage";
import { PokemonPage } from "../../../components/pokemon/components/layout/PokemonPage";

const AbilityInd = ({ ability, loading, loadAbility }) => {
    const { query, isReady } = useRouter();

    useEffect(() => {
        if(isReady && ability._id !== Number(query.id)){
            loadAbility(query.id)
        }
    }, [isReady, query.id,]);

    return (
          <PokemonPage 
                loading={loading}
                content={<AbilityPage ability={ability}/>}
          />
    )
}

const mapStateToProps = (state) => {
    const { abilities, apiCallsInProgress } = state;
    return {
        ability: abilities.ability,
        loading: apiCallsInProgress > 0,
    }
}, mapDispatchToProps = (dispatch) => {
    return {
        loadAbility: bindActionCreators(loadAbility, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AbilityInd);