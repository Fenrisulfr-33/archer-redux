import Link from "next/link"
import { Menu } from '@headlessui/react';

const styles = {
    menuButtons: 'space-x-2 text-gray-200 flex rounded-md items-center w-full px-2 py-2 text-sm',
    hoverButton: 'hover:bg-purple-200 hover:text-gray-600 ',
}

export default function MenuItem({ icon, text, route }){
    return(
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
}