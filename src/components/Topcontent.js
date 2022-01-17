import React from "react";
import "./Topcontent.css";

export const Topcontent = () => {
  return (
    <div className="topContent">
      <div className="topContent_container">
        <h2>Hello! I’m</h2>
        <h1>M.Mukunthan</h1>
        <p>
          A passionate Full Stack Web Developer and Cyber Security having an
          experience of building Web applications with JavaScript / Reactjs /
          Nodejs / MySQL / Docker / Linux / Git and some other
        </p>
        <a href="https://github.com/mukunthan7" className="topContent_git">
          Github Profile
        </a>
        <a
          href="https://github.com/mukunthan7?tab=repositories"
          className="topContent_pro"
        >
          Projects
        </a>
      </div>
    </div>
  );
};
