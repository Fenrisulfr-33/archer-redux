import SideMenu from "../../components/Menu/SideMenu";
import PokemonSideMenu from "../../components/pokemon/components/PokemonSideMenu";

export default function PokemonLayout({children}){
  return (
      <div className="flex flex-col tablet:flex-row">
          <div className='tablet:w-1/5'>
            {/* <SideMenu /> */}
            <PokemonSideMenu />
          </div>
          <div className='tablet:w-4/5'>
            {children}
          </div>
      </div>
  );
};