import PokemonSideMenu from "@/components/pokemon/PokemonSideMenu";

export default function PokemonLayout({ children }) {
  return (
    <div className="flex flex-col">
      <div className="bg-purple-300 p-1 m-2">
        Search ...
      </div>
    <div className="flex flex-col tablet:flex-row">
      <div className="tablet:w-1/5">
        <PokemonSideMenu />
      </div>
      <div className="tablet:w-4/5">{children}</div>
    </div>
    </div>
  );
}
