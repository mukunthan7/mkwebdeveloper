import React from "react";
import { Element } from "react-scroll";
import Docker from "../assets/docker.svg";
import Reactjs from "../assets/react.svg";
import Nodejs from "../assets/nodejs.svg";
import Linux from "../assets/linux.svg";
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Sass from "../assets/sass.svg";
import Javascript from "../assets/javascript.svg";
import Java from "../assets/java.svg";
import C from "../assets/c.svg";
import Cpp from "../assets/c++.svg";
import Python from "../assets/python.svg";
import MySql from "../assets/mysql.svg";
import Postgresql from "../assets/postgresql.svg";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Skillcontainer.css";

export const Skillcontainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer_text">
        <h2>SKILLSET</h2>
        <div className="skillcontainer_skillset">
          <img src={Docker} alt="" />
          <h5>Docker</h5>
          <div className="skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Reactjs} alt="" />
          <h5>React</h5>
          <div className="skillcontainer_slider skillcontainer_slider2">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Nodejs} alt="" />
          <h5>Node Js</h5>
          <div className="skillcontainer_slider skillcontainer_slider3">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Linux} alt="" />
          <h5>Linux</h5>
          <div className="skillcontainer_slider skillcontainer_slider4">
            <LinearProgress variant="determinate" value={95} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Html} alt="" />
          <h5>HTML5</h5>
          <div className="skillcontainer_slider skillcontainer_slider5">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Css} alt="" />
          <h5>CSS3</h5>
          <div className="skillcontainer_slider skillcontainer_slider6">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Sass} alt="" />
          <h5>Sass</h5>
          <div className="skillcontainer_slider skillcontainer_slider14">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Javascript} alt="" />
          <h5>Javascript</h5>
          <div className="skillcontainer_slider skillcontainer_slider12">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Java} alt="" />
          <h5>Java</h5>
          <div className="skillcontainer_slider skillcontainer_slider7">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={C} alt="" />
          <h5>C</h5>
          <div className="skillcontainer_slider skillcontainer_slider8">
            <LinearProgress variant="determinate" value={95} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Cpp} alt="" />
          <h5>C++</h5>
          <div className="skillcontainer_slider skillcontainer_slider9">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Python} alt="" />
          <h5>Python</h5>
          <div className="skillcontainer_slider skillcontainer_slider13">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={MySql} alt="" />
          <h5>MySQL</h5>
          <div className="skillcontainer_slider skillcontainer_slider10">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <img src={Postgresql} alt="" />
          <h5>PostgresSQL</h5>
          <div className="skillcontainer_slider skillcontainer_slider11">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
    </Element>
  );
};
