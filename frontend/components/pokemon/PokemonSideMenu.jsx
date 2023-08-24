import Link from "next/link";
import PokemonTabs from './PokemonTabs';

const dataMenu = [
    {title:'National Dex',route:'/pokemon/national'},
    {title:'Moves',route:'/pokemon/moves'},
    {title:'Abilities',route:'/pokemon/abilities'},
    {title:'Move Search',route:'/pokemon/search'},
];
const mechanicsMenu = [
    {title:'Type Chart',route:'/pokemon/articles/type-chart'},
    {title: 'Natures', route: '/pokemon/articles/natures'},
    {title:'EVs',route:'/pokemon/articles/effort-values'},
    {title:'IVs',route:'/pokemon/articles/individual-values'},
    {title:'Breeding',route:'/pokemon/articles/breeding'},
];
const genNineMenu = [
    {title:'Scarlet & Violet Dex.',route:'/pokemon/scarlet-violet/pokedex'},
    {title:'Terra Raid Events',route:'/pokemon/scarlet-violet/articles/terra-raid-events'},
    {title:'Regionals',route:'/pokemon/scarlet-violet/articles/regionals'},
];
const genEightMenu = [
    {title:'Sword & Shield Dex.',route:'/pokemon/sword-shield/pokedex'},
    {title:'Isle of Armor Dex.',route:'/pokemon/isle-of-armor/pokedex'},
    {title:'Crown Tundra Dex.',route:'/pokemon/crown-tundra/pokedex'},
];
const genTwoMenu = [
    {title:'Crystal Dex.',route:'/pokemon/crystal/pokedex'},
    {title:'Gold & Silver Dex.',route:'/pokemon/gold-silver/pokedex'},
];
const genOneMenu = [
    {title:'Yellow Dex.',route:'/pokemon/yellow/pokedex'},
    {title:'Red & Blue Dex.',route:'/pokemon/red-blue/pokedex'},
];
const menus = [
  { title: 'Data', list: dataMenu },
  { title: 'Mechanics', list: mechanicsMenu },
  { title: 'Gen. 9', list: genNineMenu },
  { title: 'Gen. 8', list: genEightMenu },
  { title: 'Gen. 2', list: genTwoMenu },
  { title: 'Gen. 1', list: genOneMenu },
]

const SideBarIcon = ({ text, route }) => {
  return (
    <Link href={route} passHref>
      <button className="bg-purple-500 text-gray-100 py-0.5 px-3 rounded transition ease-in-out hover:translate-x-4 hover:bg-purple-100 hover:font-bold duration-300">{text}</button>
    </Link>
  );
};

export default function PokemonSideMenu() {
  return (
    <div>
      <div className={"tablet:hidden"}>
        <PokemonTabs />
      </div>
      <div className="hidden tablet:visible tablet:flex flex-col font-mono space-y-2 p-2 text-left text-lg border bg-gray-700 m-2 rounded-xl border-purple-400">
        <SideBarIcon route={"/pokemon"} text={"Pokemon Home"} />
        {menus.map((menuItem) => (
          <div className=" space-y-2 pb-2 border-b border-purple-100">
            <div className="bg-gray-900 text-gray-100 font-bold py-1 px-2 rounded w-fit">{menuItem.title}</div>
            <div className={"pl-4  flex flex-col space-y-1"}>
              {menuItem.list.map((page, index) => (
                <SideBarIcon key={index} route={page.route} text={page.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}