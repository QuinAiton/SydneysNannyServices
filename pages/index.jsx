import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav.jsx";
import JumboTron from "../components/JumboTron.jsx";
import Services from "../components/Services.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const index = () => {
  return (
    <div className="font-Montserrat ">
      <Nav />
      <JumboTron />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
