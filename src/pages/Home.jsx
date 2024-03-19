import Contact from "../components/Contact";
import Cources from "../components/Cources";
import DigitalMarketing from "../components/DigitalMarketing";
import ECommerce from "../components/ECommerce";
import GraphicsDesign from "../components/GraphicsDesign";
import Header from "../components/Header";
import ItService from "../components/ItService";
import Managments from "../components/Managments";
import Slider from "../components/Slider";
import WebDev from "../components/WebDev";
import WomenCallCenter from "../components/WomenCallCenter";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Cources />
      <WomenCallCenter />
      <ECommerce />
      <ItService />
      <GraphicsDesign />
      <WebDev />
      <DigitalMarketing />
      <Managments />
      <Contact />

      {/* footer */}
      <div className="reusable__margin mt-1 bg-violet-100 w-full h-full">
        <div className="pt-8 pb-10">
          <div className="flex flex-col justify-center w-60 h-1/3 items-center ring-2 mx-auto">
            <img
              src="https://herpower.gov.bd/images/hpp-logo-text.png"
              alt="women logo photo"
            />
            <span className="w-full h-1 bg-white "></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
