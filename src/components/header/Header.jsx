import React from "react";
import "./header.css";
import ME from "../../assets/myface.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        {" "}
        <h5>Hello I'm</h5>
        <h1>Andreas Warncke</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <div className="me">
          <img src={ME} alt="Picture of me"></img>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
