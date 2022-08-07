import Image from 'next/image';

const styles = {
    main: 'flex flex-row justify-between items-center flex-nowrap bg-gray-900',
    h1: 'p-5 text-sm text-purple-300 font-mono font-extrabold phone:text-3xl',
    img: 'items-center'
}
/**
 * Bottom display footer, will contain an image, name of site and maybe some contact icons in the future
 * Should match the header in color scheme
 * @returns 
 *  A footer component to be inside of the layout
 */
export default function Header() {

    return (
        <div className={styles.main}>
            <Image 
                src={`/sprites/94.png`}
                alt='Archer'
                layout={'fixed'}
                height={100}
                width={100}
                className={styles.img}
            />
            <h1 className={styles.h1}>Archer</h1>
        </div>
    )
}