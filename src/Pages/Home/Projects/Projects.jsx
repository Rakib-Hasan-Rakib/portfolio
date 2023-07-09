import React from "react";
import melodyMastersImage from "../../../assets/images/melody-masters.png";
import brainyBoxImage from "../../../assets/images/brainy-box.png";
import thaiSpiceImage from "../../../assets/images/thai-spice.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="sectionTitle">Projects I've Done Yet</h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4">
        <div className="border border-white rounded-lg">
          <img
            className="project-image w-60 lg:w-80"
            src={melodyMastersImage}
            alt="project image of melody masters"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-center pt-2 md:pt-4">
            Melody Masters
          </h2>
          <div className="flex justify-center items-center gap-4 my-2 py-2 md:py-3">
            <Link to="https://github.com/Rakib-Hasan-Rakib/melody-masters-client">
              <button className="bg-blue-700 px-2 md:px-4 py-1 md:py-2 rounded-md text-white font-semibold">
                View Code
              </button>
            </Link>
            <Link to="https://melody-masters.firebaseapp.com/">
              <button className="bg-blue-700 px-2 md:px-4 py-1 md:py-2 rounded-md text-white font-semibold">
                Visit Site
              </button>
            </Link>
          </div>
        </div>
        <div className="border border-white rounded-lg">
          <img
            className="project-image w-60 lg:w-80"
            src={brainyBoxImage}
            alt="project image of melody masters"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-center pt-2 md:pt-4">
            Brainy Box
          </h2>
          <div className="flex justify-center items-center gap-4 my-2 py-2 md:py-3">
            <Link to="https://github.com/Rakib-Hasan-Rakib/BrainyBox-client">
              <button className="bg-blue-700 px-2 md:px-4 py-1 md:py-2 rounded-md text-white font-semibold">
                View Code
              </button>
            </Link>
            <Link to="https://brainy-box-f1c5d.web.app/">
              <button className="bg-blue-700 px-2 md:px-4 py-1 md:py-2 rounded-md text-white font-semibold">
                Visit Site
              </button>
            </Link>
          </div>
        </div>
        <div className="border border-white rounded-lg">
          <img
            className="project-image w-60 lg:w-80"
            src={thaiSpiceImage}
            alt="project image of melody masters"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-center pt-2 md:pt-4">
            Thai Spice
          </h2>
          <div className="flex justify-center items-center gap-4 my-2 py-2 md:py-3">
            <Link to="https://github.com/Rakib-Hasan-Rakib/ThaiSpice-client">
              <button className="bg-blue-700 px-2 md:px-4 py-1 md:py-2 rounded-md text-white font-semibold">
                View Code
              </button>
            </Link>
            <Link to="https://thai-spice-69b0d.firebaseapp.com/">
              <button className="bg-blue-700 px-2 md:px-4 py-1 md:py-2 rounded-md text-white font-semibold">
                Visit Site
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
