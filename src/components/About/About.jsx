import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section id="about" className="py-10 px-6 md:px-12 lg:px-32 xl:px-48 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white flex justify-center items-center ">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto shadow-3xl p-12 rounded-3xl  bg-gradient-to-r from-black via-gray-900 to-gray-800">
        <h2 
          className="text-4xl md:text-5xl font-extrabold text-gray-200 relative 
          md:text-left md:before:content-[''] md:before:absolute md:before:-bottom-2 md:before:left-0 
          md:before:w-24 md:before:h-1 md:before:bg-gradient-to-r md:before:from-purple-500 md:before:to-blue-500 
          text-center"
        >
          About Me
        </h2>
        <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          I am <span className="text-white font-semibold">Sajid Mahmud</span>, a passionate 
          <motion.span 
            className="font-extrabold bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >Full Stack Developer</motion.span>, dedicated to crafting visually appealing and interactive web experiences.
          With a keen eye for design and a deep understanding of modern web technologies, I create seamless 
          user interfaces that merge aesthetics with functionality. My journey in frontend development is driven by 
          innovation, precision, and a commitment to delivering high-quality digital experiences.
        </p>
      </motion.div>
    </section>
          
    </div>
  );
};

export default About;