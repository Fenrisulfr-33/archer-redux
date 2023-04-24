import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadSearchResults } from "../../../redux/pokemon/searchResults/searchResultsActions";
import { bindActionCreators } from "redux";
import PokemonLayout from '../PokemonLayout';
import { InputBox } from "../../../components/pokemon/components/inputBoxes/InputBox";
import { useRouter } from "next/router";
import SearchPage from '../../../components/pokemon/mdxPages/searchPage/searchPage.mdx';
import MDXWrapper from "../../../components/MDXWrapper";
import { movesDropDownScarletViolet } from '../../../components/pokemon/components/movesDropDowns/movesDropDownScareletViolet';
import List from "../../../components/pokemon/components/List";
import { search } from "../../../components/pokemon/variables/headers";

const Box = ({ label }) => (
  <div className={'bg-gray-600 rounded-lg border-2 border-purp-300 shadow-md shadow-gray-500'}>
    <h2 className={'text-center py-1 font-mono bg-gray-800 m-2 rounded-lg text-purple-200'}>
      {label}
    </h2>
  </div> 
)

const MoveBox = ({ title, move, setMove }) => (
  <label className={'flex flex-row space-x-2'}>
    <div className={'label'} disabled={true}>{title}</div>
    <InputBox 
      value={move} 
      setValue={setMove}
      placeholder={'Enter move here'}
      list={movesDropDownScarletViolet}
      width={40}
    />
  </label>
)

const PokemonSearchResults = ({ searchResults, loadSearchResults, loading}) => {
    const router = useRouter();
    const { query, isReady } = router;
    const { move1, move2, move3, move4 } = query;
    const [moveOne, setMoveOne] = useState('');
    const [moveTwo, setMoveTwo] = useState('');   
    const [moveThree, setMoveThree] = useState('');    
    const [moveFour, setMoveFour] = useState('');    
    const onSubmitHandler = (event) => {
      event.preventDefault();
      let searchRoute = '/pokemon/search?'
      // make it so you can enter 4 moves anywhere
      const moves = [moveOne, moveTwo, moveThree, moveFour];
      const checkMoves = [];
      moves.forEach((move, index) => { move !== '' ? checkMoves.push(move) : null });
      checkMoves.forEach((move, index) => { 
        index === 0 ? 
        searchRoute += `move${index+1}=${move}` : 
        searchRoute += `&move${index+1}=${move}` 
      })
      router.push(searchRoute);
    }

    useEffect(() => {
      if (isReady){
        let loadString = '';
        move1 ? loadString += `?move1=${move1}` : '';
        move2 ? loadString += `&move2=${move2}` : '';
        move3 ? loadString += `&move3=${move3}` : '';
        move4 ? loadString += `&move4=${move4}` : '';
        loadSearchResults(loadString);
      }
    }, [isReady, query]);

  return (
    <PokemonLayout>
        <div className={'flex flex-col m-2 space-y-4'}>
          <MDXWrapper>
            <SearchPage />
          </MDXWrapper>
          <Box label={'Search for Pokemon by Moves'} />
          <MoveBox title={'Move 1:'} move={moveOne} setMove={setMoveOne} />
          <MoveBox title={'Move 2:'} move={moveTwo} setMove={setMoveTwo} />
          <MoveBox title={'Move 3:'} move={moveThree} setMove={setMoveThree} />
          <MoveBox title={'Move 4:'} move={moveFour} setMove={setMoveFour} />
          <button onClick={onSubmitHandler} className={'button'}>Search</button>
          <Box label={'Pokemon Search Results'} />
          {loading ? <Loading /> :
            <List 
            list={searchResults}
            headers={search}
            game={'scvi'}
            search={true}
            pushRoute={'scarlet-violet'}
            />
          }
        </div>
    </PokemonLayout>
  );
};

const mapStateToProps = ({ searchResults, apiCallsInProgress }) => {
  return {
    searchResults,
    loading: apiCallsInProgress > 0,
  };
}, mapDispatchToProps = (dispatch) => {
  return {
    loadSearchResults: bindActionCreators(loadSearchResults, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearchResults);