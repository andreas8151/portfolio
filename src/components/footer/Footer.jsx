import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a
          href="https://www.linkedin.com/in/andreas-warncke-663464165/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="footer__socials" />
        </a>
      </p>
      <p>
        Tel: <a href="tel:+46720704239">072-0704239</a>
      </p>
      <p>
        Mail:{" "}
        <a href="mailto:Andras.warncke.1996@gmail.com">
          Andreas.warncke.1996@gmail.com
        </a>
      </p>
      <p>
        <a
          href="https://github.com/andreas8151"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="footer__socials" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
