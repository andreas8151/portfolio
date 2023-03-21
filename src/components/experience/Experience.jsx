import React from "react";
import "./experience.css";
import { RiShieldCheckFill } from "react-icons/ri";

const experience = () => {
  return (
    <section id="experiance">
      <h5>What skills i have</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development </h3>
          <div className="experience_content">
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <RiShieldCheckFill className="experience_details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
