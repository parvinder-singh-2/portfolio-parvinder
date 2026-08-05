import ProjectPreview from "./ProjectPreview";
import ProjectContent from "./ProjectContent";
import ProjectStats from "./ProjectStats";

function ProjectCard({ project }) {
  return (
    <>
      <div className="rounded-3xl border border-violet-500/20 bg-[#0A0813] p-3 lg:p-8">

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          <ProjectPreview image={project.image} />

          <ProjectContent project={project} />

        </div>

      </div>

      <div className="hidden lg:block">
        <ProjectStats stats={project.stats} />
      </div>
    </>
  );
}

export default ProjectCard;