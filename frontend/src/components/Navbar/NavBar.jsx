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

const NavBar = ({ username, loading, logout }) => {
    const router = useRouter(),
    onLogout = () => {
        logout();
        router.push('/');
    }
    return (
        <>
        <div className='items-center justify-end phone:pr-5 tablet:hidden '>
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