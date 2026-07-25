import { motion } from "framer-motion";

function TechCategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: .3 }}
      className="rounded-3xl border border-violet-500/20 bg-white/[0.03] backdrop-blur-xl px-4 py-5"
    >
      <div className="flex items-center gap-2">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10">
          <Icon className="text-2xl text-violet-400" />
        </div>

        <div>

          <h3 className="text-3xl font-semibold">
            {category.title}
          </h3>

          <div className="mt-3 h-[2px] w-10 bg-violet-500" />

        </div>

      </div>

      <ul className="mt-8 space-y-4">

        {category.skills.map((skill) => (

          <li
            key={skill}
            className="flex gap-3 text-gray-300"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-violet-400" />
            {skill}
          </li>

        ))}

      </ul>

    </motion.div>
  );
}

export default TechCategoryCard;