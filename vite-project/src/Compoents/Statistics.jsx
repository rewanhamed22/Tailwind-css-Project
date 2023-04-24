import React from "react";

const Statistics = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6 xl:border-r border-gray-200 lg:px-8 ">
            <div className="w-full flex items-center justify-between">
              <span className="font-medium">🔥 Trending</span>
              <button
                href="#"
                className="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300"
              >
                <span>More</span>{" "}
                <span
                  aria-hidden="true"
                  role="img"
                  className="material-design-icon chevron-right-icon"
                >
                  <svg
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="material-design-icon__svg"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-sm font-medium text-gray-500">
                          Name
                        </th>
                        <th className="text-left text-sm font-medium text-gray-500">
                          Price
                        </th>
                        <th className="hidden sm:block text-left text-sm font-medium text-gray-500">
                          Chart
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" />
                            <span>Bitcoin</span>
                          </div>
                        </td>
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$43180.13</span>
                          </div>
                        </td>
                        <td className="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" /> <span>Ethereum</span>
                          </div>
                        </td>{" "}
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon minus-thick-icon text-red-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="material-design-icon__svg"
                              >
                                <path d="M20 14H4V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$3480.65</span>
                          </div>
                        </td>
                        <td className="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" /> <span>Solana</span>
                          </div>
                        </td>{" "}
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$150.2</span>
                          </div>
                        </td>
                        <td className="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" />
                            <span>Dogecoin</span>
                          </div>
                        </td>{" "}
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>
                            <span>$0.1572</span>
                          </div>
                        </td>{" "}
                        <td className="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6 xl:border-r border-gray-200 lg:px-8 ">
            <div className="w-full flex items-center justify-between">
              <span className="font-medium">🚀 Top Gainers</span>
              <button
                href="#"
                className="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300"
              >
                <span>More</span>{" "}
                <span
                  aria-hidden="true"
                  role="img"
                  className="material-design-icon chevron-right-icon"
                >
                  <svg
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="material-design-icon__svg"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-sm font-medium text-gray-500">
                          Name
                        </th>
                        <th className="text-left text-sm font-medium text-gray-500">
                          Price
                        </th>
                        <th className="hidden sm:block text-left text-sm font-medium text-gray-500">
                          Chart
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" /> <span>PAPPAY</span>
                          </div>
                        </td>{" "}
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$0.00374</span>
                          </div>
                        </td>{" "}
                        <td className="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" /> <span>Bitcoin Asia</span>
                          </div>
                        </td>
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$0.02096</span>
                          </div>
                        </td>
                        <td className="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" />
                            <span>MoonRock</span>
                          </div>
                        </td>{" "}
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$0.004907</span>
                          </div>
                        </td>
                        <td className="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" /> <span>NinjaFloki</span>
                          </div>
                        </td>{" "}
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$0.000123</span>
                          </div>
                        </td>{" "}
                        <td className="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6 lg:px-8 "
          >
            <div className="w-full flex items-center justify-between">
              <span className="font-medium">💎 Recently Added</span>{" "}
              <button
                href="#"
                className="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300"
              >
                <span>More</span>{" "}
                <span
                  aria-hidden="true"
                  role="img"
                  className="material-design-icon chevron-right-icon"
                >
                  <svg
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="material-design-icon__svg"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                  </svg>
                </span>
              </button>
            </div>{" "}
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-sm font-medium text-gray-500">
                          Name
                        </th>{" "}
                        <th className="text-left text-sm font-medium text-gray-500">
                          Price
                        </th>{" "}
                        <th className="hidden sm:block text-left text-sm font-medium text-gray-500">
                          Chart
                        </th>
                      </tr>
                    </thead>{" "}
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" />
                            <span>MetaCraft</span>
                          </div>
                        </td>{" "}
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <span aria-hidden="true" role="img" className="material-design-icon minus-thick-icon text-red-500">
                                                                                                                            <svg fill="currentColor" width="14" height="14" viewBox="0 0 24 24" className="material-design-icon__svg">
                                                                                                                                <path d="M20 14H4V10H20V14Z">
                                                                                                                        </path></svg>
                                                                                                                        </span>  */}
                            <span>$0.0608</span>
                          </div>
                        </td>{" "}
                        <td class="hidden sm:block whitespace-nowrap">
                          <div>
                            <div class="w-28 h-12 -mx-2">
                              <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                  <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                  <div class=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                class="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-gray-200">
                        <td class="py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <img src="" alt="" /> <span>Frog</span>
                          </div>
                        </td>{" "}
                        <td className="py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              className="material-design-icon minus-thick-icon text-red-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                class="material-design-icon__svg"
                              >
                                <path d="M20 14H4V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$0.5875</span>
                          </div>
                        </td>{" "}
                        <td class="hidden sm:block whitespace-nowrap">
                          <div>
                            <div class="w-28 h-12 -mx-2">
                              <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                  <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                  <div class=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                class="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-gray-200">
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center space-x-2">
                            <img src="" alt="" /> <span>Musk Doge</span>
                          </div>
                        </td>{" "}
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              class="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                class="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$0.04041</span>
                          </div>
                        </td>{" "}
                        <td class="hidden sm:block whitespace-nowrap">
                          <div>
                            <div className="w-28 h-12 -mx-2">
                              <div className="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                  <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                  <div class=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                class="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-gray-200">
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center space-x-2">
                            {" "}
                            <span>2SHARE</span>
                          </div>
                        </td>{" "}
                        <td class="py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <span
                              aria-hidden="true"
                              role="img"
                              class="material-design-icon plus-thick-icon text-emerald-500"
                            >
                              <svg
                                fill="currentColor"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                class="material-design-icon__svg"
                              >
                                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path>
                              </svg>
                            </span>{" "}
                            <span>$1366.24</span>
                          </div>
                        </td>{" "}
                        <td class="hidden sm:block whitespace-nowrap">
                          <div>
                            <div class="w-28 h-12 -mx-2">
                              <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                  <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                  <div class=""></div>
                                </div>
                              </div>
                              <canvas
                                id="line-chart"
                                width="140"
                                height="60"
                                style="display: block; height: 48px; width: 112px;"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
