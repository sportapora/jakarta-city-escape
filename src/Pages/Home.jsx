import Layout from "../Layout.jsx";
import MonasHero from "../assets/monas.jpg";
import KotuHero from "../assets/kotu-hero.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  window.onload = function () {
    document.getElementById("hero").classList.remove("opacity-0");
    document
      .getElementById("eksplorasi-btn")
      .classList.remove("translate-y-24");
  };

  window.onscroll = function () {
    let welcomeElement = document.getElementById("welcome");

    if (window.pageYOffset >= 300) {
      welcomeElement.classList.remove("opacity-0");
    }
  };

  const changeOpacity = () => {
    document.getElementById("welcome").classList.remove("opacity-0");
  };

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/jakartacityescape/api/getDestinationsForHomepage"
      )
      .then((response) => {
        setDestinations(response.data.data);
      });
  }, []);

  return (
    <Layout>
      <div
        className="min-h-screen transition-opacity opacity-0 ease-in-out duration-300 relative flex flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${MonasHero})` }}
        id="hero"
      >
        <form className="container w-full lg:w-1/2 mx-auto">
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mau pergi ke mana hari ini?"
            />
            <button
              type="submit"
              className="text-white hidden md:block absolute end-2.5 bottom-2.5 btn-primary font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>

          <button
            type="submit"
            className="text-white block md:hidden mt-2 w-full end-2.5 bottom-2.5 btn-primary font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </form>
        <div className="flex justify-center">
          <a
            href="#welcome"
            id="eksplorasi-btn"
            onClick={changeOpacity}
            className="bg-transparent transition-transform ease-in-out duration-500 translate-y-24 text-center text-white font-bold text-2xl bottom-0 p-4 rounded-lg absolute"
          >
            Yuk eksplorasi <span className="font-bold">Jakarta</span>!
            <span className="text-3xl block motion-safe:animate-bounce">
              &darr;
            </span>
          </a>
        </div>
      </div>
      <div
        className="container mt-16 transition-opacity opacity-0 ease-in-out duration-[1.75s]"
        id="welcome"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Selamat Datang di Jakarta!
        </h1>
        <h2 className="text-2xl font-medium mt-6 tracking-wide text-center italic">
          {" "}
          Scroll to see the excitement story!
        </h2>

        {destinations.length > 0 ? (
          destinations.map((destination, index) => {
            if (index == 1) {
              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row flex-col-reverse mb-10 order-last lg:order-first"
                >
                  <div className="w-full lg:w-1/2">
                    <a
                      href={`/jelajahi/${destination.nama
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <h3 className="text-3xl font-bold text-left hover:translate-x-4 transition-transform ease-in-out duration-300">
                        {destination.nama}
                      </h3>
                    </a>
                    <p className="tracking-wide mt-4 text-justify">
                      {destination.deskripsi}
                    </p>
                    <a
                      href="/jelajahi/kota-tua"
                      className="block mt-8 peer text-lg font-bold "
                    >
                      Read more &rarr;
                    </a>
                    <div className="animated-underscore peer-hover:w-24"></div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-end">
                      <img
                        src={`${destination.image}`}
                        className="w-full lg:w-3/4 text-center  mb-10 lg:mb-0 rounded-md hover:-translate-y-5 ease-in-out duration-200 rotate-6"
                        alt="Kota Tua"
                      />
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 mt-20 lg:mt-16 mb-20"
                >
                  <div className="flex justify-center lg:justify-start">
                    <img
                      src={`${destination.image}`}
                      className="w-full lg:w-3/4 text-center  mb-10 lg:mb-0 rounded-md hover:-translate-y-5 ease-in-out duration-200 -rotate-6"
                      alt="Kota Tua"
                    />
                  </div>
                  <div>
                    <a
                      href={`/jelajahi/${destination.nama
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <h3 className="text-3xl font-bold text-left hover:translate-x-4 transition-transform ease-in-out duration-300">
                        {destination.nama}
                      </h3>
                    </a>
                    <div className="animated-underscore peer-hover:w-12"></div>
                    <p className="tracking-wide mt-4 text-justify">
                      {destination.deskripsi}
                    </p>
                    <a
                      href="/jelajahi/kota-tua"
                      className="block mt-8 peer text-lg font-bold "
                    >
                      Read more &rarr;
                    </a>
                    <div className="animated-underscore peer-hover:w-24"></div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div className="my-10">
            <h2 className="text-xl font-semibold text-center">
              Terjadi kesalahan dengan server. Harap coba kembali lagi nanti!
            </h2>
          </div>
        )}

        {destinations.length > 0 ? (
          <div className="flex justify-center">
            <div className="text-start">
              <a
                href="/jelajahi"
                className="text-xl peer text-center font-semibold"
              >
                Lihat selengkapnya &rarr;
              </a>
              <div className="animated-underscore peer-hover:w-48"></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}
