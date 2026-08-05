import { useState } from "react";

import ProjectFeatures from "./ProjectFeatures";
import ProjectTechStack from "./ProjectTechStack";
import ProjectActions from "./ProjectActions";
import ProjectDetails from "./ProjectDetails";

function ProjectContent({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center lg:items-start">
        {/* Category */}
        <span className="w-fit rounded-full bg-violet-500/15 px-4 py-2 text-xs uppercase tracking-wider text-violet-400">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="mt-4 lg:mt-3 text-center text-3xl font-bold md:text-4xl lg:text-left lg:text-5xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-center leading-8 text-gray-400 line-clamp-3 lg:line-clamp-2 lg:text-left">
          {project.description}
        </p>

        {/* Features */}
        <div className="hidden lg:block">
          <ProjectFeatures features={project.features} />
        </div>

        {/* Tech Stack */}
        <div className="hidden lg:block">
          <ProjectTechStack stack={project.techStack} />
        </div>

        {/* Actions */}
        <div className="mt-6 w-full">
          <ProjectActions
            github={project.github}
            live={project.live}
            caseStudy={project.caseStudy}
            clickDetails={() => setShowDetails(true)}
          />
        </div>
      </div>

      {/* Full Screen Project Details */}
      {
      showDetails && 
      <ProjectDetails
      project={project}
      open={showDetails}
      onClose={() => setShowDetails(false)}
      />
    }
    </>
  );
}

export default ProjectContent;