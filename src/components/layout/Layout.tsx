import Header from "../header/Header";
import Footer from "../footer/Footer";
import style from './Layout.module.css';

/**
 * This is the layout for our whole site, we will always have a header, the basic Navbar, and a footer.
 * 
 *  The Header - I am thinking of adding props to chaneg certain things when on a different page
 *  The Footer - I am thinking of adding props to chaneg certain things when on a different page
 * 
 * No styles are being imported here, each componenet is responsible for its own styles, however that might change in the future
 * @param {*} param0 
 * @returns 
 */
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className={`bg-gray-900 `}>
                <div className={style.main}>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}