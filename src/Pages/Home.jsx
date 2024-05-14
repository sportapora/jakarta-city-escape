import Layout from "../Layout.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Carousel from "../Components/Carousel.jsx";

export default function Home() {
  const BASE_URL = window.location.origin;
  const [destinations, setDestinations] = useState([]);

  window.onload = function () {
    document.getElementById("hero").classList.remove("opacity-0");
    document.getElementById("footer").classList.add("hidden");
    document.getElementById("layout").classList.remove("lg:pb-[30%]");
    document.getElementById("dark-layer").classList.remove("opacity-0");
    document.getElementById("dark-layer").classList.add("opacity-25");
  };

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToWelcome = (event) => {
    event.preventDefault();
    document.getElementById("footer").classList.remove("hidden");
    document.getElementById("layout").classList.add("lg:pb-[30%]");
    document.getElementById("welcome").classList.remove("opacity-0", "hidden");
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#welcome", offsetY: 80 },
    });
  };

  useEffect(() => {
    axios
      .get(
        "https://jakarta-city-escape-be.vercel.app/api/getDestinationsForHomepage"
      )
      .then((response) => {
        setDestinations(response.data.data);
      });
  }, []);

  return (
    <Layout>
      <div
        className="relative h-screen transition-opacity ease-in-out duration-500"
        id="hero"
      >
        <Carousel />
        <div className="absolute z-[70] w-full top-1/4">
          <div className="container flex flex-col gap-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-100">
              Hi! Mau ke mana hari ini?
            </h1>
            <form className="w-full lg:w-1/2 mx-auto">
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
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500"
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
          </div>
        </div>
        <div className="absolute flex justify-center w-1/2 left-1/4 z-[60] bottom-5">
          <a
            href=""
            id="eksplorasi-btn"
            onClick={scrollToWelcome}
            className="bg-transparent text-center text-white font-bold text-2xl bottom-0 p-4 rounded-lg absolute"
          >
            Yuk eksplorasi <span className="font-bold">Jakarta</span>!
            <span className="text-3xl block motion-safe:animate-bounce">
              &darr;
            </span>
          </a>
        </div>
      </div>
      <div className="dark-layer opacity-0" id="dark-layer"></div>

      <div
        className="container hidden mt-16 transition-opacity opacity-0 ease-in-out duration-[1.75s] dark:text-gray-100"
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
                  className="flex lg:flex-row flex-col-reverse mb-10 order-last lg:order-first"
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
                        src={`${BASE_URL}${destination.image}`}
                        className="w-full lg:w-3/4 text-center hover:shadow mb-10 lg:mb-0 rounded-md hover:-translate-y-5 ease-in-out duration-200 rotate-6 dark:hover:shadow-gray-100 dark:hover:shadow-lg"
                        alt={destination.nama}
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
                      src={`${BASE_URL}${destination.image}`}
                      className="w-full lg:w-3/4 text-center hover:shadow mb-10 lg:mb-0 rounded-md hover:-translate-y-5 ease-in-out duration-200 -rotate-6 dark:hover:shadow-gray-100 dark:hover:shadow-lg"
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
