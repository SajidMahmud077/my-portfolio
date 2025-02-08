import bannerimg from "../../assets/bannerimg.png";
import linkedin from "../../assets/linkedin.png";
import fb from "../../assets/fb.png";
import github from "../../assets/github.jpg";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

const Banner = () => {
  return (
    <div id='banner' className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-2xl h-[780px] lg:h-[650px] mt-12 md:mt-28 md:w-2/3 mx-auto">
    <div className="dark:bg-gray">
      <div className="h-[600px] container px-8 py-16 mx-auto">
        <div className="lg:flex lg:flex-row-reverse lg:items-center">
        
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 lg:py-16">
            <div className="relative p-[5px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-200">
              <img
                className="w-[370px] h-[360px] object-cover rounded-full p-1"
                src={bannerimg}
                alt="Catalogue"
              />
            </div>
          </div>
  
          <div className="w-full lg:w-2/3">
            <div className="mt-6 md:mt-0 lg:max-w-lg">
              <motion.h1
                className="text-3xl md:text-5xl font-semibold text-white dark:text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Hello, I am{" "}
                <span className="text-5xl font-bold text-green-400">Sajid</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </motion.h1>
              <p className="mt-3 text-gray-300 md:text-lg">
                Bringing visions to life with creative and dynamic web development
              </p>
  
              <div className="flex gap-4 mt-4 text-5xl text-center justify-center lg:justify-start">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img className="h-9" src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img className="h-8" src={fb} alt="Facebook" />
                </a>
                <a href="https://github.com/SajidMahmud077" target="_blank" rel="noopener noreferrer">
                  <img className="h-8 bg-white rounded-full" src={github} alt="GitHub" />
                </a>
              </div>
  
              <div className="text-center lg:text-left mt-4 lg:mt-8">
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
                  <a className='' href="https://drive.google.com/file/d/1zEQTfsp2UV1KxDTBdR4yYcy41dOpjxMJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button
                      type="button"
                      className="flex gap-2 relative px-12 py-2 text-white font-semibold transition-all duration-500 ease-in-out bg-gray-900 rounded-lg w-full border-2 border-transparent hover:border-gray-300"
                    >
                      
                      <IoMdDownload className='text-xl' />Download CV
                    </button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Banner;
