import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
    return (
        <div className="bg-gray-900">
            <Header />
            <main>
                <div className="min-h-screen">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}