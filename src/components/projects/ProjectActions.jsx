import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

function ProjectActions({ github, live, caseStudy, clickDetails }) {
  const actionCount = [github, live, caseStudy].filter(Boolean).length;

  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
  }[actionCount];

  return (
    <div className={`mt-5 grid gap-4 md:${gridClass}`}>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary md:flex items-center justify-center gap-2 rounded-2xl bg-black py-2 hidden"
        >
          <FaGithub />
          GitHub
        </a>
      )}

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary md:flex items-center justify-center gap-2 rounded-2xl bg-purple-700 py-2 hidden"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      )}

      {caseStudy && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center justify-center gap-2 rounded-2xl bg-violet-500/15 py-2 text-violet-400"
          onClick={clickDetails}
        >
          <FaFileAlt />
          Read More
        </a>
      )}
    </div>
  );
}

export default ProjectActions;