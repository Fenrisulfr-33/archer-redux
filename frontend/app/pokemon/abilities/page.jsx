import AbilitiesList from "./components/AbilitiesList";

const getAbilities = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/abilities`);
  const abilities = response.json();
  return abilities;
}

export default async function AbilitiesPage() {
  const abilities = await getAbilities();
  return (
      <AbilitiesList list={abilities} />
  );
}