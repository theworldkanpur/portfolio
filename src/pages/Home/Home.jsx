import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Process from "../../components/Process";
import Features from "../../components/Features";
import Testimonals from "../../components/Testimonals";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeContact from "../../components/HomeContact";
const Home = () => {
  return (
    <>
    <Header/>
      <Hero />
      <Services />
      <Process />
      <Features />
      <Testimonals />
      {/* <HomeContact/> */}
      <Footer/>
    </>
  );
};

export default Home;
