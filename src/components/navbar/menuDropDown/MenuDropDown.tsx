// import { logout, reset } from "../../../redux/features/auth/authSlice";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { Menu, Transition } from '@headlessui/react';
import { Fragment, } from 'react';
import style from './MenuDropDown.module.css';
import Link from 'next/link';
/* React Icons */
import { SiHomeadvisor } from 'react-icons/si'
import { MdLibraryBooks, MdOutlineCatchingPokemon } from 'react-icons/md';
import { BiMenu, BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { FaCode, FaTumblr } from 'react-icons/fa';

/**
 * Dropdown Menu for the phone screen
 * @returns 
 * 
 */
export default function MenuDropDown() {
  const router = useRouter(); // 
  const dispatch = useDispatch();
  /*
  TODO: needs user-redux-slice
    woudld like to not use slce but maybe the regular redux method
  */
//   const { user } = useSelector((state) => state.auth);
//   const onLogout = () => {
//       dispatch(logout());
//       dispatch(reset());
//       router.push('/');
//   }

  return (
      <Menu as='div' className='top-16 '>
          <Menu.Button className={style.menuIcon}>
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
          <Menu.Items className={style.menuItems}>
            <MenuItem icon={<SiHomeadvisor size='20' />} text={'Home'} route={`/`} />
            <MenuItem icon={<MdLibraryBooks size='20' />} text={'Artciles'} route={`/articles`} />
            <MenuItem icon={<FaCode size='20' />} text={'Code'} route={`/code`} />
            <MenuItem icon={<MdOutlineCatchingPokemon size='20' />} text={'Pokemon'} route={`/pokemon`} />
            <MenuItem icon={<FaTumblr size='20' />} text={'TemTem'} route={`/temtem`} />
            {/* {user ? (
                  <div className="px-1 py-1 ">
                  <Menu.Item>
                      <button onClick={onLogout} className={style.menuButton} aria-hidden="true">     
                        <BiLogOutCircle size='20' />
                        <span className={``}>
                          Logout
                        </span>
                      </button>
                  </Menu.Item>
                </div>
            ) : 
            (
                <>
                  <MenuItem icon={<BiLogInCircle size='20' />} text={'Login'} route={`/users/login`} />
                  <MenuItem icon={<BiLogOutCircle size='20' />} text={'Register'} route={`/users/register`} />  
                </>
            )} */}
            <MenuItem icon={<BiLogInCircle size='20' />} text={'Login'} route={`/users/login`} />
            <MenuItem icon={<BiLogOutCircle size='20' />} text={'Register'} route={`/users/register`} />  
          </Menu.Items>
        </Transition>
      </Menu> 
  )
}

const MenuItem = ({ icon, text, route }) => (
  <div className="px-1 py-1 ">
    <Menu.Item>
      <Link href={route} passHref>
        <button className={style.menuButton} aria-hidden="true">     
          {icon}
          <span className={``}>
            {text}
          </span>
        </button>
      </Link>
    </Menu.Item>
  </div>
)