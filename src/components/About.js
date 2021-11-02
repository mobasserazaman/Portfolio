import React from "react";
import "./About.css";
export const About = () => {
  return (
    <section id="about">
      {/* <div>
        <img alt="hero" src="./coding.svg" />
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center col-lg-6">
            <div
              style={{
                fontSize: "13px",
                boxSizing: "border-box",
                padding: "50px",
                textAlign: "center",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="d-flex col-lg-6 justify-content-center m-auto">
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
