import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { loadPokemon } from "../../../../redux/pokemon/pokemon/pokemonActions";
import { bindActionCreators } from "redux";
import Loading from "../../../../components/Loading";
import PokemonPage from "../../../../components/pokemon/components/pokemonPage/PokemonPage";
import PokemonLayout from "../../PokemonLayout";

const NationalInd = ({ pokemon, loading, loadPokemon }) => {
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (isReady && pokemon._id !== Number(query.id)) {
      loadPokemon(query.id);
    }
  }, [isReady, query.id]);

  return (
    <PokemonLayout>
      {loading ? (
        <Loading />
      ) : Object.keys(pokemon).length > 0 ? (
        <PokemonPage
          pokemon={pokemon}
          query={query}
          goBackRoute={"/pokemon/national"}
        />
      ) : null}
    </PokemonLayout>
  );
};

const mapStateToProps = ({ pokemon, apiCallsInProgress }) => {
    return {
      pokemon,
      loading: apiCallsInProgress > 0,
    };
  },
  mapDispatchToProps = (dispatch) => {
    return {
      loadPokemon: bindActionCreators(loadPokemon, dispatch),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(NationalInd);
