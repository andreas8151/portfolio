import React from "react";
import "./about.css";
import ME from "../../assets/mefact.png";
import { TbSchool } from "react-icons/tb";
import { BsMusicNoteBeamed } from "react-icons/bs";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className="about_content">
          <p>
            My name is Andreas and I am a 27-year-old full-stack web development
            student. I have always had a passion for technology and creating
            beautiful, functional websites that are a pleasure for users to
            interact with. This passion drives me to constantly improve my
            skills and stay up-to-date with the latest web development
            technologies. I am a motivated and results-focused individual who is
            dedicated to delivering high-quality work that meets or exceeds the
            expectations of my clients.
          </p>
          <div className="about_cards">
            <article className="about_card">
              <TbSchool className="about__icon" />
              <h5>School</h5>
              <small>2 years, Fullstack Developer</small>
            </article>
            <article className="about_card">
              <BsMusicNoteBeamed className="about__icon" />
              <h5>Hobbys</h5>
              <small>Music</small>
            </article>
            <a
              href="https://www.linkedin.com/in/andreas-warncke-663464165/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Contact Me!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
