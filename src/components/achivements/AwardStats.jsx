function AwardStats({ stats }) {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-3">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-xl border border-violet-500/10 bg-black/20 p-6"
          >

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Icon className="text-2xl text-violet-500" />
            </div>

            <h3 className="text-2xl font-bold">
              {item.value}
            </h3>

            <p className="mt-2 text-gray-400">
              {item.label}
            </p>

          </div>
        );
      })}

    </div>
  );
}

export default AwardStats;