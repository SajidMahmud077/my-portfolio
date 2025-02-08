import { useState } from "react";
import logo from "../../assets/portlogo.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
        <a
          href="banner"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-20 w-20" alt="Portfolio Logo" />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <motion.div
                  className="relative inline-block rounded-lg p-[2px]"
                  animate={{
                    background: [
                      "linear-gradient(90deg, #22c55e, #3b82f6)",
                      "linear-gradient(90deg, #3b82f6, #22c55e)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                >
                  <a href="/resume" target="_blank" rel="noopener noreferrer">
                    <button
                      type="button"
                      className="relative px-4 py-2 text-white font-semibold transition-all duration-500 ease-in-out bg-gray-900 rounded-lg w-full border-2 border-transparent hover:border-gray-300"
                    >
                      Resume
                    </button>
                  </a>
                </motion.div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
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
        </div>

      
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="banner"
                smooth={true}
                duration={800}
                className="block py-2 px-3 text-blue-700 hover:underline md:p-0 cursor-pointer"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                className="block py-2 px-3 text-blue-700 hover:underline md:p-0 cursor-pointer"
              >
                About
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 hover:underline md:p-0 cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 hover:underline md:p-0 cursor-pointer"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 hover:underline md:p-0 cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 hover:underline md:p-0 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
