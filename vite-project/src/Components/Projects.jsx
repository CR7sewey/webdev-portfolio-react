import React from "react";
import { projects } from "../../project-assets/data";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="bg-slate-200">
      <section className="bg-slate-200 py-20 align-element" id="projects">
        <div className="border-b border-gray-300 pb-5">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            Projects
          </h2>
        </div>

        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((values) => {
            const { id, img, url, github, title, text } = values;
            return <ProjectsCard {...values} key={id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
