import React from "react";

const Tools = () => {
  return (
    <div>
      <section className="bg-[#F7F8F9] relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
        <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6 sm:hidden">
            <div className="w-full sm:mt-20 xl:mt-0">
              <img
                src="https://i.ibb.co/S7XrX9X/advanced-trading-tools-4f95ae5.webp"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-8 text-black/80 sm:space-y-6 px-4 sm:px-6 mt-8">
            <h2 className="text-4xl text-black font-semibold">
              Advanced Trading{" "}
              <span className="text-[#4A8FF6]">Tools</span>
            </h2>
            <div className="space-y-2">
              <h4 className="text-lg font-medium">
                Professional Access, Non-stop Availability
              </h4>
              <p className="paragraph text-sm xl:text-base">
                We provide premium access to crypto trading for both individuals
                and institutions through high liquidity, reliable order
                execution and constant uptime.
              </p>
            </div>{" "}
            <div className="space-y-2">
              <h4 className="text-lg font-medium">A Range of Powerful Apis</h4>{" "}
              <p className="paragraph text-sm xl:text-base">
                Set up your own trading interface or deploy your algorithmic
                strategy with our high-performance FIX and HTTP APIs. Connect to
                our WebSocket for real-time data streaming.
              </p>
            </div>{" "}
            <div className="space-y-2">
              <h4 className="text-lg font-medium">Customer Support</h4>{" "}
              <p className="paragraph text-sm xl:text-base">
                Premium 24/7 support available to all customers worldwide by
                phone or email. Dedicated account managers for partners.
              </p>
            </div>{" "}
            <div className="flex flex-col sm:flex-row">
              <button className=" text-center text-[#4A8FF6] rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
                Get Started
              </button>{" "}
              <button className="text-sm   hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">
                Learn More
              </button>
            </div>
          </div>{" "}
          <div
            data-aos="fade-left"
            className="col-span-12 lg:col-span-6 hidden sm:block aos-init aos-animate"
          >
            <div className="w-full sm:mt-20 xl:mt-0">
              <img
                src="src/assets/advanced-trading-tools.4f95ae5.webp"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
