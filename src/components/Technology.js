import React from "react";
import { Element } from "react-scroll";
import Ubuntu from "../assets/ubuntu.svg";
import Arch from "../assets/arch.svg";
import Debian from "../assets/debian.svg";
import Vscode from "../assets/vscode.svg";
import Vim from "../assets/vim.svg";
import GitHub from "../assets/github.svg";
import Git from "../assets/git.svg";
import Powershell from "../assets/powershell.svg";
import Tmux from "../assets/tmux.svg";
import Nginx from "../assets/nginx.svg";
import Apache from "../assets/apache.svg";
import Brave from "../assets/brave.svg";
import Npm from "../assets/npm.svg";
import Firebase from "../assets/firebase.svg";
import Gimp from "../assets/gimp.svg";
import GithubCopilot from "../assets/githubcopilot.svg";
import Figma from "../assets/figma.svg";
import Gitlab from "../assets/gitlab.svg";
import "./Technology.css";
export const Technology = () => {
  return (
    <Element className="technologycontainer" id="technology">
      <div className="technologycontainer_text">
        <h2>I'm using Technology</h2>
        <div className="technology_list">
          <div className="technology_item1">
            <img src={Ubuntu} alt="" />
            <h5>Ubuntu</h5>
          </div>
          <div className="technology_item2">
            <img src={Arch} alt="" />
            <h5>Arch</h5>
          </div>
          <div className="technology_item2">
            <img src={Debian} alt="" />
            <h5>Debian</h5>
          </div>
          <div className="technology_item2">
            <img src={Vscode} alt="" />
            <h5>Vscode</h5>
          </div>
          <div className="technology_item2">
            <img src={Vim} alt="" />
            <h5>Vim</h5>
          </div>
          <div className="technology_item2">
            <img src={GitHub} alt="" />
            <h5>GitHub</h5>
          </div>
          <div className="technology_item2">
            <img src={Git} alt="" />
            <h5>Git</h5>
          </div>
          <div className="technology_item3">
            <img src={Powershell} alt="" />
            <h5>PowerShell</h5>
          </div>
          <div className="technology_item2">
            <img src={Tmux} alt="" />
            <h5>Tmux</h5>
          </div>
          <div className="technology_item2">
            <img src={Nginx} alt="" />
            <h5>Nginx</h5>
          </div>
          <div className="technology_item3">
            <img src={Firebase} alt="" />
            <h5>firebase</h5>
          </div>
          <div className="technology_item2">
            <img src={Apache} alt="" />
            <h5>Apache</h5>
          </div>
          <div className="technology_item2">
            <img src={Brave} alt="" />
            <h5>Brave</h5>
          </div>
          <div className="technology_item2">
            <img src={Npm} alt="" />
            <h5>Npm</h5>
          </div>
          <div className="technology_item2">
            <img src={Gimp} alt="" />
            <h5>Gimp</h5>
          </div>
          <div className="technology_item2">
            <img src={GithubCopilot} alt="" />
            <h5>Copilot</h5>
          </div>
          <div className="technology_item2">
            <img src={Figma} alt="" />
            <h5>Figma</h5>
          </div>
          <div className="technology_item2">
            <img src={Gitlab} alt="" />
            <h5>Gitlab</h5>
          </div>
        </div>
      </div>
    </Element>
  );
};
