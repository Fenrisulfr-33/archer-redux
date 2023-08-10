import { Suspense } from "react";
import PokemonSideMenu from "../sideMenu/PokemonSideMenu";

export default function PokemonLayout({ children }) {
  return (
    <div className="flex flex-col laptop:flex-row">
      <div className="laptop:w-1/5">
        <PokemonSideMenu />
      </div>
      <div className="laptop:w-4/5">
        <Suspense fallback={<p>Loading....</p>}>{children}</Suspense>
      </div>
    </div>
  );
}
