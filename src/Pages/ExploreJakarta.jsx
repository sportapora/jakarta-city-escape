import Layout from "../Layout.jsx";
import KotuHero from '../assets/kotu-hero.jpg'
import Card from "../Components/Card.jsx";

export default function ExploreJakarta() {
    window.onload = function () {
        document.getElementById("hero-title").classList.remove("translate-y-72");
        document.getElementById("hero").classList.remove("opacity-0")
    }

    return (
        <Layout>
            <div
                className="min-h-screen transition-opacity ease-in-out duration-300 opacity-0 relative flex flex-col items-center justify-center bg-cover transition-opacity ease-in-out duration-500"
                style={{backgroundImage: `url(${KotuHero})`}} id="hero">
                <div className="container absolute bottom-1/2 top-1/2 text-right">
                    <h1 id="hero-title"
                        className="text-4xl lg:text-6xl font-extrabold transition-transform ease-in-out duration-500 translate-y-72 text-gray-100">Yuk
                        eksplorasi destinasi
                        <span className="block">wisata di Jakarta!</span></h1>

                </div>
            </div>

            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16">
                <Card />
                <Card />
            </div>
        </Layout>
    )
}