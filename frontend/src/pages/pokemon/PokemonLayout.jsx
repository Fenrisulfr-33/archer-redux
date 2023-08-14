import PokemonSideMenu from "../../components/pokemon/sideMenu/PokemonSideMenu";

export default function PokemonLayout({ children }) {
  return (
    <div className="flex flex-col laptop:flex-row w-">
      <div className="laptop:w-1/5">
        <PokemonSideMenu />
      </div>
      <div className="laptop:w-4/5">{children}</div>
    </div>
  );
}
