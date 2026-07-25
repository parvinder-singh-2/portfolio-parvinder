import { motion } from "framer-motion";

import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../../data/experienceData";

function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical Timeline */}
        <div className="absolute left-[200px] top-0 hidden h-full lg:block">
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-full w-px bg-gradient-to-b from-violet-400 via-violet-500 to-violet-400"
            />
        </div>

      <div className="space-y-10 lg:space-y-20">
        {experienceData.map((item, index) => (
          <div
            key={item.id}
            className="relative lg:grid lg:grid-cols-[140px_40px_1fr] lg:gap-10"
          >
            {/* Year */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="mb-6 lg:mb-0"
            >
              <p className="text-2xl font-bold text-white">
                {item.period}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {item.duration}
              </p>
            </motion.div>

            {/* Timeline Dot */}
            <div className="relative hidden lg:flex justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  delay: index * 0.15,
                }}
                className="
                  mt-3
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-black
                  bg-violet-500
                  shadow-[0_0_25px_rgba(139,92,246,0.8)]
                "
              />
            </div>

            {/* Card */}
            <ExperienceCard
              {...item}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;