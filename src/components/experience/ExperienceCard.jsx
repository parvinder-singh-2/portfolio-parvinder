import { motion } from "framer-motion";
import { Check } from "lucide-react";

function ExperienceCard({
  title,
  company,
  description,
  points,
  icon: Icon,
  index,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{ y: -6 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-violet-500/40
        hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
      "
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div
        className="
          relative
          grid
          gap-8
          p-6
          lg:grid-cols-[1.2fr_auto_1fr]
          lg:items-center
          lg:p-8
        "
      >
        {/* Left */}

        <div className="flex gap-5">
          {/* Icon */}

          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="
              flex
              h-20
              w-20
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-violet-500/10
              text-violet-400
            "
          >
            <Icon size={38} strokeWidth={1.7} />
          </motion.div>

          {/* Text */}

          <div className="min-w-0">
            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-1 text-lg font-semibold text-violet-400">
              {company}
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              {description}
            </p>
          </div>
        </div>

        {/* Divider */}

        <div className="hidden h-full w-px bg-white/10 lg:block" />

        <div className="h-px bg-white/10 lg:hidden" />

        {/* Points */}

        <ul className="space-y-4">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3"
            >
              <span className="mt-1 rounded-full bg-violet-500/10 p-1 text-violet-400">
                <Check size={12} />
              </span>

              <span className="text-gray-300">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;