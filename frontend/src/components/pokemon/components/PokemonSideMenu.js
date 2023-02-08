import Link from 'next/link';

const NavBarIcon = ({ text, route }) => {
    return (
        <Link href={route} passHref>
            <button className={`test-button`}>{text}</button>
        </Link>
    )
}

export default function PokemonSideMenu() {
  return (
    <>
        <div className="flex flex-col space-y-2 p-2 text-left text-sm border border-red-200">                    
            <NavBarIcon route={'/pokemon'} text={'Home'}/>
            <div className={`test-label`}>Data</div>
                <div className={'pl-4  flex flex-col space-y-1'}>
                    <NavBarIcon route={'/pokemon/national'} text={'National Dex.'}/>
                    <NavBarIcon route={'/pokemon/moves'} text={'Moves'}/>
                    <NavBarIcon route={''} text={'Abilities'}/>
                </div>
            <div className={`test-label`}>Mechanics</div>
            <div className={'pl-4 flex flex-col space-y-1'}>
                <NavBarIcon route={'/pokemon/typechart'} text={'Type Chart'}/>
                <NavBarIcon route={''} text={'Effort Values'}/>
                <NavBarIcon route={''} text={'Inherent Values'}/>
                <NavBarIcon route={''} text={'Breeding'}/>
            </div>
                <div className={`test-label`}>Games</div>
                <div className={`pl-4`}><div className={`test-label`}>Scarlet & Violet</div></div>
                    <div className={'pl-8 flex flex-col space-y-1'}>
                        <NavBarIcon route={'/pokemon/scarlet-violet'} text={'Pokedex'}/>
                        <NavBarIcon route={'/pokemon/scarlet-violet/articles/terra-raid-events'} text={'Terra Raid Battles'}/>
                        <NavBarIcon route={'/pokemon/scarlet-violet/articles/regionals'} text={'Regionals'}/>
                    </div>
                    <div className={`pl-4`}><div className={`test-label`}>Sword & Shield</div></div>
                        <div className={'pl-8  flex flex-col space-y-1'}>
                            <NavBarIcon route={'/pokemon/sword-shield'} text={'Pokedex'}/>
                            <NavBarIcon route={''} text={'Raid Dens'}/>
                        </div>
        </div>
    </>
  )
}