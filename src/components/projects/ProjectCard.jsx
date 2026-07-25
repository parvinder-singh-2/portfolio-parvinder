import ProjectPreview from "./ProjectPreview";
import ProjectContent from "./ProjectContent";
import ProjectStats from "./ProjectStats";

function ProjectCard({ project }) {
  return (
    <>
      <div className="rounded-3xl border border-violet-500/20 bg-[#0A0813] p-6 lg:p-8">

        <div className="grid lg:grid-cols-2 gap-10">

          <ProjectPreview image={project.image} />

          <ProjectContent project={project} />

        </div>

      </div>

      <ProjectStats stats={project.stats} />
    </>
  );
}

export default ProjectCard;