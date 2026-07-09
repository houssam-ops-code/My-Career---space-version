import { NavLink } from "react-router-dom";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaFutbol,
  FaRocket,
} from "react-icons/fa";

import SectionTitle from "../../common/SectionTitle";

function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="container">

        <SectionTitle
          title="The Person Behind the Code"
          description="More than just a developer."
        />

        <div className="about-preview-content">

          <p className="about-preview-text">
            I'm <strong>Houssam Benrbib</strong>, a Software Engineering
            student passionate about building modern and responsive web
            applications. I enjoy learning new technologies, solving
            real-world problems and continuously improving my skills.

            <br /><br />

            I enjoy turning ideas into practical, user-friendly applications
            while constantly challenging myself to learn something new.

            <br /><br />

            Outside programming, I'm also a competitive football player,
            where discipline, teamwork and consistency shape the way I
            approach every project.
          </p>

          <div className="about-highlights">

            <div className="highlight">
              <FaLaptopCode />
              <span>Web Development</span>
            </div>

            <div className="highlight">
              <FaGraduationCap />
              <span>SUPINFO Student</span>
            </div>

            <div className="highlight">
              <FaFutbol />
              <span>Football Player</span>
            </div>

            <div className="highlight">
              <FaRocket />
              <span>Always Learning</span>
            </div>

          </div>

          <NavLink
            to="/about"
            className="btn btn-primary"
          >
            Read More
          </NavLink>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;