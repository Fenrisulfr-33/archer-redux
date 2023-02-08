import { useEffect, useState } from "react";
import { DexList } from "../../../components/pokemon/components/DexList";
import Loading from "../../../components/Loading";
import { connect } from "react-redux";
import { loadSearchResults } from "../../../redux/pokemon/searchResults/searchResultsActions";
import { bindActionCreators } from "redux";
import PokemonLayout from '../PokemonLayout';
import { InputBox } from "../../../components/pokemon/components/inputBoxes/InputBox";
import { useRouter } from "next/router";
import SearchPage from '../../../components/pokemon/mdxPages/searchPage/searchPage.mdx';
import MDXWrapper from "../../../components/MDXWrapper";

const styles = {
  button: 'text-purple-400 bg-gray-600 rounded-md px-2 font-mono',
}

const PokemonSearchResults = ({ searchResults, loadSearchResults, loading}) => {
    const router = useRouter();
    const { query, isReady } = router;
    const { move1, move2, move3, move4 } = query;
    const [moveOne, setMoveOne] = useState('');
    const [moveTwo, setMoveTwo] = useState('')    
    const [moveThree, setMoveThree] = useState('')    
    const [moveFour, setMoveFour] = useState('')    
    const onSubmitHandler = (event) => {
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
      event.preventDefault();
      router.push(searchRoute);
    }

    useEffect(() => {
      if (isReady){
        let loadString = '';
        move1 ? loadString += `?move1=${move1}` : '';
        move2 ? loadString += `&move2=${move2}` : '';
        move3 ? loadString += `?move1=${move3}` : '';
        move4 ? loadString += `&move2=${move4}` : '';
        loadSearchResults(loadString);
      }
    }, [isReady, query]);

  return (
    <PokemonLayout>
        <div className={'flex flex-col m-2 space-y-4'}>
        <MDXWrapper>
          <SearchPage />
        </MDXWrapper>
        <div className={'bg-gray-600 rounded-lg'}>
          <h1 className={'text-center py-1 font-mono bg-gray-800 m-2 rounded-lg text-purp-200'}>
            Search for Pokemon by Moves
          </h1>
        </div>   
            <label className={'flex flex-row space-x-2'}>
                    <button className={'test-label'} disabled={true}>Move 1:</button>
                    <InputBox move={moveOne} setMove={setMoveOne}/>
            </label>
            <label className={'flex flex-row space-x-2'}>
                    <button className={'test-label'} disabled={true}>Move 2:</button>
                    <InputBox move={moveTwo} setMove={setMoveTwo}/>
            </label>
            <label className={'flex flex-row space-x-2'}>
                    <button className={'test-label'} disabled={true}>Move 3:</button>
                    <InputBox move={moveThree} setMove={setMoveThree}/>
            </label>
            <label className={'flex flex-row space-x-2'}>
                    <button className={'test-label'} disabled={true}>Move 4:</button>
                    <InputBox move={moveFour} setMove={setMoveFour}/>
            </label>
        <button onClick={onSubmitHandler} className={'test-button'}>Search</button>
          <div className={'bg-gray-600 rounded-lg'}>
            <h2 className={'text-center font-mono bg-gray-800 m-2 py-2 rounded-lg text-purp-200'}>
              Pokemon Search Results
            </h2>
          </div>
            {loading ? <Loading /> :
              <DexList 
                list={searchResults}
                game={'scarlet-violet'}
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