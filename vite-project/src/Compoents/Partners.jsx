import React from "react";

const Partners = () => {
  return (
    <div>
      <section className="bg-[#F7F8F9] relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
        <div className="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-2xl text-neutral-800 font-semibold ">
            Trusted Partners Worldwide
          </h3>
          <p className="text-gray-700 tracking-wide leading-relaxed hidden sm:block ">
            We're partners with countless major organizations around the globe
          </p>
          <div className="flex flex-wrap items-center justify-center aos-init">
            <div>
              <img
                src="src/assets/clever.png"
                alt=""
                className="sm:w-1/2 lg:w-72 mx-auto"
              />
            </div>
            <div>
              <img
                src="src/assets/diamon.png"
                alt=""
                class="sm:w-1/2 lg:w-72 mx-auto"
              />
            </div>
            <div>
              <img
                src="src/assets/swiss.png"
                alt=""
                class="sm:w-1/2 lg:w-72 mx-auto"
              />
            </div>
            <div>
              <img
                src="src/assets/gambio.png"
                alt=""
                class="sm:w-1/2 lg:w-72 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
