import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

export default function Layout({children}) {
    return (
        <div className="lg:pb-[30%] relative">
            <Navbar/>
            {children}
            <Footer />
        </div>
    )
}