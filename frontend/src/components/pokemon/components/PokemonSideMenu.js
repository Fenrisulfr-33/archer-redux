import Link from 'next/link';
import Tabs from './tabs/Tabs';

const NavBarIcon = ({ text, route }) => {
    return (
        <Link href={route} passHref>
            <button className={`button`}>{text}</button>
        </Link>
    )
}

export default function PokemonSideMenu() {
  return (
    <>
        <div className={'laptop:hidden'}>
            <Tabs />
        </div>
        <div className="hidden laptop:flex flex-col space-y-2 p-2 text-left text-sm border border-red-200">                    
            <NavBarIcon route={'/pokemon'} text={'Home'}/>
            <div className={`label`}>Data</div>
                <div className={'pl-4  flex flex-col space-y-1'}>
                    <NavBarIcon route={'/pokemon/national'} text={'National Dex.'}/>
                    <NavBarIcon route={'/pokemon/moves'} text={'Moves'}/>
                    <NavBarIcon route={''} text={'Abilities'}/>
                </div>
            <div className={`label`}>Mechanics</div>
            <div className={'pl-4 flex flex-col space-y-1'}>
                <NavBarIcon route={'/pokemon/typechart'} text={'Type Chart'}/>
                <NavBarIcon route={''} text={'Effort Values'}/>
                <NavBarIcon route={''} text={'Inherent Values'}/>
                <NavBarIcon route={''} text={'Breeding'}/>
            </div>
                <div className={`label`}>Games</div>
                <div className={`pl-4`}><div className={`label`}>Scarlet & Violet</div></div>
                    <div className={'pl-8 flex flex-col space-y-1'}>
                        <NavBarIcon route={'/pokemon/scarlet-violet'} text={'Pokedex'}/>
                        <NavBarIcon route={'/pokemon/scarlet-violet/articles/terra-raid-events'} text={'Terra Raid Battles'}/>
                        <NavBarIcon route={'/pokemon/scarlet-violet/articles/regionals'} text={'Regionals'}/>
                    </div>
                    <div className={`pl-4`}><div className={`label`}>Sword & Shield</div></div>
                        <div className={'pl-8  flex flex-col space-y-1'}>
                            <NavBarIcon route={'/pokemon/sword-shield/pokedex'} text={'Pokedex'}/>
                            <NavBarIcon route={'/pokemon/isle-of-armor/pokedex'} text={'Isle of Armor Dex.'}/>
                            <NavBarIcon route={''} text={'Raid Dens'}/>
                        </div>
        </div>
    </>
  )
}