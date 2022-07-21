import style from './Header.module.css';
import NavBar from '../navbar/Navbar';

export default function Header() {

    return (
        <div className={style.main}>
            <h1 className={style.h1}>
                Archer
            </h1>
            <NavBar />
        </div>
    )
}