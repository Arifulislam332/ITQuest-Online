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
    </>
  );
};

export default Home;
