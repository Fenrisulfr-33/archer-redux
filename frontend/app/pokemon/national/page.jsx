import NationalDexList from "./components/nationalDexList";

const getNationalDex = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/national`);
  const nationalDex = await response.json();
  return nationalDex;
}

export default async function Page() {
  const nationalDex = await getNationalDex();

  return (
    <NationalDexList pokedex={nationalDex} />
  );
}
