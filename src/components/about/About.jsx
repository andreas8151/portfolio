import React from "react";
import "./about.css";
import ME from "../../assets/mefact.png";
import { TbSchool } from "react-icons/tb";
import { BsMusicNoteBeamed } from "react-icons/bs";

function About() {
  return (
    <section id="about">
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About img" />
          </div>
        </div>
        <div className="about_content">
          <p>
            Hi ! I'm Andreas, a passionate full-stack web development student
            with experience in both frontend and backend development. I love
            building user-friendly websites and always strive to learn new
            things. Currently, i'm actively seeking an internship or job
            opportunity starting from October 30, 2023, where I can apply my
            knowledge and gain hands-on experience. If you're looking for a
            dedicated and motivated developer, i would love to hear from you!
          </p>
          <div className="about_cards">
            <article className="about_card">
              <TbSchool className="about__icon" />
              <h5>School</h5>
              <small>2 years, Fullstack Developer</small>
            </article>
            <article className="about_card">
              <BsMusicNoteBeamed className="about__icon" />
              <h5>Hobbies</h5>
              <small>Guitar playing</small>
              <br />
              <small>Art work</small>
            </article>
            <a
              href="https://www.linkedin.com/in/andreas-warncke-663464165/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
