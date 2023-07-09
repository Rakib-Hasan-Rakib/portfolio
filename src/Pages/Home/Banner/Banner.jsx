import React from 'react';
import bannerImage from "../../../assets/images/banner.jpg";
import htmlImage from "../../../assets/images/html.png";
import cssImage from "../../../assets/images/css-3.png";
import bootstrapImage from "../../../assets/images/bootstrap.png";
import tailwindImage from "../../../assets/images/tailwind.png";
import jsImage from "../../../assets/images/js.png";
import reactImage from "../../../assets/images/react.png";
import firebaseImage from "../../../assets/images/firebase.png";
import nodeImage from "../../../assets/images/nodejs.png";
import expressImage from "../../../assets/images/express.png";
import mongodbImage from "../../../assets/images/mongodb.png";
import './Banner.css'
import Title from '../../../Components/Title/Title';

const Banner = () => {
    return (
      <div id='home' className="h-[80vh]">
        <Title/>
        <div className="rakib image">
          <img
            className="w-32 md:w-56 rounded-full"
            src={bannerImage}
            alt="banner image of the author"
          />
        </div>
        <div className="">
          <img
            className="w-10 md:w-12 lg:w-16 image image-one"
            src={htmlImage}
            alt=""
          />

          <img
            className="w-10 md:w-12 lg:w-16 image image-two"
            src={cssImage}
            alt=""
          />
          <img
            className="w-10 md:w-12 lg:w-16 image image-three"
            src={bootstrapImage}
            alt=""
          />
          <img
            className="w-10 md:w-12 lg:w-16 image image-four"
            src={tailwindImage}
            alt=""
          />
          <img
            className="w-10 md:w-12 lg:w-16 image image-five"
            src={jsImage}
            alt=""
          />
          <img
            className="w-10 md:w-12 lg:w-16 image image-six"
            src={reactImage}
            alt=""
          />
          <img
            className="w-10 md:w-12 lg:w-16 image image-seven"
            src={firebaseImage}
            alt=""
          />
          <img
            className="w-10 md:w-12 lg:w-16 image image-eight"
            src={nodeImage}
            alt=""
          />
          <img
            className="w-10 md:w-12 lg:w-16 image image-nine"
            src={expressImage}
            alt=""
          />
          <img
            className="w-10 md:w-12 lg:w-16 image image-ten"
            src={mongodbImage}
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;