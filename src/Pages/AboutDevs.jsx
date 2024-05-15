import Layout from "../Layout.jsx";
import ConfettiButton from "../Components/ConfettiButton.jsx";
import Henry from "../../public/assets/henry.jpeg";
import Jeo from "../../public/assets/jeo.jpg";
import Ben from "../../public/assets/ben.webp";
import Maul from "../../public/assets/maul.jpg";
import MemeHenry from "../../public/assets/MemeHenry.jpg";
import MemeMaul from "../../public/assets/MemeMaul.jpg";
import MemeBen from "../../public/assets/MemeBen.jpg";
import MemeJeo from "../../public/assets/MemeJeo.jpg";

export default function AboutDevs() {
  window.onload = () => {
    document.getElementById("footer").classList.remove("hidden");
    document.getElementById("layout").classList.add("lg:pb-[30%]");
  };

  return (
    <Layout>
      <div className="container h-auto mb-20">
        <div className="flex lg:items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-32 mr-44 text-white">
            <div
              className="w-56 h-32 bg-stone-400 shadow-lg focus:h-[410px] focus:my-0 mx-0 hover:neon-slate max-[500px]focus:neon-slate rounded-md transition-all duration-500 p-4 flex flex-col"
              tabindex="0"
            >
              <div className="flex flex-row justify-between mt-2">
                <img
                  className="w-20 h-20 ring-4 ring-white rounded-lg"
                  src={Henry}
                />
                <div className="flex flex-col items-center justify-center">
                  <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm mb-2">
                    Henry Salim
                  </h2>
                  <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm">
                    00000079925
                  </h2>
                </div>
              </div>
              <div
                className="overflow-hidden mt-2 flex flex-col items-center transition-all ease-in-out duration-200"
                tabindex="0"
              >
                <p className="mb-2">Meme of the day:</p>
                <img src={MemeHenry} className="w-52 h-52"></img>
                <div class="relative inline-flex group/ig1 mb-8 mt-8">
                  <div class="absolute transitiona-all duration-1000 hover:scale-110 opacity-80 -inset-px bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#FFDC80] rounded-xl blur-lg group-hover/ig1:opacity-100 group-hover/ig1:-inset-1 group-hover/ig1:duration-200 animate-tilt"></div>
                  <a
                    href="https://www.instagram.com/_henryhenn/"
                    class="relative inline-flex items-center justify-center px-1 py-1 text-lg font-bold text-white transition-all duration-200 bg-slate-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#instagram-gradient)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <defs>
                        <linearGradient
                          id="instagram-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stop-color="#833AB4" />
                          <stop offset="50%" stop-color="#FD1D1D" />
                          <stop offset="100%" stop-color="#FCB045" />
                        </linearGradient>
                      </defs>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="w-56 h-32 bg-stone-400 shadow-lg focus:h-[410px] focus:my-0 mx-0 hover:neon-slate max-[500px]focus:neon-slate rounded-md transition-all duration-500 p-4 flex flex-col"
              tabindex="0"
            >
              <div className="flex flex-row justify-between mt-2">
                <img
                  className="w-20 h-20 ring-4 ring-white rounded-lg"
                  src={Ben}
                />
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center">
                    <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm mb-2">
                      Ben Arief
                    </h2>
                    <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm mb-2">
                      Moggalana
                    </h2>
                  </div>
                  <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm">
                    00000081977
                  </h2>
                </div>
              </div>
              <div
                className="overflow-hidden mt-2 flex flex-col items-center transition-all ease-in-out duration-200"
                tabindex="0"
              >
                <p className="mb-2">Meme of the day:</p>
                <img src={MemeBen} className="w-44 h-44"></img>
                <div class="relative inline-flex group/ig1 mt-6 mb-5">
                  <div class="absolute transitiona-all duration-1000 hover:scale-110 opacity-80 -inset-px bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#FFDC80] rounded-xl blur-lg group-hover/ig1:opacity-100 group-hover/ig1:-inset-1 group-hover/ig1:duration-200 animate-tilt"></div>
                  <a
                    href="https://www.instagram.com/benarief/"
                    class="relative inline-flex items-center justify-center px-1 py-1 text-lg font-bold text-white transition-all duration-200 bg-slate-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#instagram-gradient)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <defs>
                        <linearGradient
                          id="instagram-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stop-color="#833AB4" />
                          <stop offset="50%" stop-color="#FD1D1D" />
                          <stop offset="100%" stop-color="#FCB045" />
                        </linearGradient>
                      </defs>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="w-56 h-32 bg-stone-400 shadow-lg focus:h-[410px] focus:my-0 mx-0 hover:neon-slate max-[500px]focus:neon-slate rounded-md transition-all duration-500 p-4 flex flex-col"
              tabindex="0"
            >
              <div className="flex flex-row justify-between mt-2">
                <img
                  className="w-20 h-20 ring-4 ring-white rounded-lg"
                  src={Jeo}
                />
                <div className="flex flex-col items-center justify-center">
                  <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm mb-2">
                    Jennifer Jeo
                  </h2>
                  <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm">
                    00000082259
                  </h2>
                </div>
              </div>
              <div
                className="overflow-hidden mt-2 flex flex-col items-center transition-all ease-in-out duration-200"
                tabindex="0"
              >
                <p className="mb-2">Meme of the day:</p>
                <img src={MemeJeo} className="w-44 h-44"></img>
                <div class="relative inline-flex group/ig1 mb-6 mt-7">
                  <div class="absolute transitiona-all duration-1000 hover:scale-110 opacity-80 -inset-px bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#FFDC80] rounded-xl blur-lg group-hover/ig1:opacity-100 group-hover/ig1:-inset-1 group-hover/ig1:duration-200 animate-tilt"></div>
                  <a
                    href="https://www.instagram.com/jjeo116/"
                    class="relative inline-flex items-center justify-center px-1 py-1 text-lg font-bold text-white transition-all duration-200 bg-slate-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#instagram-gradient)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <defs>
                        <linearGradient
                          id="instagram-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stop-color="#833AB4" />
                          <stop offset="50%" stop-color="#FD1D1D" />
                          <stop offset="100%" stop-color="#FCB045" />
                        </linearGradient>
                      </defs>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="w-56 h-32 bg-stone-400 shadow-lg focus:h-[410px] focus:my-0 mx-0 hover:neon-slate max-[500px]focus:neon-slate rounded-md transition-all duration-500 p-4 flex flex-col"
              tabindex="0"
            >
              <div className="flex flex-row justify-between mt-2">
                <img
                  className="w-20 h-20 ring-4 ring-white rounded-lg"
                  src={Maul}
                />
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center">
                    <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm mb-2">
                      Maulidya
                    </h2>
                    <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm mb-2">
                      Isnaini
                    </h2>
                  </div>
                  <h2 className="[text-shadow:0_1px_0_rgb(0_0_0/_40%)] font-medium text-sm">
                    00000110172
                  </h2>
                </div>
              </div>
              <div
                className="overflow-hidden mt-2 flex flex-col items-center transition-all ease-in-out duration-200"
                tabindex="0"
              >
                <p className="mb-2">Meme of the day:</p>
                <img src={MemeMaul} className="w-44 h-44"></img>
                <div class="relative inline-flex group/ig1 my-8">
                  <div class="absolute transitiona-all duration-1000 hover:scale-110 opacity-80 -inset-px bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#FFDC80] rounded-xl blur-lg group-hover/ig1:opacity-100 group-hover/ig1:-inset-1 group-hover/ig1:duration-200 animate-tilt"></div>
                  <a
                    href="https://www.instagram.com/jjeo116/"
                    class="relative inline-flex items-center justify-center px-1 py-1 text-lg font-bold text-white transition-all duration-200 bg-slate-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#instagram-gradient)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <defs>
                        <linearGradient
                          id="instagram-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stop-color="#833AB4" />
                          <stop offset="50%" stop-color="#FD1D1D" />
                          <stop offset="100%" stop-color="#FCB045" />
                        </linearGradient>
                      </defs>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConfettiButton />
      </div>
    </Layout>
  );
}
