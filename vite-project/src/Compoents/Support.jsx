import React from "react";

const Support = () => {
  return (
    <div>
      <section className="w-full my-24 " >
        <div className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden">
          <div className="col-span-12 lg:col-span-6 ">
            <div className="w-full">
              <img
                src="src/assets/faq.05e12ee.webp"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8 text-black/90">
            <span className="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">
              Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
              Frequently asked questions
            </h2>
            <ul className="shadow-box">
              <li className="relative border-b-2 border-gray-200">
                <button type="button" className="w-full py-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      Why should I choose NEFA?
                    </span>
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
                  </div>
                </button>
              </li>
              <li className="relative border-b-2 border-gray-200">
                <button type="button" className="w-full py-4 text-left">
                  <div class="flex items-center justify-between">
                    <span class="font-medium">How secure is NEFA?</span>{" "}
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
                  </div>
                </button>
              </li>
              <li className="relative border-b-2 border-gray-200">
                <button type="button" className="w-full py-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      Do I have to buy a whole Bitcoin?
                    </span>
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
                  </div>
                </button>
              </li>
              <li class="relative border-b-2 border-gray-200">
                <button type="button" className="w-full py-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      How do I actually buy Bitcoin?
                    </span>
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
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
