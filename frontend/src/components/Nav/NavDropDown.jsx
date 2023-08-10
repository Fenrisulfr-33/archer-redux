import { Menu, Transition } from '@headlessui/react';
import { Fragment, } from 'react';
import Link from 'next/link';
/* React Icons */
import { SiHomeadvisor } from 'react-icons/si'
import { MdLibraryBooks, MdOutlineCatchingPokemon } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';

const styles = {
    menuIcon: 'relative flex items-center justify-center h-12 w-12 m-0 text-purple-300 bg-gray-600 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer',
    menuButtons: 'space-x-2 text-gray-200 flex rounded-md items-center w-full px-2 py-2 text-sm',
    menuItems: 'absolute right-5 w-fit mt-2  bg-gray-500 divide-y divide-gray-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
    hoverIcon: 'hover:bg-purple-600 hover:text-white',
    hoverButton: 'hover:bg-purple-200 hover:text-gray-600 '
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

export default function MenuDropDown(){
  return (
      <Menu as='div' className='top-16 '>
          <Menu.Button className={`${styles.menuIcon} ${styles.hoverIcon}`}>
            <BiMenu size='28' />
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
            <MenuItem icon={<SiHomeadvisor size='20' />} text={'Home'} route={`/`} />
            <MenuItem icon={<MdLibraryBooks size='20' />} text={'Artciles'} route={`/articles`} />
            <MenuItem icon={<MdOutlineCatchingPokemon size='20' />} text={'Pokemon'} route={`/pokemon`} />
          </Menu.Items>
        </Transition>
      </Menu> 
  )
}