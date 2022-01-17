import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <h1>
          MK❤️Web<span>Developer</span>
        </h1>
      </div>
      <div className="header_right">
        <Link to="about" smooth={true} duration={500}>
          <h4>About Me</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="technology" smooth={true} duration={500}>
          <h4>Technology</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
      </div>
    </div>
  );
};
