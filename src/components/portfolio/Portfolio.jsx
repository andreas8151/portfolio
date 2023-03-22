import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>All Projects are on Github</h5>
      <h2>My Projects</h2>
      <div className="main_box">
        <a href="https://github.com/andreas8151/Frontend-3-Store">
          <img
            className="portf_img"
            src={require("../../assets/1.png")}
            alt="About img"
          />
        </a>
        <a href="https://github.com/andreas8151/Frontend-3-Store">
          <img
            className="portf_img"
            src={require("../../assets/2.png")}
            alt=""
          />
        </a>
        <a href="https://github.com/andreas8151/Frontend-3-Store">
          <img
            className="portf_img"
            src={require("../../assets/4.png")}
            alt=""
          />
        </a>
        <a href="https://github.com/andreas8151/finance-tracking">
          <img
            className="portf_img"
            src={require("../../assets/12.png")}
            alt=""
          />
        </a>{" "}
        <a href="https://github.com/andreas8151/finance-tracking">
          <img
            className="portf_img"
            src={require("../../assets/11.png")}
            alt=""
          />
        </a>
        <a href="https://github.com/andreas8151/Todo-Examination">
          <img
            className="portf_img"
            src={require("../../assets/8.png")}
            alt=""
          />
        </a>
        <a href="https://github.com/andreas8151/Todo-Examination">
          <img
            className="portf_img"
            src={require("../../assets/9.png")}
            alt=""
          />
        </a>
        <a href="https://github.com/andreas8151/netflux">
          <img
            className="portf_img"
            src={require("../../assets/5.png")}
            alt=""
          />
        </a>
        <a href="https://github.com/andreas8151/h-m-store">
          <img
            className="portf_img"
            src={require("../../assets/6.png")}
            alt=""
          />
        </a>
        <a href="https://github.com/andreas8151/HTML-CSS-examination">
          <img
            className="portf_img"
            src={require("../../assets/7.png")}
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
