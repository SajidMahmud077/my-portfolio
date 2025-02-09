import logo from "../../assets/portlogo.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto rounded-3xl bg-gradient-to-r from-black via-gray-900 to-gray-800  dark:bg-gray-900 mt-12">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="portfolio"
              className="flex justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-24 w-24" alt="Logo" />
            </a>
          </div>
          <div className="text-center">
            <hr className="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="#" className="hover:underline">
                Sajid™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
