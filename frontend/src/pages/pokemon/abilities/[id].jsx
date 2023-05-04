import { useEffect } from "react";
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { loadAbility } from "../../../redux/pokemon/abilities/abilitiesActions";
import { bindActionCreators } from 'redux';
import Loading from "../../../components/Loading";
import PokemonLayout from "../PokemonLayout";
import AbilityPage from "../../../components/pokemon/components/abilities/AbilityPage";

const AbilityInd = ({ ability, loading, loadAbility }) => {
    const { query, isReady } = useRouter();

    useEffect(() => {
        if(isReady && ability._id !== Number(query.id)){
            loadAbility(query.id)
        }
    }, [isReady, query.id,]);

    return (
            <PokemonLayout>
            {loading ? (
              <Loading />
            ) : Object.keys(ability).length > 0 ? (
              <AbilityPage ability={ability}/>
            ) : null}
          </PokemonLayout>
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