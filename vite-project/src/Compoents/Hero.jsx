import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <div className="w-full pb-24 ">
        <div className="flex flex-col lg:flex-row   mx-auto ">
          <div className="mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-48 text-center sm:text-left w-2/3">
            <div className="font-semibold uppercase text-[#0c66ee]">
              Sign Up Today
            </div>
            <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold text-black leading-tight capitalize sm:pr-8 xl:pr-10">
              The World's {" "}<br></br>
              <span className="text-[#0c66ee]">
                FastestGrowing {" "}
              </span>
              CryptoWebApp
            </h1>
            <p className="text-gray-700 tracking-wide leading-relaxed hidden sm:block">
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using{" "}
              <br></br> bank transfers or your credit/debit card.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
              <button className="rounded-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300">
                Get Started
              </button>
              <button className="flex flex-row px-8 py-4 bg-inherit  border rounded-full text-[#0c66ee] border-[#0c66ee] text-sm text-center  hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300">
                Download App
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="4"
                  stroke="currentColor"
                  class="w-3 h-3 mt-2 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden sm:block w-1/2  -ml-8 -mt-12 ">
            <div className="">
              <img src="src/assets/hero-image.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
