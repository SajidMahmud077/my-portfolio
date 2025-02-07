import bannerimg from "../../assets/bannerimg.png";
import linkedin from "../../assets/linkedin.png";
import fb from "../../assets/fb.png";
import github from "../../assets/github.jpg";

const Banner = () => {
  return (
    <div id='banner' className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-2xl h-[780px] lg:h-[650px]  mt-12 md:mt-28 md:w-2/3 mx-auto">
      <div className=" dark:bg-gray">
        <div className="h-[600px] container px-8 py-16 mx-auto">
          <div className="lg:flex lg:flex-row-reverse lg:items-center">
          
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 lg:py-16">
              <div className="relative p-[5px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-200">
                <img
                  className="w-[370px] h-[360px] object-cover rounded-full  p-1"
                  src={bannerimg}
                  alt="Catalogue"
                />
              </div>
            </div>

            
            <div className="w-full lg:w-2/3">
              <div className="mt-6 md:mt-0 lg:max-w-lg">
                <h1 className="text-3xl font-semibold mb-4 text-white dark:text-white md:text-5xl">
                  Hello, I m <span className="text-5xl font-bold">Sajid</span>{" "}
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                    Frontend Developer
                  </span>
                </h1>
                <p className="mt-3 text-gray-400 dark:text-gray-400">
                  Bringing visions to life with creative and dynamic web
                  development
                </p>

                <div className="flex gap-4 mt-4 text-5xl text-center justify-center lg:justify-start">
                  <a href="">
                    <img className="h-9 " src={linkedin} alt="" />
                  </a>
                  <a href="">
                    <img className="h-8" src={fb} alt="" />
                  </a>
                  <a href="">
                    <img
                      className="h-8 bg-white rounded-full"
                      src={github}
                      alt=""
                    />
                  </a>
                </div>

                <div className='text-center lg:text-left mt-4 lg:mt-8'>
                <button
                  type="button"
                  className=" lg:w-auto px-10 py-3 mt-6 text-sm text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg  text-center me-2 mb-12"
                >
                  Resume
                </button>
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
