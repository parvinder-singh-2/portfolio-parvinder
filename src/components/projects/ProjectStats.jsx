function ProjectStats({ stats }) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-6 mt-10 rounded-2xl border border-violet-500/20 p-6">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="flex items-center gap-4"
          >
            <div className="rounded-xl bg-violet-500/15 p-3">
              <Icon className="text-violet-400" />
            </div>

            <div>

              <p className="font-bold text-md">
                {item.value}
              </p>

              <p className="text-xs text-gray-400">
                {item.label}
              </p>

            </div>
          </div>
        );
      })}

    </div>
  );
}

export default ProjectStats;