import Layout from "../Layout.jsx";
import KotuHero from "../assets/kotu-hero.jpg";
import Card from "../Components/Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ExploreJakarta() {
  window.onload = function () {
    document.getElementById("hero-title").classList.remove("translate-y-72");
    document.getElementById("hero").classList.remove("opacity-0");
    document.getElementById("dark-layer").classList.remove("opacity-0");
    document.getElementById("dark-layer").classList.add("opacity-25");
  };

  const categories = [
    "Sejarah, Seni & Budaya",
    "Taman Hiburan dan Edukasi",
    "Taman Hiburan",
  ];

  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleFilter = (e, index) => {
    e.preventDefault();
    index != null ? setFilter(destinations[index].kategori) : setFilter("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getAllDestinations")
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
        <div className="container z-[70] text-right">
          <h1
            className="hero-title transition-transform ease-in-out duration-500 translate-y-72"
            id="hero-title"
          >
            Yuk eksplorasi destinasi
            <span className="block">wisata di Jakarta!</span>
          </h1>
        </div>
      </div>
      <div className="dark-layer opacity-0" id="dark-layer"></div>

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
                className="w-4 h-4 text-gray-500 dark:text-stone-400"
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-stone-800 dark:border-gray-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500"
              placeholder="Mau pergi ke mana hari ini?"
            />
          </div>
        </form>

        <div className="lg:container w-full mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <a
              href=""
              onClick={(e) => handleFilter(e, index)}
              key={index}
              className={`bg-stone-300 ${
                category === filter ? "bg-stone-600 text-white" : "200"
              } flex items-center justify-center hover:bg-stone-600 hover:text-white text-stone-800 transition-color ease-in-out duration-300 text-center text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-stone-700 dark:text-gray-300 dark:hover:bg-stone-800`}
            >
              {category}
            </a>
          ))}
          <a
            href=""
            onClick={(e) => handleFilter(e, null)}
            className="bg-red-600 flex items-center justify-center gap-4 text-white hover:bg-red-700 transition-color ease-in-out duration-300 text-center text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-red-700 dark:hover:bg-red-800"
          >
            Hapus filter
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
          </a>
        </div>

        {destinations.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16">
            {filter != ""
              ? destinations
                  .filter((destination) => destination.kategori == filter)
                  .map((destination, index) => (
                    <a
                      key={index}
                      className="hover:-translate-y-4 group ease-in-out duration-300 transition-transform"
                      href={`/jelajahi/${destination.nama
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <Card
                        key={destination.id}
                        nama={destination.nama}
                        image={destination.image}
                        deskripsi={destination.deskripsi.slice(0, 250)}
                      />
                    </a>
                  ))
              : destinations.map((destination, index) => (
                  <a
                    key={index}
                    className="hover:-translate-y-4 group ease-in-out duration-300 transition-transform"
                    href={`/jelajahi/${destination.nama
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    <Card
                      key={destination.id}
                      nama={destination.nama}
                      image={destination.image}
                      deskripsi={destination.deskripsi.slice(0, 250)}
                    />
                  </a>
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
