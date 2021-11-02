import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="row">
        <h4>Projects</h4>
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="d-flex justify-content-center col-lg-6"
              style={{ textAlign: "center", fontSize: "13px" }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  padding: "15px",
                  height: "170px",
                }}
              >
                <h6>
                  {project.title}
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    ({project.subtitle})
                  </span>
                </h6>

                <br />

                {project.description}
                <br />
                <a style={{ textDecoration: "none" }} href={project.link}>
                  {project.link}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
