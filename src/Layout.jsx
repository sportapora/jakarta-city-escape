import Navbar from "./Components/Navbar.jsx";

export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}