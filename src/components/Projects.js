import React from "react";
import { projects } from "../data";
// import "./Projects.css";
import { CodeIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/solid";

// import "bootstrap/dist/css/bootstrap.css";

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: "60px" }}>
      <h4
        style={{
          textAlign: "center",
          // backgroundColor: "blue",
          marginBottom: "30px",
        }}
      >
        Projects <CodeIcon style={{ height: "25px" }} />
      </h4>

      {/* m-auto is necessary. bootstrap row gives margin left and right of -15px */}
      <div className="row m-auto">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="d-flex justify-content-center col-lg-6 p-0 mb-2"
              style={{
                position: "relative",
                textAlign: "center",
                fontSize: "13px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  padding: "15px",
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
                <br />
                <div
                  style={{
                    width: "100%",
                    // backgroundColor: "red",
                    position: "absolute",
                    alignItems: "center",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                    }}
                    href={project.link}
                  >
                    {project.link}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
