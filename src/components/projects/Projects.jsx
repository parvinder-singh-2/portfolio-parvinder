import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "../../data/projectsData";

import ProjectCard from "./ProjectCard";
import ProjectNavigation from "./ProjectNavigation";
import ProjectPagination from "./ProjectPagination";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
};

function Projects() {
  const [[currentProject, direction], setProject] = useState([0, 0]);

  const paginate = (newDirection) => {
    setProject(([current]) => [
      (current + newDirection + projects.length) % projects.length,
      newDirection,
    ]);
  };

  return (
    <section className="relative py-14" id="projects">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-violet-400 uppercase tracking-[0.25em] font-medium">
            Featured Projects
          </p>

          <h2 className="mt-0 text-4xl md:text-5xl lg:text-6xl font-bold">
            Things I've{" "}
            <span className="text-violet-500">Built</span>
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-400 text-base lg:text-lg">
            A showcase of impactful projects where I solved real-world
            problems and built scalable, efficient solutions.
          </p>
        </div>

        <div className="relative">

          <ProjectNavigation
            current={currentProject}
            total={projects.length}
            setCurrent={(index) =>
              setProject([
                index,
                index > currentProject ? 1 : -1,
              ])
            }
          />

          {/* Left Arrow */}
            <button
              onClick={() => paginate(-1)}
              className="
                absolute sm:hidden
                left-3
                top-1/2
                -translate-y-1/2
                z-20
                flex
                h-10
                w-10
                md:h-12
                md:w-12
                items-center
                justify-center
                rounded-full
                border border-violet-500/40
                bg-[#15111f]/90
                backdrop-blur
                transition-all
                hover:bg-violet-600
                hover:scale-110
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => paginate(1)}
              className="
                absolute sm:hidden
                right-3
                top-1/2
                -translate-y-1/2
                z-20
                flex
                h-10
                w-10
                md:h-12
                md:w-12
                items-center
                justify-center
                rounded-full
                border border-violet-500/40
                bg-[#15111f]/90
                backdrop-blur
                transition-all
                hover:bg-violet-600
                hover:scale-110
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          <AnimatePresence
            mode="wait"
            initial={false}
            custom={direction}
          >
            <motion.div
              key={currentProject}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              whileTap={{ cursor: "grabbing" }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) paginate(1);
                if (info.offset.x > 80) paginate(-1);
              }}
            >
              <ProjectCard project={projects[currentProject]} />
            </motion.div>
          </AnimatePresence>

          <ProjectPagination
            current={currentProject}
            total={projects.length}
            setCurrent={(index) =>
              setProject([
                index,
                index > currentProject ? 1 : -1,
              ])
            }
          />

        </div>
      </div>
    </section>
  );
}

export default Projects;