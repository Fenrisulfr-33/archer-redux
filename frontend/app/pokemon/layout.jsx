import PokemonMenu from "@/components/pokemon/PokemonMenu";

export default async function PokemonLayout({ children }) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon`
  );
  const searchList = await response.json();
  return (
    <div className="flex flex-col tablet:flex-row">
      <PokemonMenu searchList={searchList} />
      <div className="tablet:w-4/5">{children}</div>
    </div>
  );
}
