import { search } from "@/app/components/variables/pokemonHeaders";
import PokedexList from "@/components/pokemon/PokedexList";
import { createSearchQuery } from "@/helperFunctions/createSearchQuery";

const getPokedex = async (game, searchParams) => {
    if (Object.keys(searchParams).length > 0) {
        const searchQuery = createSearchQuery(searchParams);
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/pokemon/${game}/pokedex${searchQuery}`
        );
        const pokedex = await response.json();
        return pokedex;
    } else {
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/pokemon/${game}/pokedex`
        );
        const pokedex = await response.json();
        return pokedex;
    }
};

export default async function Page({ params, searchParams }) {
    const pokedex = await getPokedex(params.game, searchParams);

    return (
        <PokedexList
            list={pokedex}
            pushRoute={params.game}
            national={false}
            game={params.game}
            searchRoute={`/pokemon/${params.game}/pokedex`}
        />
    );
}
