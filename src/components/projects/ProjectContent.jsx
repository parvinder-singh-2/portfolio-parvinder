import ProjectFeatures from "./ProjectFeatures";
import ProjectTechStack from "./ProjectTechStack";
import ProjectActions from "./ProjectActions";

function ProjectContent({ project }) {
  return (
    <div className="flex flex-col">

      <span className="w-fit rounded-full bg-violet-500/15 px-4 py-2 text-xs uppercase tracking-wider text-violet-400">
        {project.category}
      </span>

      <h3 className="mt-3 text-5xl font-bold">
        {project.title}
      </h3>

      <p className="mt-3 text-gray-400 leading-8">
        {project.description}
      </p>

      <ProjectFeatures features={project.features} />

      <ProjectTechStack stack={project.techStack} />

      <ProjectActions
        github={project.github}
        live={project.live}
        caseStudy={project.caseStudy}
      />

    </div>
  );
}

export default ProjectContent;