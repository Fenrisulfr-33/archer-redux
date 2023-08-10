import PokemonLayout from "../PokemonLayout";
import List from "../../../components/pokemon/pokedex/List";
import { createSearchQuery } from "../../../helperFunctions/helperFunctions";

export default function NationalDex({ national }) {
  return (
    <PokemonLayout>
      <List
        list={national}
        pushRoute={""}
        headers={"national"}
        searchRoute={"/pokemon/national"}
      />
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  if (Object.keys(query).length > 0) {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/pokemon/national${createSearchQuery(
        query
      )}`
    );
    const national = await response.json();
    return { props: { national, query } };
  } else {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/pokemon/national`
    );
    const national = await response.json();
    return { props: { national, query } };
  }
};
