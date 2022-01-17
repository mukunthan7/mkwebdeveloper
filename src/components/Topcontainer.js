import React from "react";
import { Element } from "react-scroll";
import { Topcontent } from "./Topcontent";
import "./Topcontainer.css";

export const Topcontainer = () => {
  return (
    <Element name="about" className="topContainer">
      <Topcontent />
    </Element>
  );
};
