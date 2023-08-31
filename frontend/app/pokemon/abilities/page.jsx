import AllAbilitiesList from "@/components/pokemon/AbilitiesList";

const getAbilities = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/abilities`);
  const abilities = response.json();
  return abilities;
}

export default async function AbilitiesPage() {
  const abilities = await getAbilities();
  return (
      <AllAbilitiesList list={abilities} />
  );
}