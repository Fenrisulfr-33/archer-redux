import Link from 'next/link';

const styles = {
    sideBarIcon: 'relative flex items-center justify-center h-12 w-12 m-0 text-purple-300 bg-gray-600 rounded-3xl transition-all duration-200 ease-linear cursor-pointer',
    hoverSideBarIcon: 'hover:bg-purple-600 hover:text-white hover:rounded-2xl',
    sideBarTitle: 'absolute w-auto p-2 m-2 min-w-max -bottom-12 rounded-md shadow-md text-gray-200 bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-bottom',
    sideBarMenu: 'absolute w-auto p-2 m-2 min-w-max top-12 rounded-md shadow-md text-gray-200 bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-bottom'
}
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
            <button className={`${styles.sideBarIcon} ${styles.hoverSideBarIcon} group`}>
                {icon}
                <span className={`${styles.sideBarTitle} group-hover:scale-100`}>
                    {text}
                </span>
            </button>
        </Link>
    )
}