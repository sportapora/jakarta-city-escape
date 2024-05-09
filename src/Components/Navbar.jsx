export default function Navbar() {
    let href = window.location.href;

    window.onscroll = function () {
        let nav = document.getElementById("nav");
        if (window.pageYOffset >= 75) {
            nav.classList.remove("bg-transparent")
            nav.classList.add("bg-gray-100/50")
        } else {
            nav.classList.add("bg-transparent")
            nav.classList.remove("bg-gray-100/50")
        }
    }

    return (
        <nav
            className="w-screen bg-transparent shadow fixed top-0 z-[99] transition-all duration-500 font-worksans font-extralight"
            id="nav">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-[6rem] py-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/*<img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>*/}
                    <span
                        className="self-center tracking-wide text-2xl font-extrabold whitespace-nowrap dark:text-white">Jakarta<span
                        className="font-normal">CityEscape</span></span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/"
                               className="block py-2 px-3 text-gray-900 peer rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                               aria-current="page">Home</a>
                            <div
                                className={`${href === 'http://localhost:5173/' || href === 'http://localhost:5173/#welcome' ? 'w-14 active-underscore ml-3 lg:ml-0' : 'ml-3 lg:ml-0 animated-underscore peer-hover:w-14'}`}></div>
                        </li>
                        <li>
                            <a href="/jelajahi"
                               className="block py-2 px-3 peer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Jelajahi
                                Jakarta di Sini!</a>
                            <div
                                className={`${href === 'http://localhost:5173/jelajahi' || window.location.href.split("/").pop() ? 'w-44 active-underscore ml-3 lg:ml-0' : 'ml-3 lg:ml-0 animated-underscore peer-hover:w-44'}`}></div>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-gray-900 peer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About
                                Devs</a>
                            <div
                                className={`${href === 'http://localhost:5173/about-devs' ? 'w-12 active-underscore ml-3 lg:ml-0' : 'ml-3 lg:ml-0 animated-underscore peer-hover:w-24'}`}></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}