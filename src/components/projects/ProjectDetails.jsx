import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, ChevronRight } from "lucide-react";

function Section({ title, children }) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        <div className="mt-3 h-px bg-gradient-to-r from-violet-500 via-fuchsia-500 to-transparent" />
      </div>

      {children}
    </section>
  );
}

export default function ProjectDetails({ project, open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background */}

          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="
                absolute
                inset-5
                overflow-y-auto
                rounded-3xl
                border
                border-white/10
                bg-[#090611]/95
                backdrop-blur-3xl
            "
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="
                  sticky
                  top-6
                  float-right
                  mr-6
                  mt-6
                  z-50
                  rounded-full
                  bg-white/10
                  p-3
                  transition
                  hover:bg-white/20
              "
            >
              <X size={22} />
            </button>

            <div className="mx-auto max-w-7xl px-8 py-12">

              {/* HEADER */}

                {/* Hero Image */}

                <div className="-mx-8 -mt-12 overflow-hidden rounded-t-3xl">

                <img
                    src={project.image}
                    alt={project.title}
                    className="
                    h-56
                    w-full
                    object-cover
                    object-top
                    md:h-[420px]
                    "
                />

                </div>

                {/* Header */}

                <div className="mt-10">

                <span
                    className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-violet-500/15
                    border
                    border-violet-500/30
                    px-4
                    py-2
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-violet-300
                    "
                >
                    {project.category}
                </span>

                <h1
                    className="
                    mt-5
                    text-4xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                    "
                >
                    {project.title}
                </h1>

                <p
                    className="
                    mt-6
                    max-w-5xl
                    text-base
                    leading-8
                    text-gray-300
                    md:text-lg
                    "
                >
                    {project.description}
                </p>

                </div>

              {/* STATS */}

              <div className="mt-8 grid grid-cols-2 gap-4 md:hidden">
                {project.stats.slice(0, 4).map((stat) => {
                    const Icon = stat.icon;

                    return (
                    <div
                        key={stat.label}
                        className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                        "
                    >
                        <Icon
                        size={22}
                        className="text-violet-400"
                        />

                        <h3 className="mt-4 text-lg lg:text-2xl font-bold text-white">
                        {stat.value}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                        {stat.label}
                        </p>
                    </div>
                    );
                })}
                </div>

              {/* GRID */}

              <div className="mt-20 grid gap-16 lg:grid-cols-2">

                {/* LEFT */}

                <div className="space-y-16">

                  <Section title={project.overview.title}>
                    <p className="leading-8 text-gray-300">
                      {project.overview.content}
                    </p>
                  </Section>

                  <Section title="Problem Statement">
                    <p className="leading-8 text-gray-300">
                      {project.problemStatement}
                    </p>
                  </Section>

                  <Section title="Solution">
                    <p className="leading-8 text-gray-300">
                      {project.solution}
                    </p>
                  </Section>

                  <Section title="Challenges">

                    <div className="space-y-4">

                      {project.challenges.map((item) => (

                        <div
                          key={item}
                          className="
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-4
                          "
                        >
                          <ChevronRight
                            className="mt-1 shrink-0 text-violet-400"
                            size={18}
                          />

                          <p className="text-gray-300">{item}</p>

                        </div>

                      ))}

                    </div>

                  </Section>

                  <Section title="Learnings">

                    <div className="space-y-4">

                      {project.learnings.map((item) => (

                        <div
                          key={item}
                          className="
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-4
                          "
                        >
                          <CheckCircle2
                            className="mt-1 shrink-0 text-green-400"
                            size={18}
                          />

                          <p className="text-gray-300">{item}</p>

                        </div>

                      ))}

                    </div>

                  </Section>

                </div>

                {/* RIGHT */}

                <div className="space-y-16">

                  <Section title="Key Highlights">

                    <div className="grid gap-4">

                      {project.keyHighlights.map((item) => (

                        <div
                          key={item}
                          className="
                            rounded-xl
                            border
                            border-violet-500/20
                            bg-violet-500/5
                            p-4
                          "
                        >
                          <p className="text-white">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

                  </Section>

                  <Section title="Features">

                    <div className="flex flex-wrap gap-3">

                      {project.features.map((item) => (

                        <span
                          key={item}
                          className="
                            rounded-full
                            border
                            border-violet-500/30
                            bg-violet-500/10
                            px-4
                            py-2
                            text-sm
                            text-violet-200
                          "
                        >
                          {item}
                        </span>

                      ))}

                    </div>

                  </Section>

                  <Section title="Workflow">

                    <div className="space-y-5">

                      {project.workflow.map((step, index) => (

                        <div
                          key={step}
                          className="flex gap-5"
                        >
                          <div
                            className="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-violet-600
                              font-bold
                            "
                          >
                            {index + 1}
                          </div>

                          <div className="flex items-center text-gray-300">
                            {step}
                          </div>

                        </div>

                      ))}

                    </div>

                  </Section>

                  <Section title="Architecture">

                    <div className="grid gap-4 sm:grid-cols-2">

                      {Object.entries(project.architecture).map(([key, value]) => (

                        <div
                          key={key}
                          className="
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-5
                          "
                        >
                          <p className="text-xs uppercase tracking-wider text-violet-400">
                            {key}
                          </p>

                          <p className="mt-2 font-medium text-white">
                            {value}
                          </p>

                        </div>

                      ))}

                    </div>

                  </Section>

                  <Section title="Future Scope">

                    <div className="flex flex-wrap gap-3">

                      {project.futureScope.map((item) => (

                        <span
                          key={item}
                          className="
                            rounded-full
                            border
                            border-fuchsia-500/30
                            bg-fuchsia-500/10
                            px-4
                            py-2
                            text-sm
                            text-fuchsia-200
                          "
                        >
                          {item}
                        </span>

                      ))}

                    </div>

                  </Section>

                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}