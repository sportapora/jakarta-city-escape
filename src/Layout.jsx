import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

export default function Layout({children}) {
    return (
        <div className="lg:pb-[30%] relative bg-stone-100 text-stone-800">
            <Navbar/>
            {children}
            <Footer />
        </div>
    )
}