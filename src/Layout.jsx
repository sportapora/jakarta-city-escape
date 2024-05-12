import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="lg:pb-[5%] relative bg-stone-100 dark:bg-neutral-900 text-stone-800">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
