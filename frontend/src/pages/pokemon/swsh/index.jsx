import SideMenu from "../../../components/Menu/SideMenu";
import { useEffect } from "react";
/* REDUX IMPORTS */
import { connect } from "react-redux";
import { loadDex } from "../../../redux/pokemon/dexActions";
import { bindActionCreators } from "redux";
import { DexList } from "../../../components/pokemon/components/DexList";
import Loading from '../../../components/Loading';
/* STYLES */
const styles = {
  th: "py-1 px-1 text-center",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};

/* MAIN COMPONENT */
const SwShDex = ({ dex, loadDex, loading }) => {
  useEffect(() => {
    loadDex('swsh');
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col tablet:flex-row">
        <SideMenu />
        <div className='tablet:w-4/5'>
          {dex[0]?.pokedexNumber?.swsh && <DexList list={dex} filters={true} game={'swsh'}/>}
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
export default connect(mapStateToProps, mapDispatchToProps)(SwShDex);
