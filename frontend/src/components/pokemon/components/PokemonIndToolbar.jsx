import GameDropDown from "./GameDropDown";
import { NavBarIcon } from '../../Menu/NavBarIcon';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { SiPokemon } from 'react-icons/si';

export const PokemonIndToolbar = ({id, game}) => (
    <div id='toolbar' className='col-span-1 tablet:col-span-2 flex flex-row justify-between pt-2'>
            <div className={''}>
                {id - 1 > 0 ? 
                <NavBarIcon 
                    icon={<BsFillArrowLeftSquareFill size='20' />}
                    text={id - 1}
                    route={`/pokemon/national/${id - 1}/${game}`}
                /> : <SiPokemon size='50' />}
            </div>
            <div className={''}>
                <GameDropDown 
                    route={`/pokemon/national/${id}`}
                    input={game}    
                />
            </div>
            <div className={''}>
                {id + 1 <= 898 ? 
                <NavBarIcon 
                    icon={<BsFillArrowRightSquareFill size='20' />}
                    text={id + 1}
                    route={`/pokemon/national/${id + 1}/${game}`} 
                /> : <SiPokemon size='50' />}
            </div>
    </div>
)