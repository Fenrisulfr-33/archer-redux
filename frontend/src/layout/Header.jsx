import NavBar from '../components/Navbar/NavBar'

const styles = {
    main: 'flex flex-row justify-between items-center h-28 bg-gray-900',
    h1: 'p-5 text-purple-300 font-mono font-extrabold phone:text-3xl',
    nav: 'text-center'
}

export default function Header() {

    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>
                Archer
            </h1>
            <NavBar />
        </div>
    )
}