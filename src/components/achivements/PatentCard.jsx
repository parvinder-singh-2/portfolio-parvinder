import { RiShieldCheckLine } from "react-icons/ri";

function PatentCard({ patent }) {
  const Icon = patent.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-violet-500/20 bg-[#090913] transition-all duration-300 hover:border-violet-500/40">

      <div className="flex-1 px-5 py-6">

        <div className="mb-8 flex items-start gap-3">

          <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-violet-500/10">
            <Icon className="text-4xl text-violet-500" />
          </div>

          <div>

            <h3 className="text-2xl font-semibold text-violet-400">
              Patent Published
            </h3>

            <p className="text-lg text-gray-400">
              {patent.year}
            </p>

            <div className=" h-[2px] w-10 bg-violet-500" />

          </div>

        </div>

        <p className="text-md leading-9 text-gray-200">
          {patent.title}
        </p>

      </div>

      <div className="flex items-center gap-3 border-t border-violet-500/10 bg-violet-500/5 px-8 py-4">

        <RiShieldCheckLine className="text-2xl text-violet-500" />

        <span className="text-lg">
          {patent.status}
        </span>

      </div>

    </article>
  );
}

export default PatentCard;