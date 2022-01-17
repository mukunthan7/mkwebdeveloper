import React from "react";
import { IconButton } from "@material-ui/core";
import { Element } from "react-scroll";
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  Telegram,
} from "@material-ui/icons";
import "./Contact.css";
export const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          <a href="mailto:mukunthanm079@gmail.com">
            Email: <span>mukunthanm079@gmail.com</span>
          </a>
        </p>
        <p>
          <a href="https://github.com/mukunthan7">
            Github Username: <span>@mukunthan7</span>
          </a>
        </p>
        <div className="contact_icons">
          <a href="https://www.linkedin.com/in/m-mukunthan-577bb31a0/">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/mukunthanvisvakarma">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/mukunthan7_official/">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
          <a href="https://wa.me/+919629175812">
            <IconButton>
              <WhatsApp />
            </IconButton>
          </a>
          <a href="https://t.me/MukunthanMass">
            <IconButton>
              <Telegram />
            </IconButton>
          </a>
        </div>
      </div>
      <p className="copyright">@copyright MK❤️WebDeveloper</p>
    </Element>
  );
};
