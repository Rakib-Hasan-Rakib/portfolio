import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import facebookIcon from "../assets/images/facebook-icon.png";
import linkedInIcon from "../assets/images/linkedIn.png";
import githubIcon from "../assets/images/github-logo.png";
import { Link } from "react-router-dom";
// import instagramIcon from "../assets/images/logos/instagram-icon.png";
// import youtubeIcon from "../assets/images/logos/youtube-icon.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-black text-white pb-28">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 py-8 w-11/12 mx-auto">
          <div className="space-y-1 md:space-y-3">
            <h2 className="text-xl md:text-2xl">Contact Me On </h2>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-sky-400" />
              <span>+8801865215782</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-4 w-4 text-sky-400" />
              <span>rakibhasanrakib3006@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-sky-400" />
              <span>Mirpur-12, Dhaka</span>
            </div>
          </div>
          <div className="my-6 md:my-0">
            <h2 className="text-xl md:text-2xl text-center md:text-start">
              Find Me On
            </h2>
            <div className="flex justify-center md:justify-start items-center gap-4 my-2 md:my-8">
              <Link to="https://www.facebook.com/rk.rakib.180625/">
                <img
                  className="w-8 cursor-pointer"
                  src={facebookIcon}
                  alt="facebookIcon"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/rakibul-hasan-10a1b9274/">
                <img
                  className="w-8 cursor-pointer"
                  src={linkedInIcon}
                  alt="linkedin icon"
                />
              </Link>
              <Link to="https://github.com/Rakib-Hasan-Rakib">
                {" "}
                <img
                  className="w-10 cursor-pointer"
                  src={githubIcon}
                  alt="youtubeIcon"
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-11/12 mx-auto" />
        <p className="text-center text-sm py-4">
          <span className="text-sky-400">&#169;</span>
          {year} Rakibul Hasan all rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
