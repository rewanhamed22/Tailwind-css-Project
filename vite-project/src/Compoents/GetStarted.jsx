import React from "react";

const GetStarted = () => {
  return (
    <div>
      <section className="bg-[#F7F8F9] text-black/80 relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
        <div className="w-full py-16 flex flex-col items-center">
          <h2 className="text-3xl  sm:text-4xl font-semibold text-center ">
            Get started in just a few minutes
          </h2>
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8 ">
            <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
              <img
                src="src/assets/sign-up.4afd242.png"
                alt=""
                className="max-w-[245px] mx-auto"
              />
              <h3 className="text-xl text-neutral-800 font-semibold">
                Sign Up
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Sign up for your free NEFA Wallet on web, iOS or Android and
                follow our easy process to set up your profile
              </p>
            </div>
            <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
              <img
                src="src/assets/fund.93372b0.png"
                alt=""
                className="max-w-[245px] mx-auto"
              />
              <h3 className="text-xl text-neutral-800 font-semibold">Fund</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Choose your preferred payment method such as bank transfer or
                credit card to top up your NEFA Wallet
              </p>
            </div>
            <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
              <img
                src="src/assets/buy-crypto.46d8692.png"
                alt=""
                className="max-w-[245px] mx-auto"
              />
              <h3 className="text-xl text-neutral-800 font-semibold">
                Buy Crypto
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Buy Bitcoin or Ethereum, then securely store it in your Wallet
                or send it on easily to your friends anywhere
              </p>
            </div>
            <img
              src="src/assets/arrow.60f4e50.png"
              alt=""
              className="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            />
            <img
              src="src/assets/arrow.60f4e50.png"
              alt=""
              className="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
