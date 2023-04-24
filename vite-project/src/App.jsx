import Hero from "./Compoents/Hero";
import Navbar from "./Compoents/Navbar";
import BuyTrade from "./Compoents/BuyTrade";
import Footer from "./Compoents/Footer";
import Support from "./Compoents/Support";
import Statistics from "./Compoents/Statistics";
import Partners from "./Compoents/Partners";
import Credit from "./Compoents/Credit";
import Tools from "./Compoents/Tools";
import Industry from "./Compoents/Industry";
import GetStarted from "./Compoents/GetStarted";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Statistics /> */}
      <BuyTrade />
      <Partners/>
      <Credit/>
      <Tools/>
      <Industry/>
      <GetStarted/>
      <Support />
      <div className="w-full my-10 flex justify-center bg-white">
        <a
          href="#Navbar"
          className="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700 aos-init aos-animate"
        >
          <span>Back to top</span>{" "}
          <span
            aria-hidden="true"
            role="img"
            className="material-design-icon arrow-up-icon"
          >
            <svg
              fill="currentColor"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="material-design-icon__svg"
            >
              <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
            </svg>
          </span>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default App;
