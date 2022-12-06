import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
/* React Icons */
import { SiHomeadvisor } from 'react-icons/si'
import { MdLibraryBooks, MdOutlineCatchingPokemon } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import { Fragment } from 'react';

const styles = {
    main: 'flex flex-col overflow-auto max-h-screen font-mono space-y-2 text-left pl-4 py-10',
    menuButtons: 'space-x-2 text-gray-200 flex rounded-md items-center w-full px-2 py-2 text-sm',
    menuItems: 'absolute left-5 w-fit mt-2  bg-gray-500 divide-y divide-gray-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
    hoverButton: 'hover:bg-purple-200 hover:text-gray-600 ',
    sideBarMenu: 'absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md text-gray-200 bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-bottom'
}
export default function SideMenu() {
    return (
        <>
            <div className="flex p-1 items-center tablet:hidden ">
                <Menu as='div' className=''>
                    <Menu.Button className={`btn-purple`}>
                        Pokemon
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className={styles.menuItems}>
                            <MenuItem icon={<SiHomeadvisor size='20' />} text={'Home'} route={`/pokemon`} />
                            <MenuItem icon={<MdLibraryBooks size='20' />} text={'National'} route={`/pokemon/national`} />
                            <MenuItem icon={<FaCode size='20' />} text={'Sword & Shield'} route={`/pokemon/swsh`} />
                            <MenuItem icon={<MdOutlineCatchingPokemon size='20' />} text={'Moves'} route={`/pokemon/moves`} />
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div> 
            <div className='hidden tablet:flex flex-col p-2 space-y-4 w-1/5'>
                <NavBarIcon text={'Home'} route={'/pokemon'} />
                <NavBarIcon text={'National'} route={'/pokemon/national'}/>
                <NavBarIcon text={'Sword & Shield'} route={'/pokemon/swsh'}/>
                {/* <NavBarIcon text={'Moves'} route={'/pokemon/moves'}/> */}
                <NavBarIcon text={'Articles'} route={'/pokemon/articles'}/>
            </div>
        </>
    )
}

// Drop down menu items
const MenuItem = ({ icon, text, route }) => (
  <div className="px-1 py-1 ">
    <Menu.Item>
      <Link href={route} passHref>
        <button className={`${styles.menuButtons} ${styles.hoverButton}`} aria-hidden="true">     
          {icon}
          <span className={``}>
            {text}
          </span>
        </button>
      </Link>
    </Menu.Item>
  </div>
)

const NavBarIcon = ({ text, route }) => {
    return (
        <Link href={route} passHref className={`flex`}>
            <button className={`btn-purple`}>{text}</button>
        </Link>
    )
}