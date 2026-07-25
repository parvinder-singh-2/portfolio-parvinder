import { motion } from "framer-motion";
import { experienceStats } from "../../data/experienceData";

function ExperienceStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {experienceStats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -6,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-7
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-violet-500/40
              hover:shadow-[0_0_35px_rgba(139,92,246,0.15)]
            "
          >
            {/* Glow */}

            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            <div className="relative">
              {/* Icon */}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                <Icon size={28} strokeWidth={1.8} />
              </div>

              {/* Number */}

              <h3 className="text-4xl font-bold text-white">
                {stat.value}
              </h3>

              {/* Label */}

              <p className="mt-3 text-gray-400">
                {stat.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ExperienceStats;