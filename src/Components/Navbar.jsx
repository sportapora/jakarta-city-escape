export default function Navbar() {
  let href = window.location.href;

  window.onscroll = function () {
    let nav = document.getElementById("nav");
    if (window.pageYOffset >= 75) {
      nav.classList.remove("bg-transparent");
      nav.classList.add("bg-gray-100/50");
    } else {
      nav.classList.add("bg-transparent");
      nav.classList.remove("bg-gray-100/50");
    }
  };

  window.onload = function () {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.remove("hidden");
    }

    var themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  };

  return (
    <nav
      className="w-screen bg-transparent shadow fixed top-0 z-[99] transition-all duration-500 font-worksans font-extralight dark:bg-stone-900"
      id="nav"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-[6rem] py-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center tracking-wide text-2xl font-extrabold whitespace-nowrap dark:text-white">
            Jakarta<span className="font-normal">CityEscape</span>
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:text-stone-400 dark:hover:bg-gray-700 dark:focus:ring-stone-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <button
          id="theme-toggle"
          type="button"
          class="text-gray-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-200 dark:focus:ring-stone-700 rounded-lg text-sm p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-stone-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 peer rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-gray-100"
                aria-current="page"
              >
                Home
              </a>
              <div
                className={`${
                  href === "http://localhost:5173/"
                    ? "w-14 active-underscore ml-3 lg:ml-0"
                    : "ml-3 lg:ml-0 animated-underscore peer-hover:w-14"
                }`}
              ></div>
            </li>
            <li>
              <a
                href="/jelajahi"
                className="block py-2 px-3 text-gray-900 peer rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-gray-100"
              >
                Jelajahi Jakarta di Sini!
              </a>
              <div
                className={`${
                  href === "http://localhost:5173/jelajahi" ||
                  window.location.href.split("/").pop()
                    ? "w-44 active-underscore ml-3 lg:ml-0"
                    : "ml-3 lg:ml-0 animated-underscore peer-hover:w-44"
                }`}
              ></div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 peer rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-gray-100"
              >
                About Devs
              </a>
              <div
                className={`${
                  href === "http://localhost:5173/about-devs"
                    ? "w-24 active-underscore ml-3 lg:ml-0"
                    : "ml-3 lg:ml-0 animated-underscore peer-hover:w-24"
                }`}
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
