import Layout from "../Layout.jsx";
import Confetti from "../Components/Confetti.jsx";
import MemeHenry from "/assets/MemeHenry.jpg";
import MemeMaul from "/assets/MemeMaul.jpg";
import MemeBen from "/assets/MemeBen.jpg";
import MemeJeo from "/assets/MemeJeo.jpg";
import PP from "/assets/Profile.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiChevronsDown } from "react-icons/fi";

export default function AboutDevs() {
  return (
    <Layout>
      <div>
        <div className="flex lg:items-center justify-center min-h-screen">
          <div className="mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 rounded-lg max-w-screen-lg mx-auto">
              <div className="text-5xl font-extralight">
                <h1 className="font-bold">THE MAGIC DEVS</h1>
                <p className="mt-4">YOU&apos;VE BEEN</p>
                <p className="mt-4">SEARCHING FOR</p>
              </div>
              <div>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione repellendus, quasi illo cum culpa quas perferendis
                  iusto tempora repudiandae hic.
                </p>
                <Confetti />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              <img src={PP} className="w-full h-auto " />
              <img src={PP} className="w-full h-auto " />
              <img src={PP} className="w-full h-auto " />
              <img src={PP} className="w-full h-auto " />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-8">
              <div
                className="w-72 h-24 pt-2 bg-white shadow-md rounded-2xl focus:h-[520px] focus:max-[500px] transition-all duration-500 flex flex-col transform -translate-y-20"
                tabIndex="0"
              >
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2">
                    <h1 className="font-bold">Henry Salim</h1>
                    <p className="font-extralight">00000079925</p>
                  </div>

                  <div className="flex justify-end p-5">
                    <FiChevronsDown />
                  </div>
                </div>

                <div
                  className="overflow-hidden mt-2 flex flex-col items-center transition-all ease-in-out duration-200"
                  tabIndex="0"
                >
                  <p className="mb-2 mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam, cumque?
                  </p>
                  <p className="mb-2 mt-5">Meme of the day:</p>
                  <img
                    src={MemeHenry}
                    className="w-52 h-52 ring-1 ring-black"
                  />

                  <div className="flex mt-10 space-x-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="w-72 h-24 pt-2 bg-white shadow-md rounded-2xl focus:h-[520px] focus:max-[500px] transition-all duration-500 flex flex-col transform -translate-y-20"
                tabIndex="0"
              >
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2">
                    <h1 className="font-bold">Ben Arief M.</h1>
                    <p className="font-extralight">00000081977</p>
                  </div>

                  <div className="flex justify-end p-5">
                    <FiChevronsDown />
                  </div>
                </div>

                <div
                  className="overflow-hidden mt-2 flex flex-col items-center transition-all ease-in-out duration-200"
                  tabIndex="0"
                >
                  <p className="mb-2 mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam, cumque?
                  </p>
                  <p className="mb-2 mt-5">Meme of the day:</p>
                  <img src={MemeBen} className="w-52 h-52 ring-1 ring-black" />

                  <div className="flex mt-10 space-x-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="w-72 h-24 pt-2 bg-white shadow-md rounded-2xl focus:h-[520px] focus:max-[500px] transition-all duration-500 flex flex-col transform -translate-y-20"
                tabIndex="0"
              >
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2">
                    <h1 className="font-bold">Jennifer Jeo</h1>
                    <p className="font-extralight">00000082259</p>
                  </div>

                  <div className="flex justify-end p-5">
                    <FiChevronsDown />
                  </div>
                </div>

                <div
                  className="overflow-hidden mt-2 flex flex-col items-center transition-all ease-in-out duration-200"
                  tabIndex="0"
                >
                  <p className="mb-2 mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam, cumque?
                  </p>
                  <p className="mb-2 mt-5">Meme of the day:</p>
                  <img src={MemeJeo} className="w-52 h-52 ring-1 ring-black" />

                  <div className="flex mt-10 space-x-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="w-72 h-24 pt-2 bg-white shadow-md rounded-2xl focus:h-[520px] focus:max-[500px] transition-all duration-500 flex flex-col transform -translate-y-20"
                tabIndex="0"
              >
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2">
                    <h1 className="font-bold">Maulidya I.</h1>
                    <p className="font-extralight">00000110172</p>
                  </div>

                  <div className="flex justify-end p-5">
                    <FiChevronsDown />
                  </div>
                </div>

                <div
                  className="overflow-hidden mt-2 flex flex-col items-center transition-all ease-in-out duration-200"
                  tabIndex="0"
                >
                  <p className="mb-2 mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam, cumque?
                  </p>
                  <p className="mb-2 mt-5">Meme of the day:</p>
                  <img src={MemeMaul} className="w-52 h-52 ring-1 ring-black" />

                  <div className="flex mt-10 space-x-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/yourusername"
                      target="_blank"
                      className="social-icon text-gray-800 hover:text-blue-600"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
