import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./Navbar.css";
import {
  ChatBubbleLeftIcon,
  DocumentCheckIcon,
  HomeIcon,
  CodeBracketSquareIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-10">
      <div className="flex justify-center gap-8 py-4 bg-orange-500 px-12 bg-gradient-to-r from-cyan-900 rounded-lg">
        <NavHashLink
          smooth
          to="#home"
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          className="flex flex-col items-center"
        >
          <HomeIcon className="h-6 w-6 text-blue-500" />
          Home
        </NavHashLink>
        <NavHashLink
          smooth
          to="#about"
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          className="flex flex-col items-center"
        >
          <UserIcon className="h-6 w-6 text-blue-500" /> About
        </NavHashLink>
        <NavHashLink
          smooth
          to="#skills"
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          className="flex flex-col items-center"
        >
          <CodeBracketSquareIcon className="h-6 w-6 text-blue-500" /> Skills
        </NavHashLink>
        <NavHashLink
          smooth
          to="#projects"
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          className="flex flex-col items-center"
        >
          <DocumentCheckIcon className="h-6 w-6 text-blue-500" /> Projects
        </NavHashLink>
        <NavHashLink
          smooth
          to="#contact"
          activeClassName="selected"
          activeStyle={{ color: "red" }}
          className="flex flex-col items-center"
        >
          <ChatBubbleLeftIcon className="h-6 w-6 text-blue-500" /> Contact
        </NavHashLink>
      </div>
    </div>
  );
};

export default Navbar;
