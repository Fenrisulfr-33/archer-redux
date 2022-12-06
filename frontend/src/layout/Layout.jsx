import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const styles = {
    main: 'min-h-screen bg-gray-800 border-8 border-gray-900 rounded-3xl'
}
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
                <div className={styles.main}>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}