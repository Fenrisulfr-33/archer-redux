import SideMenu from "../../components/Menu/SideMenu";

export default function PokemonLayout({children}){
  return (
      <div className="flex flex-col tablet:flex-row">
          <SideMenu />
          <div className='tablet:w-4/5'>
            {children}
          </div>
      </div>
  );
};