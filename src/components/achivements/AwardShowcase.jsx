import AwardStats from "./AwardStats";

function AwardShowcase({ award }) {
  return (
    <section className="mt-6 overflow-hidden rounded-3xl border border-violet-500/20 bg-[#090913]">

      <div className="grid lg:grid-cols-2">

        <div className="p-5 lg:p-7">

          <div className="flex items-start gap-5">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 text-5xl">
              🏆
            </div>

            <div>

              <h2 className="lg:text-4xl text-2xl font-bold">
                {award.title}
              </h2>

              <p className="lg:mt-3 mt-0 lg:text-2xl text-xl font-semibold text-violet-500">
                {award.subtitle}
              </p>

            </div>

          </div>

          <p className="mt-5 max-w-2xl lg:text-lg text-sm leading-5 lg:leading-10 text-gray-300">
            {award.description}
          </p>

          <AwardStats stats={award.stats} />

        </div>

        <div className="overflow-hidden">

          <img
            src={award.image}
            alt=""
            className="h-full w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default AwardShowcase;