import Link from 'next/link';
import style from './MenuIcon.module.css';

/**
 * 
 * @props { icon, text, route }
 *  The icon coming in for the button, the text for the pop up, and the route for redirection
 * @returns 
 * 
 */
export const SideBarIcon = ({ icon, text, route }) => {
    return (
        <Link href={route} passHref>
            <button className={`${style.navbarIcon} group`}>
                {icon}
                <span className={`${style.navbarTitle} group-hover:scale-100`}>
                    {text}
                </span>
            </button>
        </Link>
    )
}