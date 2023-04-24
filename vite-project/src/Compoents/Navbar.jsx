import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="relative z-10 w-full text-neutral-800 bg-[#E7F9FF]" id="Navbar">
        <div className="flex  flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
          <div class="flex flex-col lg:flex-row items-center space-x-6 xl:space-x-8">
            <div className="w-full flex flex-row items-center justify-between py-6">
              <div>
                <img
                  src="src/assets/nefa.37ff23e.svg"
                  className="w-50% lg:w-28 "
                  alt="logo"
                />
              </div>
              <ul className="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0">
                <li className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                  <a href="#">Cryptocurrency</a>
                </li>
                <li className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                  <a href="#">Exchanges</a>
                </li>
                <li className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                  <a href="#">Watchlist</a>
                </li>
                <li className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                  <a href="#">NFT</a>
                </li>
                <li className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                  <a href="#">Portfolio</a>
                </li>
                <li className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                  <span>Products</span>
                  <button className="top-4 px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex space-x-4  ">
            <button className="px-8 xl:px-10 py-3 mt-2  bg-inherit  border rounded-full text-[#0c66ee] border-[#0c66ee] text-sm text-center  hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300">
              Login
            </button>
            <button className="px-8 xl:px-10 py-3 mt-2    rounded-full text-white bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-sm text-center hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300">
              SignUp
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
