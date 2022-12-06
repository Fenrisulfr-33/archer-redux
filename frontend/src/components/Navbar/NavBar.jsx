import { useRouter } from "next/router";
import { NavBarIcon } from "../Menu/NavBarIcon";
import MenuDropDown from "../Menu/MenuDropDown";
/* React Icons */
import { SiHomeadvisor, SiTelegraph } from 'react-icons/si'
import { MdArticle, MdCatchingPokemon } from 'react-icons/md';
import { BsFillFileCodeFill } from 'react-icons/bs';
import { FaFileSignature } from 'react-icons/fa';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
/* REDUX IMPORTS */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout } from '../../redux/users/userActions';

const styles = {
    main: 'flex flex-row mx-5 my-auto space-x-5 space-y-2 text-center phone:text-right',
    navbarIcon: 'relative flex items-center justify-center h-12 w-12 m-0 text-purple-300 bg-gray-600 hover:bg-purple-600 hover:text-white rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer',
    navbarToolTip: 'absolute w-auto p-2 m-2 min-w-max -bottom-12 rounded-md shadow-md text-gray-200 bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-bottom',
    darkMode: 'text-gray-500 mr-3 ml-4 transition duration-300 ease-in-out hover:text-purple-600 cursor-pointer;'
}

const NavBar = ({ username, loading, logout }) => {
    const router = useRouter(),
    onLogout = () => {
        logout();
        router.push('/');
    }
    return (
        <>
        <div className='items-center justify-end pr-5 tablet:hidden '>
            <MenuDropDown />
        </div>
        <div className='hidden tablet:flex items-center justify-end space-x-4 pr-5'>
            <NavBarIcon icon={<SiHomeadvisor size='28' />} text={'Home'} route={'/'} />
            <NavBarIcon icon={<MdArticle size='28' />} text={'Articles'} route={'/articles'}/>
            {/* <NavBarIcon icon={<BsFillFileCodeFill size='28' />} text={'Code'} route={'/code'}/> */}
            <NavBarIcon icon={<MdCatchingPokemon size='28' />} text={'Pokemon'} route={'/pokemon'}/>
            {/* <NavBarIcon icon={<SiTelegraph size='28' />} text={'TemTem'} route={'/temtem'}/> */}
            {/* {username ? (
            <>
                <NavBarIcon icon={<CgProfile size='28' />} text={'MyPage'} route={'/users/me'} />
                <button onClick={onLogout} className={`${styles.navbarIcon} group`}>
                    <BiLogOutCircle size='28' />
                    <span className={`${styles.navbarToolTip} group-hover:scale-100`}>
                        Logout
                    </span>
                </button>
            </>
            ) : 
            (
                <>
                    <NavBarIcon icon={<BiLogInCircle size='28' />} text={'Login'} route={'/users/login'} />
                    <NavBarIcon icon={<FaFileSignature size='28' />} text={'Sign Up'} route={'/users/register'}/>
                </>
            )} */}
        </div>
        </>
    )
}
// Redux connections
const mapStateToProps = ({ user: { username }, apiCallsInProgress}) => {
    return {
        username,
        loading: apiCallsInProgress > 0,
    }
}, mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(logout, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);