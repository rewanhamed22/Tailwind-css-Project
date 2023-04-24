import React from "react";

const BuyTrade = () => {
  return (
    <section className="w-full bg-white">
      <div className=" relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden">
        <div className="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4 ">
          <h2 className="text-4xl font-semibold sm:pr-8 xl:pr-12 text-black">
            Buy & trade on the <br className="hidden sm:block" />
            original crypto exchange.
          </h2>
          <p className="text-gray-700 tracking-wide leading-relaxed hidden sm:block">
            Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto
            Coin. We accept BTC crypto-currency
          </p>
          <div className="space-y-6 lg:pr-12">
            <div className="flex items-center space-x-4">
              <div className="lg:max-w-[336px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
                <span className="text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]">
                  {" "}
                  Amount{" "}
                </span>
                <input
                  type="number"
                  name="amount"
                  value="5.000"
                  className="w-full bg-inherit text-black/80 text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0"
                ></input>
              </div>
              <div className="relative w-full max-w-[106px] sm:max-w-[159px]">
                <button
                  type="button"
                  className="w-full text-black/80 flex items-center justify-center space-x-1 relative sm:px-6 py-[1.35rem] border border-[#0c66ee] rounded-xl text-sm font-medium"
                >
                  <img
                    src="src/assets/eng.52eb53e.png"
                    alt=""
                    className="flex-shrink-0 h-6 w-6 rounded-full"
                  />
                  <span className="ml-3 block truncate">USD</span>
                  <span
                    aria-hidden="true"
                    role="img"
                    class="material-design-icon chevron-down-icon"
                  >
                    <svg
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      class="material-design-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                    </svg>
                  </span>
                </button>{" "}
                <ul
                  tabindex="-1"
                  class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm border border-[#0c66ee]"
                >
                  <li
                    id="listbox-option-0"
                    role="option"
                    className="text-gray-900 cursor-default select-none relative px-3 sm:px-5 py-2"
                  >
                    <div className="flex items-center">
                      <img
                        src="src/assets/eng.52eb53e.png"
                        alt=""
                        className="flex-shrink-0 h-6 w-6 rounded-full"
                      />{" "}
                      <span className="font-normal ml-3 block truncate">
                        {" "}
                        USD{" "}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="lg:max-w-[336px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
              <span className="text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]">
                {" "}
                Get{" "}
              </span>
              <input
                type="number"
                name="get"
                value="0.10901"
                className="w-full bg-inherit text-black/80 text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="relative w-full max-w-[106px] sm:max-w-[159px]">
              <button
                type="button"
                className="w-full flex text-black/80 items-center justify-center space-x-1 relative sm:px-6 py-[1.35rem] border border-[#0c66ee] rounded-xl text-sm font-medium"
              >
                <img
                  src="src/assets/bitcoin.2efeba4.png"
                  alt=""
                  className="flex-shrink-0 h-6 w-6 rounded-full"
                />
                <span className="ml-3 block truncate">BTC</span>
                <span
                  aria-hidden="true"
                  role="img"
                  className="material-design-icon chevron-down-icon"
                >
                  <svg
                    fill="currentColor"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="material-design-icon__svg"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <button className=" text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 w-full px-5 py-4 bg-[#0c66ee] border-[#0c66ee] text-white text-base font-medium" >Buy Now</button>
        </div>

        <div className="col-span-12 lg:col-span-6 hidden sm:block -ml-8  mt-4 sm:-mt-4 ">
          <div className="">
            <img src="src/assets/buy-and-trade.69b9f7b.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyTrade;
