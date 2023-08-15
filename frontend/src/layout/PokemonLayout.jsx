import PokemonSideMenu from "./PokemonSideMenu";

export default function PokemonLayout({ children }) {
  return (
    <div className="flex flex-col phone:flex-row">
      <div className="phone:w-1/5">
        <PokemonSideMenu />
      </div>
      <div className="phone:w-4/5">{children}</div>
    </div>
  );
}
