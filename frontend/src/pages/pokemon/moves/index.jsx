import SideMenu from "../../../components/Menu/SideMenu";
import { useEffect } from "react";
import { DexList } from "../../../components/pokemon/components/DexList";
import Loading from "../../../components/Loading";
/* REDUX IMPORTS */
import { connect } from "react-redux";
import { loadMoves } from "../../../redux/pokemon/movesActions";
import { bindActionCreators } from "redux";
/* MAIN COMPONENT */
const NationalDex = ({ moves, loadMoves, loading }) => {
  useEffect(() => {
    loadDex('national');
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col tablet:flex-row">
          <SideMenu />
          <div className='tablet:w-4/5'>
            <DexList list={dex} filters={true} national={true}/>
          </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ moves, apiCallsInProgress}) => {
    return {
        moves,
        loading: apiCallsInProgress > 0,
    };
}, mapDispatchToProps = (dispatch) => {
    return {
        loadDex: bindActionCreators(loadMoves, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NationalDex);