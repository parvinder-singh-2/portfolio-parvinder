import ProjectFeatures from "./ProjectFeatures";
import ProjectTechStack from "./ProjectTechStack";
import ProjectActions from "./ProjectActions";

function ProjectContent({ project }) {
  return (
    <div className="flex flex-col items-center lg:items-start">

      {/* Desktop Only */}
      <span className="w-fit rounded-full bg-violet-500/15 px-4 py-2 text-xs uppercase tracking-wider text-violet-400">
        {project.category}
      </span>

      {/* Always Visible */}
      <h3 className="mt-4 lg:mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
        {project.title}
      </h3>

      {/* Desktop Only */}
      <p className="mt-3 text-gray-400 leading-8 line-clamp-3 lg:line-clamp-2 text-center lg:text-left">
        {project.description}
      </p>

      {/* Desktop Only */}
      <div className="hidden lg:block">
        <ProjectFeatures features={project.features} />
      </div>

      {/* Desktop Only */}
      <div className="hidden lg:block">
        <ProjectTechStack stack={project.techStack} />
      </div>

      {/* Always Visible */}
      <div className="mt-6 w-full">
        <ProjectActions
          github={project.github}
          live={project.live}
          caseStudy={project.caseStudy}
        />
      </div>

    </div>
  );
}

export default ProjectContent;