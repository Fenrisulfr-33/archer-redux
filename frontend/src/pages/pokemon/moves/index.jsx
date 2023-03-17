import { useEffect } from "react";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadMoves } from "../../../redux/pokemon/moves/movesActions";
import { bindActionCreators } from "redux";
import PokemonLayout from '../PokemonLayout';
import MovesList from "../../../components/pokemon/components/moves/MovesList";

const Moves = ({ moves, loadMoves, loading }) => {
  useEffect(() => {
    if(moves.length === 0){
      loadMoves();
    }
  }, []);

  return (
    <PokemonLayout>
      {loading ?<Loading/> : <MovesList list={moves} />}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ moves, apiCallsInProgress}) => {
    return {
        moves: moves.list,
        loading: apiCallsInProgress > 0,
    };
}, mapDispatchToProps = (dispatch) => {
    return {
        loadMoves: bindActionCreators(loadMoves, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Moves);