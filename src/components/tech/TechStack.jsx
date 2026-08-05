import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

import { techCategories } from "../../data/techStackData";
import TechRow from "./TechRow";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            variants={item}
            className="mb-5 flex items-center justify-center gap-3 uppercase tracking-[0.25em] text-violet-400"
          >
            <FaBriefcase />

            Tech Stack
          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl font-black sm:text-5xl lg:text-6xl"
          >
            Technologies I{" "}

            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Work With
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400"
          >
            I build scalable web applications using modern
            frameworks, cloud platforms and engineering tools
            focused on performance, maintainability and user
            experience.
          </motion.p>
        </motion.div>

        {/* Tech Rows */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-20

            rounded-[36px]

            border

            border-violet-500/20

            bg-white/[0.03]

            backdrop-blur-xl

            p-6

            lg:p-10
          "
        >
          {techCategories.map((category) => (
            <TechRow
              key={category.id}
              category={category}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
