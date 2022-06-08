import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Employe from "../Employe/Employe";
import Extra from "../Extra/Extra";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import Social from "../Social/Social";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slider />
      <Services />
      <Projects />
      <About />
      <Extra />
      <Employe />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
