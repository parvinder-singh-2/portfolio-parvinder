import { IoChevronForward } from "react-icons/io5";
import {motion} from "framer-motion"
import { MdWork } from "react-icons/md";

import {
  currentFocus,
  profileStats,
} from "../../data/aboutData";
import { FaQuoteLeft } from "react-icons/fa6";

function AboutInfoCard() {
  return (
    <motion.div
      initial={{
          opacity:0,
          x:50,
      }}

      whileInView={{
          opacity:1,
          x:0,
      }}

      viewport={{
          once:true,
          amount:0.3,
      }}

      transition={{
          duration:.8
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-violet-500/30
      bg-white/[0.04]
      backdrop-blur-2xl
      shadow-[0_0_50px_rgba(139,92,246,.08)]
    "
    >
      {/* Glow */}

      <motion.div
        animate={{
            scale:[1,1.1,1],
            opacity:[0.08,0.14,0.08]
        }}

        transition={{
            duration:8,
            repeat:Infinity
        }}
        className="
        absolute
        right-0
        top-0
        h-72
        w-72
        rounded-full
        bg-violet-500/10
        blur-[120px]
      "
      />

      <div className="relative p-6 sm:p-8">

        {/* Header */}

        <div className="flex items-start gap-4 sm:gap-5">

        <FaQuoteLeft
            className="mt-1 text-2xl sm:text-3xl lg:text-5xl text-violet-500" />

          <div>

            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight">
              Building technology that
            </h3>

            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight">
              solves real-world problems.
            </h3>

            <div className="mt-6 h-[2px] w-28 bg-violet-500" />

          </div>

        </div>

        {/* Focus */}

        <div
          className="
          mt-10
          rounded-2xl
          border
          border-white/10
          bg-black/10
          backdrop-blur-xl
        "
        >

          {currentFocus.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                whileHover={{
                    y:-6,
                    scale:1.01,
                }}

                transition={{
                    duration:.35
                }}
                className={`
                flex
                items-center
                justify-between
                px-4 sm:px-6
                py-4 sm:py-5

                ${
                  index !== currentFocus.length - 1
                    ? "border-b border-white/10"
                    : ""
                }
              `}
              >

                <div className="flex items-center gap-5">

                  <div
                    className="
                    flex
                    h-12
                    w-12
                    sm:h-14
                    sm:w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-violet-500/10
                  "
                  >
                    <Icon
                      size={28}
                      className="text-sm text-violet-400"
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-violet-400">
                      {item.subtitle}
                    </p>

                  </div>

                </div>

                <IoChevronForward
                className="text-xl group-hover:translate-x-1 transition-all text-white/40"
                />

              </motion.div>

            );
          })}
        </div>

        {/* Footer */}

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0">

          {profileStats.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className={`
                group
                flex
                transition-all
                duration-300

                hover:bg-white/[0.03]
                items-center
                gap-3

                ${
                  index !== profileStats.length - 1
                    ? "border-white/10"
                    : ""
                }
              `}
              >

                <Icon
                  size={24}
                  className="text-violet-500"
                />

                <div>

                  <p className="text-sm text-gray-400">
                    {item.title}
                  </p>

                  <p className="font-semibold text-sm sm:text-base">
                    {item.value}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </motion.div>
  );
}

export default AboutInfoCard;