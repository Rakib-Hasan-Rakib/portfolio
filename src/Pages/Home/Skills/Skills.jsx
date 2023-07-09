import React from 'react';
import {  CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import htmlImage from '../../../assets/images/html.png'
import cssImage from "../../../assets/images/css-3.png";
import bootstrapImage from "../../../assets/images/bootstrap.png";
import tailwindImage from "../../../assets/images/tailwind.png";
import jsImage from "../../../assets/images/js.png";
import reactImage from "../../../assets/images/react.png";
import firebaseImage from "../../../assets/images/firebase.png";
import nodeImage from "../../../assets/images/nodejs.png";
import expressImage from "../../../assets/images/express.png";
import mongodbImage from "../../../assets/images/mongodb.png";

const Skills = () => {
    return (
      <div id='skills' className="w-10/12 mx-auto">
        <h1 className="sectionTitle">My skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-4 md:gap-16">
          <div className="w-32 md:w-36 lg:w-40" title="HTML5">
            <CircularProgressbarWithChildren value={95}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={htmlImage}
                alt="html logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">95%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="CSS3">
            <CircularProgressbarWithChildren value={85}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={cssImage}
                alt="css logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">85%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="Bootstrap">
            <CircularProgressbarWithChildren value={80}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={bootstrapImage}
                alt="bootstrap logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">80%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="Tailwind CSS">
            <CircularProgressbarWithChildren value={90}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={tailwindImage}
                alt="tailwind logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">90%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="JavaScript">
            <CircularProgressbarWithChildren value={75}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={jsImage}
                alt="javascript logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">75%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="React.js">
            <CircularProgressbarWithChildren value={95}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={reactImage}
                alt="react.js logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">95%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="Firebase">
            <CircularProgressbarWithChildren value={90}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={firebaseImage}
                alt="firebase logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">90%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="Node.js">
            <CircularProgressbarWithChildren value={60}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={nodeImage}
                alt="node.js logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">60%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="Express.js">
            <CircularProgressbarWithChildren value={75}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={expressImage}
                alt="express.js logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">75%</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-32 md:w-36 lg:w-40" title="MongoDB">
            <CircularProgressbarWithChildren value={85}>
              <img
                className="w-12 md:w-14 lg:w-16"
                src={mongodbImage}
                alt="mongodb logo"
              />
              <p className="font-semibold text-md md:text-lg lg:text-xl">85%</p>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    );
};

export default Skills;