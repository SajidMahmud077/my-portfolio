import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id='education' className="container mx-auto rounded-3xl mt-12 py-16 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        >
          Education
        </motion.h2>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-8">

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center p-8 bg-gradient-to-r from-orange-300 to-purple-700 rounded-xl shadow-xl transform hover:scale-105 transition-all"
        >
          <div className="w-full text-center">
            <motion.h3
              className="text-4xl font-semibold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              BSC
            </motion.h3>
            <p className="text-lg text-gray-200">Northern University</p>
            <p className="text-md text-gray-300 mb-4"> Computer Science</p>
            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Duration: 4 Years | Present
            </motion.p>
          </div>
        </motion.div>

  
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center p-8 bg-gradient-to-r from-green-400 via-teal-600 to-blue-400 rounded-xl shadow-xl transform hover:scale-105 transition-all"
        >
          <div className="w-full text-center">
            <motion.h3
              className="text-4xl font-semibold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              DIPLOMA
            </motion.h3>
            <p className="text-lg text-gray-200">Ahsanullah Polytechnic Institute</p>
            <p className="text-md text-gray-300 mb-4"> Computer Engineering</p>
            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Duration: 4 Years | Graduation Year: 2024
            </motion.p>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center p-8 bg-gradient-to-r from-yellow-500 via-orange-500 text-orange-400 rounded-xl shadow-xl transform hover:scale-105 transition-all"
        >
          <div className="w-full text-center">
            <motion.h3
              className="text-4xl font-semibold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              SSC 
            </motion.h3>
            <p className="text-lg text-gray-200">Badda High School</p>
            <p className="text-md text-gray-300 mb-4">Business Study</p>
            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
                Passing Year: 2019
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
