import React from "react";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="projects-comp">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-img">
              <img src={project.image} />
            </div>
            <a target="_blank" href={project.url}>
              {project.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
