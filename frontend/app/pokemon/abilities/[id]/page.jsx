import AbilitiesPage from "@/components/pokemon/AbilitiesPage";

const getAbility = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon/abilities/${id}`
  );
  const ability = await response.json();
  return ability;
};

export default async function Ability({ params }) {
  const ability = await getAbility(params.id);
  return <AbilitiesPage ability={ability} />;
}
