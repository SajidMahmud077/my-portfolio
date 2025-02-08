import { motion } from "framer-motion";
import htmlLogo from "../../assets/techlogo/html.png";
import jsLogo from "../../assets/techlogo/js.png";
import reactLogo from "../../assets/techlogo/react.png";
import tailwindLogo from "../../assets/techlogo/tailwind.png";
import expressLogo from "../../assets/techlogo/express.png";
import mongoLogo from "../../assets/techlogo/mongo.png";
import nodejsLogo from "../../assets/techlogo/nodejs.png";
import gitLogo from "../../assets/techlogo/git.png";

const Skills = () => {
  return (
    <section id='skills' className="container mx-auto rounded-3xl  py-16 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-clip-text text-white"
        >
          Skills & Expertise
        </motion.h2>
        <p className="mt-4 text-lg text-gray-400">
          Technologies I excel in for building modern and scalable web applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-20 h-20 bg-gradient-to-r  from-yellow-400 to-black rounded-full flex items-center justify-center">
            <img src={htmlLogo} alt="HTML" className="w-12 h-12 bg-white rounded-full" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-300">HTML</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-black rounded-full flex items-center justify-center">
            <img src={jsLogo} alt="JavaScript" className="w-12 h-12 bg-white rounded-full" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-300">JavaScript</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-black rounded-full flex items-center justify-center">
            <img src={reactLogo} alt="React" className="w-12 h-12 bg-white rounded-full" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-300">React</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-black rounded-full flex items-center justify-center">
            <img src={tailwindLogo} alt="Tailwind CSS" className="w-12 h-12 bg-white rounded-full" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-300">Tailwind CSS</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-black rounded-full flex items-center justify-center">
            <img src={expressLogo} alt="Express.js" className="w-12 h-12 bg-white rounded-full" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-300">Express.js</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-black rounded-full flex items-center justify-center">
            <img src={mongoLogo} alt="MongoDB" className="w-12 h-12 bg-white rounded-full" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-300">MongoDB</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-black rounded-full flex items-center justify-center">
            <img src={nodejsLogo} alt="Node.js" className="w-12 h-12 bg-white rounded-full" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-300">Node.js</h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-black rounded-full flex items-center justify-center">
            <img src={gitLogo} alt="Git" className="w-12 h-12 bg-white rounded-full" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-300">Git</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
