import Layout from "../Layout.jsx";
import MonasHero from '../assets/monas.jpg'
import KotuHero from '../assets/kotu-hero.jpg'
import Kotu from '../assets/kotu.jpg'
import Dufan from '../assets/dufan.webp'
import {useEffect, useState} from "react";

export default function Home() {
    const heroImages = [
        MonasHero,
        KotuHero
    ];
    const [background, setBackground] = useState(MonasHero)

    // useEffect(() => {
    //     const changeImage = setInterval(() => {
    //         let index = Math.floor(Math.random() * heroImages.length);
    //         setBackground(heroImages[index])
    //     }, 4000)
    //     return () => clearInterval(changeImage);
    // }, [heroImages])

    return (
        <Layout>
            <div
                className="min-h-screen relative flex flex-col items-center justify-center bg-cover transition-opacity ease-in-out duration-500"
                style={{backgroundImage: `url(${background})`}} id="hero">
                <form className="container w-full lg:w-1/2 mx-auto">
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Mau pergi ke mana hari ini?"/>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 ">Search
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="#welcome"
                            className="bg-transparent text-center text-white font-bold text-2xl bottom-0 p-4 rounded-lg absolute">Yuk
                            eksplorasi <span
                                className="font-bold">Jakarta</span>!
                            <span className="text-3xl block">&darr;</span>
                        </a>
                    </div>
                </form>
            </div>
            <div className="container mt-16" id="welcome">
                <h1 className="text-4xl lg:text-5xl font-bold text-center">Selamat Datang di Jakarta!</h1>
                <h2 className="text-2xl font-medium mt-6 tracking-wide text-center italic"> Scroll to see the
                    excitement story!
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 lg:mt-16 mb-20">
                    <div className="flex justify-center lg:justify-start">
                        <img src={Kotu}
                             className="w-3/4 text-center  mb-10 lg:mb-0 rounded-md hover:-translate-y-5 ease-in-out duration-200 -rotate-6"
                             alt="Kota Tua"/>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">Kota Tua</h3>
                        <p className="tracking-wide mt-4 text-justify">Jika anda tidak menyukai tempat wisata yang
                            berisik dan terlalu kekanak-kanakan, mungkin Anda bisa mencoba ke Kota Tua! Destinasi wisata
                            ini menyimpan segudang pengetahuan sejarah yang dapat menjadi wawasan baru bagimu.
                            Gedung-gedung di wilayah tersebut berupa peninggalan bangunan-bangunan tua bergaya kolonial
                            Belanda yang begitu menawan.</p>
                        <a href="/jelajahi/kota-tua" className="block mt-8 peer text-lg font-bold ">Read more &rarr;</a>
                        <div className="animated-underscore peer-hover:w-24"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
                    <div>
                        <h3 className="text-3xl font-bold">Dunia Fantasi (Dufan)</h3>
                        <p className="tracking-wide mt-4 text-justify">Habis diputusin pacar atau sedang melewati masa
                            sulit? Mungkin Anda bisa mencoba meluapkan emosi dan rasa kesalmu dengan berteriak di tempat
                            ini! Dufan yang merupakan singkatan dari Dunia Fantasi, menyediakan berbagai wahana
                            permainan yang spektakuler dan menantang.
                        </p>
                        <a href="/jelajahi/kota-tua" className="block mt-8 peer text-lg font-bold ">Read more &rarr;</a>
                        <div className="animated-underscore peer-hover:w-24"></div>
                    </div>
                    <div>
                        <div className="flex justify-center lg:justify-end">
                            <img src={Dufan}
                                 className="w-3/4 text-center  mb-10 lg:mb-0 rounded-md hover:-translate-y-5 ease-in-out duration-200 rotate-6"
                                 alt="Kota Tua"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
