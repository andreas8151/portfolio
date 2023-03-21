import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>All Projects are on Github</h5>
      <h2>My Projects</h2>
      <div className="main_box">
        <img
          className="portf_img"
          src={require("../../assets/1.png")}
          alt="About img"
        />{" "}
        <img className="portf_img" src={require("../../assets/2.png")} alt="" />
        <img className="portf_img" src={require("../../assets/4.png")} alt="" />
        <img
          className="portf_img_todo"
          src={require("../../assets/8.png")}
          alt=""
        />
        <img
          className="portf_img_todo"
          src={require("../../assets/9.png")}
          alt=""
        />
        <img className="portf_img" src={require("../../assets/5.png")} alt="" />
        <img className="portf_img" src={require("../../assets/6.png")} alt="" />
        <img className="portf_img" src={require("../../assets/7.png")} alt="" />
        <img
          className="portf_img_todo"
          src={require("../../assets/todo.png")}
          alt=""
        />
      </div>
    </section>
  );
};

export default Portfolio;
