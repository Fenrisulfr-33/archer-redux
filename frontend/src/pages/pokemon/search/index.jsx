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
    const { query, isReady, params } = router;
    const { move1, move2, move3, move4 } = query;
    const [moveOne, setMoveOne] = useState('');
    const [moveTwo, setMoveTwo] = useState('')    
    const [moveThree, setMoveThree] = useState('')    
    const [moveFour, setMoveFour] = useState('')    
    const onSubmitHandler = (event) => {
      event.preventDefault();
      if (moveFour !== ''){
        router.push(`/pokemon/search?move1=${moveOne}&move2=${moveTwo}&move3=${moveThree}&move4=${moveFour}`);
      } else if (moveThree !== ''){
        router.push(`/pokemon/search?move1=${moveOne}&move2=${moveTwo}&move3=${moveThree}`);
      } else if (moveTwo !== ''){
        router.push(`/pokemon/search?move1=${moveOne}&move2=${moveTwo}`);
      } else if (moveOne !== ''){
        router.push(`/pokemon/search?move1=${moveOne}`);
      }
    }

    useEffect(() => {
      if (isReady){
        if (move4){
          loadSearchResults(`?move1=${move1}&move2=${move2}&move3=${move3}&move4=${move4}`);
        } else if (move3){
          loadSearchResults(`?move1=${move1}&move2=${move2}&move3=${move3}`);
        } else if (move2){
          loadSearchResults(`?move1=${move1}&move2=${move2}`);
        } else if (move1){
          loadSearchResults(`?move1=${move1}`);
        } else {
          loadSearchResults(``);
        }
      }
    }, [isReady, query]);

  return (
    <PokemonLayout>
        <div className={'flex flex-col m-2 space-y-4'}>
        <MDXWrapper>
          <SearchPage />
        </MDXWrapper>
        <h1 className={'text-purple-400 font-mono text-center py-2'}>Search for Pokemon by Moves</h1>
            <label className={'flex flex-row space-x-2'}>
                    <button className={styles.button} disabled={true}>Move 1:</button>
                    <InputBox move={moveOne} setMove={setMoveOne}/>
            </label>
            <label className={'flex flex-row space-x-2'}>
                    <button className={styles.button} disabled={true}>Move 2:</button>
                    <InputBox move={moveTwo} setMove={setMoveTwo}/>
            </label>
            <label className={'flex flex-row space-x-2'}>
                    <button className={styles.button} disabled={true}>Move 3:</button>
                    <InputBox move={moveThree} setMove={setMoveThree}/>
            </label>
            <label className={'flex flex-row space-x-2'}>
                    <button className={styles.button} disabled={true}>Move 4:</button>
                    <InputBox move={moveFour} setMove={setMoveFour}/>
            </label>
        <button onClick={onSubmitHandler} className={styles.button}>Search</button>
        <div className={'bg-gray-500 mt-4'}>
            Pokemon Search Results
            {loading ? <Loading /> :
              <DexList 
                list={searchResults}
                game={'scarlet-violet'}
              />
            }
        </div>
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