import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

function ProjectActions({ github, live, caseStudy }) {
  return (
    <div className="mt-5 gap-4 grid lg:grid-cols-3 grid-cols-1">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 justify-center bg-black py-2 rounded-2xl"
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
          className="btn-secondary flex items-center gap-2 justify-center bg-purple-700 py-2 rounded-2xl"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      )}

      {caseStudy && (
        <a
          href={caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-2 justify-center bg-violet-500/15 text-violet-400 py-2 rounded-2xl"
        >
          <FaFileAlt />
          Case Study
        </a>
      )}
    </div>
  );
}

export default ProjectActions;