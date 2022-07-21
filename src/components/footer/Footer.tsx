import style from './Footer.module.css';
import Image from 'next/image';

/**
 * Bottom display footer, will contain an image, name of site and maybe some contact icons in the future
 * Should match the header in color scheme
 * @returns 
 *  A footer component to be inside of the layout
 */
export default function Footer() {

    return (
        <div className={style.main}>
            <Image 
                src={`/sprites/94.png`}
                alt='Archer'
                layout={'fixed'}
                height={100}
                width={100}
                className={style.img}
            />
            <h1 className={style.h1}>Archer</h1>
        </div>
    )
}