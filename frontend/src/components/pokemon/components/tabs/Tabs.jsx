import { useState } from "react"
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const DropDownButton = ({ title, handler }) => (
    <button className={'flex flex-row label border-2 border-gray-800'}
    onClick={handler}>
        {title}
        <BsChevronDown className="justify-end pt-2 pl-2 text-gray-900 h-5 w-5"/>
    </button>
);

const DropDownMenu = ({ list }) => (
    <div className="absolute mt-1 bg-gray-500 border-2 border-gray-800 rounded-lg">
        <div className={'flex flex-col p-2 space-y-2'}>
            {list.map((item) => (<Link href={item.route} passHref>
                <button className={'button'}>
                    {item.title}
                </button>
            </Link>))}
        </div>
    </div>
)

const dataMenu = [
    {title:'National Dex',route:'/pokemon/national'},
    {title:'Moves',route:'/pokemon/moves'},
    {title:'Abilities',route:'/pokemon/abilities'},
    {title:'Move Search',route:'/pokemon/search'},
];
const mechanicsMenu = [
    {title:'Type Chart',route:'/pokemon/typechart'},
    {title:'EVs',route:'/pokemon/effort-values'},
    {title:'IVs',route:'/pokemon/individual-values'},
    {title:'Breeding',route:'/pokemon/breeding'},
];
const scarletVioletMenu = [
    {title:'Pokedex',route:'/pokemon/scarlet-violet/pokedex'},
    {title:'Terra Raid Events',route:'/pokemon/scarlet-violet/articles/terra-raid-events'},
    {title:'Regionals',route:'/pokemon/scarlet-violet/articles/regionals'},
];
const swordShieldtMenu = [
    {title:'Pokedex',route:'/pokemon/sword-shield/pokedex'},
    {title:'Isle of Armor Dex.',route:'/pokemon/isle-of-armor/pokedex'},
];

export default function Tabs(){
    const [menuOne, setMenuOne] = useState(false);
    const [menuTwo, setMenuTwo] = useState(false);
    const [menuThree, setMenuThree] = useState(false);
    const [menuFour, setMenuFour] = useState(false);
    const handleMenuOne = () => {
        if (menuTwo) setMenuTwo(false);
        if (menuThree) setMenuThree(false);
        if (menuFour) setMenuFour(false);
        setMenuOne(!menuOne);
    }
    const handleMenuTwo = () => {
        if (menuOne) setMenuOne(false);
        if (menuThree) setMenuThree(false);
        if (menuFour) setMenuFour(false);
        setMenuTwo(!menuTwo);
    }
    const handleMenuThree = () => {
        if (menuOne) setMenuOne(false);
        if (menuTwo) setMenuTwo(false);
        if (menuFour) setMenuFour(false);
        setMenuThree(!menuThree);
    }
    const handleMenuFour = () => {
        if (menuOne) setMenuOne(false);
        if (menuTwo) setMenuTwo(false);
        if (menuThree) setMenuThree(false);
        setMenuFour(!menuFour);
    }

    return (
        <div className={'bg-gray-600 m-2 rounded-lg border-2 border-purp-100'}>
            <div className={'flex flex-row p-2 space-x-2 overflow-auto scrollbar-hide'}>
                <Link href={'/pokemon'} passHref>
                    <button className={'button border-2 border-gray-800 shadow-sm shadow-purp-100'}>
                        Home
                    </button>
                </Link>
                <div>
                    <DropDownButton title={'Data'} handler={handleMenuOne} />
                    {menuOne ? (<DropDownMenu list={dataMenu}/>) : null}
                </div>
                <div>
                    <DropDownButton title={'Mechanics'} handler={handleMenuTwo} />
                    {menuTwo ? (<DropDownMenu list={mechanicsMenu}/>) : null}
                </div>
                <div>
                    <DropDownButton title={'Scarlet & Violet'} handler={handleMenuThree} />
                    {menuThree ? (<DropDownMenu list={scarletVioletMenu}/>) : null}
                </div>
                <div>
                    <DropDownButton title={'Sword & Shield'} handler={handleMenuFour} />
                    {menuFour ? (<DropDownMenu list={swordShieldtMenu}/>) : null}
                </div>
            </div>
        </div>
    )
}