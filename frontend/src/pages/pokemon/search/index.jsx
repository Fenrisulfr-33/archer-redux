import { useState } from "react";
import PokemonLayout from "@/components/pokemon/PokemonLayout";
import { InputBox } from "../../../components/pokemon/inputBoxes/InputBox";
import { useRouter } from "next/router";
import SearchPage from "@/articles/pokemon/search/search-page.mdx";
import { movesDropDownScarletViolet } from "../../../components/pokemon/movesDropDowns/movesDropDownScareletViolet";
import PokedexList from "@/components/pokemon/PokedexList";
import { search } from "@/components/pokemon/variables/pokemonHeaders";
import { createSearchQuery } from "@/helperFunctions/createSearchQuery";

const Box = ({ label }) => (
  <div
    className={
      "bg-gray-600 rounded-lg border-2 border-purp-300 shadow-md shadow-gray-500"
    }
  >
    <h2
      className={
        "text-center py-1 font-mono bg-gray-800 m-2 rounded-lg text-purple-200"
      }
    >
      {label}
    </h2>
  </div>
);

const MoveBox = ({ title, move, setMove }) => (
  <label className={"flex flex-row space-x-2"}>
    <div className={"label"} disabled={true}>
      {title}
    </div>
    <InputBox
      value={move}
      setValue={setMove}
      placeholder={"Enter move here"}
      list={movesDropDownScarletViolet}
      width={40}
    />
  </label>
);

export default function PokemonSearchResults({ searchResults }) {
  const router = useRouter();
  const [moveOne, setMoveOne] = useState("");
  const [moveTwo, setMoveTwo] = useState("");
  const [moveThree, setMoveThree] = useState("");
  const [moveFour, setMoveFour] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let searchRoute = "/pokemon/search?";
    // make it so you can enter 4 moves anywhere
    const moves = [moveOne, moveTwo, moveThree, moveFour];
    const checkMoves = [];
    moves.forEach((move, index) => {
      move !== "" ? checkMoves.push(move) : null;
    });
    checkMoves.forEach((move, index) => {
      index === 0
        ? (searchRoute += `move${index + 1}=${move}`)
        : (searchRoute += `&move${index + 1}=${move}`);
    });
    router.replace(searchRoute);
  };

  return (
    <PokemonLayout>
      <div className={"flex flex-col m-2 space-y-4"}>
        <div className={`article-container`}>
          <SearchPage />
        </div>
        <Box label={"Search for Pokemon by Moves"} />
        <MoveBox title={"Move 1:"} move={moveOne} setMove={setMoveOne} />
        <MoveBox title={"Move 2:"} move={moveTwo} setMove={setMoveTwo} />
        <MoveBox title={"Move 3:"} move={moveThree} setMove={setMoveThree} />
        <MoveBox title={"Move 4:"} move={moveFour} setMove={setMoveFour} />
        <button onClick={onSubmitHandler} className={"button"}>
          Search
        </button>
        <Box label={"Pokemon Search Results"} />
        <PokedexList
          list={searchResults}
          headers={search}
          game={"scarlet-violet"}
          search={true}
          pushRoute={"scarlet-violet"}
        />
      </div>
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  if (Object.keys(query).length > 0) {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/pokemon/search${createSearchQuery(
        query
      )}`
    );
    const searchResults = await response.json();
    return { props: { searchResults, query } };
  } else {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/pokemon/search`
    );
    const searchResults = await response.json();
    return { props: { searchResults, query } };
  }
};
