import img from "../../assets/bannerimg.png";
import linkedin from "../../assets/linkedin.png";
import fb from "../../assets/fb.png";
import github from "../../assets/github.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto  rounded-3xl bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-3xl dark:bg-gray-900 mt-12"
    >
      <div className="container px-6 py-10 mx-auto ">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-blue-500 to-purple-300">
              Let’s talk
            </h1>

            <p className="mt-4  dark:text-gray-400">
              Ask us everything and we would love to hear from you
            </p>

            <form className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-smdark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm dark:text-gray-200">
                  Message
                </label>
                <textarea
                  className="block w-full h-20 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-26 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-400 to-blue-400 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Get in Touch
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-44 h-46"
              src={img}
              alt=""
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 truncate w-72 dark:text-gray-400">
                  Dhaka,Bangladesh
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2  truncate w-72 dark:text-gray-400">
                  (+880) 0183446214
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2  truncate w-72 dark:text-gray-400">
                  mahmudsajid366@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className=" dark:text-gray-300 ">Follow us</h3>

              <div className="flex gap-4 mt-4 text-5xl text-center justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="h-9" src={linkedin} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="h-8" src={fb} alt="Facebook" />
                </a>
                <a
                  href="https://github.com/SajidMahmud077"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-8 bg-white rounded-full"
                    src={github}
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
