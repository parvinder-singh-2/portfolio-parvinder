import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

import {
  techCategories,
  learningStack,
} from "../../data/techStackData";

import TechCategoryCard from "./TechCategoryCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
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
    <section className="relative min-h-screen items-center justify-center flex" id="stack">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: .25 }}
          variants={container}
          className="text-center"
        >
          <motion.p
            variants={item}
            className="mb-5 flex justify-center items-center gap-3 text-xl tracking-[0.2em] uppercase text-violet-400"
          >
            <FaBriefcase />
            My Skills
          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-black"
          >
            Technologies I{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Work With
            </span>
          </motion.h2>

          <motion.div
            variants={item}
            className="mx-auto my-6 flex items-center justify-center gap-4"
          >
            <div className="h-[2px] w-24 bg-violet-500" />
            <div className="h-2 w-2 rounded-full bg-violet-500" />
            <div className="h-[2px] w-24 bg-violet-500" />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto max-w-3xl text-lg text-gray-400"
          >
            I use modern technologies and tools to build scalable,
            efficient and user-friendly web applications.
          </motion.p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: .2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-5"
        >
          {techCategories.map((category) => (
            <TechCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </motion.div>

        {/* Footer

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12"
        >
          <LearningCard learning={learningStack} />
        </motion.div> */}

      </div>
    </section>
  );
}

export default TechStack;