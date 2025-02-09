import { motion } from "framer-motion";
import project1 from "../../assets/projectsimg/movies.png";
import project2 from "../../assets/projectsimg/freelance.png";
import project3 from "../../assets/projectsimg/mealsphere.png";
import { TbLocationFilled } from "react-icons/tb";
import jsLogo from "../../assets/techlogo/js.png";
import reactLogo from "../../assets/techlogo/react.png";
import tailwindLogo from "../../assets/techlogo/tailwind.png";
import expressLogo from "../../assets/techlogo/express.png";
import mongoLogo from "../../assets/techlogo/mongo.png";
import nodejsLogo from "../../assets/techlogo/nodejs.png";
import gitLogo from "../../assets/techlogo/git.png";
import htmlLogo from "../../assets/techlogo/html.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto rounded-3xl bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-3xl py-12 dark:bg-gray-900 mt-12"
    >
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-blue-500 to-purple-300"
          >
            My Projects
          </motion.h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
          <motion.div
            className="relative max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-gradient-to-r hover:from-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <a
              href="https://moviescloud-live.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-t-lg"
                src={project1}
                alt="MoviesCloud Thumbnail"
              />
            </a>
            <div className="p-6">
              <h5 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
                MoviesCloud
              </h5>
              <p className="mt-2 text-gray-300">
                Explore a vibrant portal showcasing the latest and most popular
                movies. MoviesCloud provides an immersive experience for movie
                enthusiasts.
              </p>
              <div className=" flex gap-2 justify-center p-4">
                <button>
                  <img className="h-6 w-8" src={tailwindLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={jsLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={reactLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={gitLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={htmlLogo} alt="" />
                </button>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <a
                  href="https://movies--cloud.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
                >
                  Live Site
                  <TbLocationFilled className="text-xl" />
                </a>
                <a
                  href="https://github.com/your-repo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-yellow-500 hover:to-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-gradient-to-r hover:from-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <a
              href="https://freelance-expert-live.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-t-lg"
                src={project2}
                alt="Freelance Expert Thumbnail"
              />
            </a>
            <div className="p-6">
              <h5 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
                Freelance Expert
              </h5>
              <p className="mt-2 text-gray-300">
                Freelance Expert provides various services to help clients
                achieve their goals efficiently. Explore top-notch freelance
                solutions here!
              </p>
              <div className=" flex gap-2 justify-center p-4">
                <button>
                  <img className="h-6 w-8" src={tailwindLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={jsLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={reactLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={nodejsLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={expressLogo} alt="" />
                </button>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <a
                  href="https://freelance-expert.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
                >
                  Live Site
                  <TbLocationFilled className="text-xl" />
                </a>
                <a
                  href="https://github.com/your-repo2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-yellow-500 hover:to-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-gradient-to-r hover:from-green-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <a
              href="https://mealsphere-live.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-t-lg"
                src={project3}
                alt="Mealsphere Thumbnail"
              />
            </a>
            <div className="p-6">
              <h5 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text tracking-tight">
                Mealsphere
              </h5>
              <p className="mt-2 text-gray-300">
                Mealsphere is a hostel management system tailored to simplify
                meal management for university students.
              </p>
              <div className=" flex gap-2 justify-center p-4">
                <button>
                  <img className="h-6 w-8" src={tailwindLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={jsLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={reactLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={mongoLogo} alt="" />
                </button>
                <button>
                  <img className="h-6 w-8" src={expressLogo} alt="" />
                </button>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href="https://meals-sphere.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 text-white bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
                >
                  Live Site
                  <TbLocationFilled className="text-xl" />
                </a>
                <a
                  href="https://github.com/your-repo3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-purple-500 hover:to-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
