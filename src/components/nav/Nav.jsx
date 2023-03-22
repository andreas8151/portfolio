import React from "react";
import "./nav.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <div className="header_socials">
        <a
          className="linkTo"
          href="https://www.linkedin.com/in/andreas-warncke-663464165/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="header_socials" />
        </a>
        <a
          className="linkTo"
          href="https://github.com/andreas8151"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="header_socials" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
