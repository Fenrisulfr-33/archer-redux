// import { logout, reset } from "../../redux/features/auth/authSlice";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { SideBarIcon } from "../Menu/SideBarIcon";
import style from './NavBar.module.css';
/* React Icons */
import { SiHomeadvisor, SiTelegraph } from 'react-icons/si'
import { MdArticle, MdCatchingPokemon } from 'react-icons/md';
import { BsFillFileCodeFill } from 'react-icons/bs';
import { FaFileSignature } from 'react-icons/fa';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';


import MenuDropDown from "../Menu/MenuDropDown";

export default function NavBar(props){
    // const router = useRouter(); // 
    // const dispatch = useDispatch();
    // const { user } = useSelector((state) => state.auth);
    // const onLogout = () => {
    //     dispatch(logout());
    //     dispatch(reset());
    //     router.push('/');
    // }
    const user = true; // delete when finished with user login
    const onLogout = () => console.log('logout function');
    return (
        <>
        <div className='items-center justify-end pr-5 tablet:hidden '>
            <MenuDropDown />
        </div>
        <div className='hidden tablet:flex items-center justify-end space-x-4 pr-5'>

            
            <SideBarIcon icon={<SiHomeadvisor size='28' />} text={'Home'} route={'/'} />
            <SideBarIcon icon={<MdArticle size='28' />} text={'Articles'} route={'/articles'}/>
            <SideBarIcon icon={<BsFillFileCodeFill size='28' />} text={'Code'} route={'/code'}/>
            <SideBarIcon icon={<MdCatchingPokemon size='28' />} text={'Pokemon'} route={'/pokemon'}/>
            <SideBarIcon icon={<SiTelegraph size='28' />} text={'TemTem'} route={'/temtem'}/>
            {user ? (
                <button onClick={onLogout} className={`${style.navbarIcon} group`}>
                <BiLogOutCircle size='28' />
    
                <span className={`${style.navbarToolTip} group-hover:scale-100`}>
                    Logout
                </span>
            </button>
            ) : 
            (
                <>
                    <SideBarIcon icon={<BiLogInCircle size='28' />} text={'Login'} route={'/users/login'} />
                    <SideBarIcon icon={<FaFileSignature size='28' />} text={'Sign Up'} route={'/users/register'}/>
                </>
            )}
        </div>
        </>
    )
}