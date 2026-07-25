function ProjectTechStack({ stack }) {
  return (
    <div className="mt-5">

      <p className="mb-4 font-medium">
        Tech Stack
      </p>

      <div className="flex flex-wrap gap-3">

        {stack.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2"
            >
              <Icon className="text-violet-400" />

              <span>{tech.name}</span>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ProjectTechStack;