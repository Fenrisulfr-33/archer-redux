"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import PokemonTabs from "./PokemonTabs";
import PokemonSearchBar from "./PokemonSearchBar";

const dataMenu = [
  { title: "National Dex", route: "/pokemon/national" },
  { title: "Moves", route: "/pokemon/moves" },
  { title: "Abilities", route: "/pokemon/abilities" },
  { title: "Move Search", route: "/pokemon/search" },
];
const mechanicsMenu = [
  { title: "Type Chart", route: "/pokemon/articles/type-chart" },
  { title: "Natures", route: "/pokemon/articles/natures" },
  { title: "EVs", route: "/pokemon/articles/effort-values" },
  { title: "IVs", route: "/pokemon/articles/individual-values" },
  { title: "Breeding", route: "/pokemon/articles/breeding" },
];
const genNineMenu = [
  { title: "The Indigo Disk Dex.", route: "/pokemon/the-indigo-disk/pokedex" },
  { title: "The Teal Mask Dex.", route: "/pokemon/the-teal-mask/pokedex" },
  { title: "Scarlet & Violet Dex.", route: "/pokemon/scarlet-violet/pokedex" },
  {
    title: "Terra Raid Events",
    route: "/pokemon/scarlet-violet/articles/terra-raid-events",
  },
  { title: "Regionals", route: "/pokemon/scarlet-violet/articles/regionals" },
];
const genEightMenu = [
  { title: "Crown Tundra Dex.", route: "/pokemon/crown-tundra/pokedex" },
  { title: "Isle of Armor Dex.", route: "/pokemon/isle-of-armor/pokedex" },
  { title: "Sword & Shield Dex.", route: "/pokemon/sword-shield/pokedex" },
  { title: "Let's Go Pikachu & Eevee Dex.", route: "/pokemon/lets-go-pikachu-eevee/pokedex" },
];
const genSevenMenu = [
  { title: "Ultra Sun & Ultra Moon Ulaula Dex.", route: "/pokemon/ultra-sun-ultra-moon-ulaula/pokedex" },
  { title: "Ultra Sun & Ultra Moon Poni Dex.", route: "/pokemon/ultra-sun-ultra-moon-poni/pokedex" },
  { title: "Ultra Sun & Ultra Moon Melemele Dex.", route: "/pokemon/ultra-sun-ultra-moon-melemele/pokedex" },
  { title: "Ultra Sun & Ultra Moon Akala Dex.", route: "/pokemon/ultra-sun-ultra-moon-akala/pokedex" },
  { title: "Ultra Sun & Ultra Moon Dex.", route: "/pokemon/ultra-sun-ultra-moon/pokedex" },
  { title: "Sun & Moon Ulaula Dex.", route: "/pokemon/sun-moon-ulaula/pokedex" },
  { title: "Sun & Moon Poni Dex.", route: "/pokemon/sun-moon-poni/pokedex" },
  { title: "Sun & Moon Melemele Dex.", route: "/pokemon/sun-moon-melemele/pokedex" },
  { title: "Sun & Moon Akala Dex.", route: "/pokemon/sun-moon-akala/pokedex" },
  { title: "Sun & Moon Dex.", route: "/pokemon/sun-moon/pokedex" },
];
const genSixMenu = [
  { title: "Omega Ruby & Alpha Sapphire Dex.", route: "/pokemon/omega-ruby-alpha-sapphire/pokedex" },
  { title: "X & Y Mountain Dex.", route: "/pokemon/x-y-mountain/pokedex" },
  { title: "X & Y Coastal Dex.", route: "/pokemon/x-y-coastal/pokedex" },
  { title: "X & Y Central Dex.", route: "/pokemon/x-y-central/pokedex" },
];
const genFiveMenu = [
  { title: "Black 2 & White 2 Dex.", route: "/pokemon/black-2-white-2/pokedex" },
  { title: "Black & White Dex.", route: "/pokemon/black-white/pokedex" },
]
const genFourMenu = [
  { title: "Heartgold & Soulsilver Dex.", route: "/pokemon/heartgold-soulsilver/pokedex" },
  { title: "Platinum Dex.", route: "/pokemon/platinum/pokedex" },
  { title: "Diamond & Pearl Dex.", route: "/pokemon/diamond-pearl/pokedex" },
];
const genThreeMenu = [
  { title: "FireRed & LeafGreen Dex.", route: "/pokemon/firered-leafgreen/pokedex" },
  { title: "Emerald Dex.", route: "/pokemon/emerald/pokedex" },
  { title: "Ruby & Sapphire Dex.", route: "/pokemon/ruby-sapphire/pokedex" },
];
const genTwoMenu = [
  { title: "Crystal Dex.", route: "/pokemon/crystal/pokedex" },
  { title: "Gold & Silver Dex.", route: "/pokemon/gold-silver/pokedex" },
];
const genOneMenu = [
  { title: "Yellow Dex.", route: "/pokemon/yellow/pokedex" },
  { title: "Red & Blue Dex.", route: "/pokemon/red-blue/pokedex" },
];
const menus = [
  { title: "Data", list: dataMenu },
  { title: "Mechanics", list: mechanicsMenu },
  { title: "Gen. 9", list: genNineMenu },
  { title: "Gen. 8", list: genEightMenu },
  { title: "Gen. 7", list: genSevenMenu },
  { title: "Gen. 6", list: genSixMenu },
  { title: "Gen. 5", list: genFiveMenu },
  { title: "Gen. 4", list: genFourMenu },
  { title: "Gen. 3", list: genThreeMenu },
  { title: "Gen. 2", list: genTwoMenu },
  { title: "Gen. 1", list: genOneMenu },
];

const SideBarIcon = ({ text, route }) => {
  return (
    <Link href={route} scroll={false} passHref>
      <button className="bg-purple-500 text-gray-100 py-0.5 px-2 rounded transition ease-in-out hover:translate-x-4 hover:bg-purple-100 hover:font-bold duration-300">
        {text}
      </button>
    </Link>
  );
};

export default function PokemonMenu({ searchList }) {
  const router = useRouter();
  const onSubmit = (event) => {
    router.push(`/pokemon/${event.route}`);
  };

  return (
    <div>
      <div className={"flex flex-col tablet:hidden"}>
        <PokemonSearchBar
          setSelected={onSubmit}
          list={searchList}
          placeholder={"Search"}
        />
        <PokemonTabs />
      </div>
      <div className="hidden tablet:flex flex-col ">
        <PokemonSearchBar
          setSelected={onSubmit}
          list={searchList}
          placeholder={"Search"}
        />
        <div className="font-mono space-y-2 text-sm text-left m-2 rounded-xl ">
          <SideBarIcon route={"/pokemon"} text={"Pokemon Home"} />
          {menus.map((menuItem) => (
            <div
              key={menuItem.title}
              className=" space-y-2 pb-2 border-b border-purple-100"
            >
              <div className="text-gray-100 font-bold py-1 px-2">
                {menuItem.title}
              </div>
              <div className={"flex flex-col space-y-1"}>
                {menuItem.list.map((page, index) => (
                  <SideBarIcon
                    key={index}
                    route={page.route}
                    text={page.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
