import { useEffect } from "react";
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { loadMove } from "../../../redux/pokemon/moves/movesActions";
import { bindActionCreators } from 'redux';
import Loading from "../../../components/Loading";
import PokemonLayout from "../PokemonLayout";
import MovePage from "../../../components/pokemon/components/moves/MovePage";

const MoveInd = ({ move, loading, loadMove }) => {
    const { query, isReady } = useRouter();

    useEffect(() => {
        if(isReady && move._id !== Number(query.id)){
            loadMove(query.id)
        }
    }, [isReady, query.id,]);

    return (
        <PokemonLayout>
            {loading ? (
              <Loading />
            ) : Object.keys(move).length > 0 ? (
              <MovePage move={move}/>
            ) : null}
          </PokemonLayout>
    )
}

const mapStateToProps = (state) => {
    const { moves, apiCallsInProgress } = state;
    return {
        move: moves.move,
        loading: apiCallsInProgress > 0,
    }
}, mapDispatchToProps = (dispatch) => {
    return {
        loadMove: bindActionCreators(loadMove, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MoveInd);