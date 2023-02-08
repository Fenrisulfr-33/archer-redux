import { useEffect } from "react";
import { AllMovesList } from "../../../components/pokemon/components/AllMovesList";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadMoves } from "../../../redux/pokemon/moves/movesActions";
import { bindActionCreators } from "redux";
import PokemonLayout from '../PokemonLayout';

const MovesList = ({ moves, loadMoves, loading }) => {
  useEffect(() => {
    if(moves.length === 0){
      loadMoves();
    }
  }, []);

  return (
    <PokemonLayout>
      {loading ?<Loading/> : <AllMovesList list={moves} />}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ moves, apiCallsInProgress}) => {
    return {
        moves,
        loading: apiCallsInProgress > 0,
    };
}, mapDispatchToProps = (dispatch) => {
    return {
        loadMoves: bindActionCreators(loadMoves, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovesList);