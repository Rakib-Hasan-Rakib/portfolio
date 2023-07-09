import React from "react";
import userImage from "../../../assets/images/banner.jpg";
import "./About.css";
import AnimationType from "../../../Components/TypeAnimation/AnimationType";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="w-11/12 mx-auto">
      <h1 className="sectionTitle">About Me</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center ">
        <div className="basis-1/2 flex justify-center items-center my-12">
          <img className="w-64 rounded-lg userImage" src={userImage} alt="" />
        </div>
        <div className="basis-1/2 md:pr-8">
          <h2 className="text-2xl md:text-3xl py-2 font-semibold">
            I'm Rakibul Hasan
          </h2>
          <AnimationType />
          <p className="tracking-wider">
            As a junior full stack developer I'm passionate about creating
            exceptional online experiences. Proficient in front-end and back-end
            technologies, I specialize in building dynamic and responsive web
            applications. Collaborative and detail-oriented, I strive to exceed
            client expectations by incorporating user-centered design rules.
            Let's create something amazing together!
          </p>
          <button className="customBtn">
            <Link to="https://drive.google.com/file/d/17wJmU5HZ2CCELZL2y5K42avpqtiI9UBR/view?usp=sharing">
              Resume 
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
