import GameDropDown from "./GameDropDown";
import { NavBarIcon } from '../../Menu/NavBarIcon';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { SiPokemon } from 'react-icons/si';

export const PokemonIndToolbar = ({id, game, gameDropDown}) => (
    <div id='toolbar' className='col-span-1 tablet:col-span-2 flex flex-row items-center justify-between'>
        {id - 1 > 0 ? 
        <NavBarIcon 
            icon={<BsFillArrowLeftSquareFill size='20' />}
            text={id - 1}
            route={`/pokemon/national/${id - 1}/${game}`}
        /> : <SiPokemon size='50' />}
        <GameDropDown 
            route={`/pokemon/national/${id}`}
            input={game}
            gameDropDown={gameDropDown}    
        />
        {id + 1 <= 898 ? 
        <NavBarIcon 
            icon={<BsFillArrowRightSquareFill size='20' />}
            text={id + 1}
            route={`/pokemon/national/${id + 1}/${game}`} 
        /> : <SiPokemon size='50' />}
    </div>
)