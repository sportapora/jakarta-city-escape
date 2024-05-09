import Layout from "../Layout.jsx";
import KotuHero from "../assets/kotu-hero.jpg";
import Card from "../Components/Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ExploreJakarta() {
  window.onload = function () {
    document.getElementById("hero-title").classList.remove("translate-y-72");
    document.getElementById("hero").classList.remove("opacity-0");
  };
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/jakartacityescape/api/getAllDestinations")
      .then((response) => {
        setDestinations(response.data.data.destinations);
      });
  }, []);


  return (
    <Layout>
      <div
        className="min-h-screen transition-opacity ease-in-out duration-300 opacity-0 relative flex flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${KotuHero})` }}
        id="hero"
      >
        <div className="container absolute bottom-1/2 top-1/2 text-right">
          <h1
            id="hero-title"
            className="text-5xl lg:text-6xl font-extrabold transition-transform ease-in-out duration-500 translate-y-72 text-gray-100"
          >
            Yuk eksplorasi destinasi
            <span className="block">wisata di Jakarta!</span>
          </h1>
        </div>
      </div>
      <div className="container mt-16">
        <form className="lg:container w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mau pergi ke mana hari ini?"
            />
          </div>
        </form>

        {destinations.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                nama={destination.nama}
                image={destination.image}
                deskripsi={destination.deskripsi.slice(0, 250)}
              />
            ))}
          </div>
        ) : (
          <div className="my-10">
            <h2 className="text-xl font-semibold text-center">
              Terjadi kesalahan dengan server. Harap coba kembali lagi nanti!
            </h2>
          </div>
        )}
      </div>
    </Layout>
  );
}
