import React from "react";
import Navbar from "../../../Shared/Navbar";
import Contact from "../Contact/Contact";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Footer from "../../../Shared/Footer";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
