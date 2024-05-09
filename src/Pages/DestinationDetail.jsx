import Layout from "../Layout.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DestinationDetail() {
  let lastSegURL = window.location.href.split("/").pop();

  window.onload = function () {
    document.getElementById("hero-title").classList.remove("translate-y-72");
    document.getElementById("dark-layer").classList.remove("opacity-0");
    document.getElementById("dark-layer").classList.add("opacity-25");
    document
      .getElementById("destination-desc")
      .classList.remove("translate-y-72");
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
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="container text-stone-100 z-[55]">
          <h1
            className="text-left hero-title transition-transform ease-in-out duration-500 translate-y-72"
            id="hero-title"
          >
            {destination.nama}
          </h1>
          <p
            className="inline-flex mt-2 tracking-wide transition-transform ease-in-out duration-500 translate-y-72"
            id="destination-desc"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layers-3"
            >
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
              <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
            </svg>
            &nbsp;{destination.kategori}&nbsp;
            <div className="w-[2px] h-auto bg-white"></div>
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            &nbsp;{destination.lokasi}
          </p>
        </div>
      </div>
      <div className="dark-layer opacity-0" id="dark-layer"></div>
      <div className="container mt-16 dark:text-gray-200">
        <p className="tracking-wide text-justify">{destination.deskripsi}</p>

        <h2 className="text-4xl font-bold mt-16">
          Gimana sih caranya ke {destination.nama} ?
        </h2>
        <h3 className="text-xl font-semibold mt-3">
          Yuk, biasakan naik transportasi umum!
        </h3>
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white transition-colors ease-in-out duration-300 dark:bg-stone-800 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
          className="mt-6"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 px-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>Via JakLingko (Transjakarta, MRT, Mikrotrans)</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            class="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 px-3 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p class="text-gray-500 px-3 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="/docs/getting-started/introduction/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 px-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>Via KRL</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            class="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div class="py-5 px-3 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Figma design system
                </a>{" "}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
