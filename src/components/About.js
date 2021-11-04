import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section id="about" style={{ paddingTop: "120px" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center p-0">
            <div
              style={{
                margin: "auto",
                fontSize: "13px",
                boxSizing: "border-box",
                padding: "30px",
                textAlign: "center",
              }}
            >
              <p>
                A versatile and ambitious graduate who is presently open to work
                and looking for jobs in the Computer Software/Networking
                industry.
              </p>
              <p>
                Teamwork . Adaptability . Problem-solving . Leadership . Time
                management
              </p>
              <p>
                McGill University
                <br />
                Fall 2017 – Winter 2021
                <br />
                Bachelor of Science - Software Engineering
              </p>
            </div>
          </div>

          <div className="d-flex col-lg-6 justify-content-center p-0">
            <div className="myimage">
              <img
                alt="hero"
                src="./coding.svg"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
