import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { loadScViDex } from "../../../../redux/pokemon//dexes/dexActions";
import { bindActionCreators } from "redux";
import { DexList } from "../../../../components/pokemon/components/DexList";
import Loading from "../../../../components/Loading";
import PokemonLayout from "../../PokemonLayout";

const ScViDex = ({ dex, loadScViDex, loading }) => {
  const router = useRouter();
  const { query, isReady } = router;

  let searchRoute = "/pokemon/scarlet-violet/pokedex";
  // Filter params
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [sort, setSort] = useState("");
  const [stat, setStat] = useState("");

  useEffect(() => {
    if (dex.length === 0) {
      loadScViDex("scarlet-violet", '');
    }
  }, [isReady, query]);

  return (
    <PokemonLayout>
      {loading ? (
        <Loading />
      ) : (
        <DexList
          list={dex}
          filters={true}
          game={"scvi"}
          pushRoute={"scarlet-violet"}
        />
      )}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ dexes: { scarlet_violet }, apiCallsInProgress }) => {
    return {
      dex: scarlet_violet,
      loading: apiCallsInProgress > 0,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loadScViDex: bindActionCreators(loadScViDex, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ScViDex);
