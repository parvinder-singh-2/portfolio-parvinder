import { useState } from "react";
import { projects } from "../../data/projectsData";

import ProjectCard from "./ProjectCard";
import ProjectNavigation from "./ProjectNavigation";
import ProjectPagination from "./ProjectPagination";

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <section className="relative py-14" id="projects">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-violet-400 uppercase tracking-[0.25em] font-medium">
            Featured Projects
          </p>

          <h2 className="mt-0 text-6xl font-bold">
            Things I've{" "}
            <span className="text-violet-500">
              Built
            </span>
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-400 text-lg">
            A showcase of impactful projects where I solved real-world
            problems and built scalable, efficient solutions.
          </p>
        </div>

        <div className="relative">

          <ProjectNavigation
            current={currentProject}
            total={projects.length}
            setCurrent={setCurrentProject}
          />

          <ProjectCard project={projects[currentProject]} />

          <ProjectPagination
            current={currentProject}
            total={projects.length}
            setCurrent={setCurrentProject}
          />

        </div>

      </div>
    </section>
  );
}

export default Projects;