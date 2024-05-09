import Layout from "../Layout.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Layers3} from "lucide";

export default function DestinationDetail() {
    let lastSegURL = window.location.href.split("/").pop();

    window.onload = function () {
        document.getElementById("hero-title").classList.remove("translate-y-72");
        document.getElementById("dark-layer").classList.remove("opacity-0");
        document.getElementById("dark-layer").classList.add("opacity-25")
        document.getElementById("destination-desc").classList.remove("translate-y-72");
        document.getElementById("hero").classList.remove("opacity-0");
    };

    const [destination, setDestination] = useState([]);

    useEffect(() => {
        axios
            .get(
                `http://localhost:3000/jakartacityescape/api/getDestination/${lastSegURL}`
            )
            .then((response) => {
                setDestination(response.data.data[0]);
            });
    }, []);

    return (
        <Layout>
            <div
                className="h-screen bg-center bg-cover flex items-center"
                id="hero"
                style={{backgroundImage: `url(${destination.image})`}}
            >
                <div className="container text-stone-100 z-[55]">
                    <h1 className="text-left hero-title transition-transform ease-in-out duration-500 translate-y-72"
                        id="hero-title">{destination.nama}</h1>
                    <p className="inline-flex mt-2 tracking-wide transition-transform ease-in-out duration-500 translate-y-72"
                       id="destination-desc">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-layers-3">
                            <path
                                d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                            <path
                                d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/>
                            <path
                                d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/>
                        </svg>
                        &nbsp;{destination.kategori}&nbsp;
                        <div className="w-[2px] h-auto bg-white"></div>
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-map-pin">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        &nbsp;{destination.lokasi}
                    </p>
                </div>
            </div>
            <div className='absolute h-screen w-full top-0 z-50 opacity-0 transition-opacity ease-in-out duration-700 bg-gradient-to-t from-zinc-900 to-zinc-50' id="dark-layer"></div>
            <div className="container mt-16">
                <p className="tracking-wide text-justify">{destination.deskripsi}</p>
            </div>
        </Layout>
    );
}
