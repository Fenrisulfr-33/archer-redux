import NationalDexList from "./components/nationalDexList";
import { createSearchQuery } from "@/helperFunctions/createSearchQuery";

const getNationalDex = async (searchParams) => {
  if (Object.keys(searchParams).length > 0){
    const searchQuery = createSearchQuery(searchParams)
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/national${searchQuery}`);
    const nationalDex = await response.json();
    return nationalDex;
  } else {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/national`);
    const nationalDex = await response.json();
    return nationalDex;
  }

}

export default async function Page({ params, searchParams }) {
  const nationalDex = await getNationalDex(searchParams);

  return (
    <NationalDexList pokedex={nationalDex} />
  );
}
