import React from "react";
import { motion } from "framer-motion"
const Credit = () => {
  return (
    <div>
      <section className="w-full my-36">
        <motion.div   initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }} className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden ">
          <div className="col-span-12 lg:col-span-7">
            <div className="w-full">
              <img
                src="src/assets/nefa-cc.4277338.webp"
                alt=""
                className="w-[95%]"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
            <h2 className="text-4xl text-black/80 font-semibold">
              Introducing the <span className="text-[#0c66ee]">NEFA</span>{" "}
              Credit Card
            </h2>
            <p className="text-gray-700 tracking-wide leading-relaxed hidden sm:block">
              Subject to cardholder and rewards terms which will be available at
              application.
            </p>
            <ul className="space-y-4 sm:space-y-2 text-black/80">
              <li className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span
                    aria-hidden="true"
                    role="img"
                    className="material-design-icon check-circle-icon text-[#0c66ee]"
                  >
                    <svg
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="material-design-icon__svg"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
                    </svg>
                  </span>{" "}
                  <span>Up to 3% back on purchases</span>
                </div>{" "}
              </li>{" "}
              <li className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span
                    aria-hidden="true"
                    role="img"
                    class="material-design-icon check-circle-icon text-[#0c66ee]"
                  >
                    <svg
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      class="material-design-icon__svg"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
                    </svg>
                  </span>{" "}
                  <span>Earn rewards in bitcoin or any crypto on NEFA</span>
                </div>{" "}
              </li>{" "}
              <li className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span
                    aria-hidden="true"
                    role="img"
                    className="material-design-icon check-circle-icon text-[#0c66ee]"
                  >
                    <svg
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      class="material-design-icon__svg"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
                    </svg>
                  </span>{" "}
                  <span>No annual fee</span>
                </div>{" "}
              </li>
            </ul>{" "}
            <button className="text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-[#0c66ee] border border-[#0c66ee] text-base">
              Join the waitlist
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Credit;
