import SideMenu from "../../../components/Menu/SideMenu";
import { useEffect } from "react";
import { DexList } from "../../../components/pokemon/components/DexList";
import Loading from "../../../components/Loading";
/* REDUX IMPORTS */
import { connect } from "react-redux";
import { loadDex } from "../../../redux/pokemon/dexActions";
import { bindActionCreators } from "redux";
/* MAIN COMPONENT */
const NationalDex = ({ dex, loadDex, loading }) => {
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

const mapStateToProps = ({ dex, apiCallsInProgress}) => {
    return {
      dex,
      loading: apiCallsInProgress > 0,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loadDex: bindActionCreators(loadDex, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(NationalDex);