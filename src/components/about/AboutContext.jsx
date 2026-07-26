import HeroButtons from "../hero/HeroButtons";
import HeroSocials from "../hero/HeroSocials";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { IoPersonSharp } from "react-icons/io5";
import {aboutHighlights} from "../../data/aboutData"


function HeroContent() {

      const containerVariants = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.18,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
      },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };
  return (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
            once:true,
            amount:0.25
        }}
    >

      <motion.p variants={itemVariants} className="mb-5 text-violet-400 text-4xl sm:text-5xl lg:text-6xl leading-none tracking-wide flex gap-3 items-center">
        <IoPersonSharp />About Me
      </motion.p>

      <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl leading-none font-black tracking-tight">

        Get To Know

        <br />

        <motion.span variants={itemVariants} className="bg-gradient-to-r text-3xl sm:text-4xl lg:text-5xl from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent ">
          Me Better
          <div className="w-28 sm:w-36 lg:w-44 h-0.5 mt-2 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500"></div>
        </motion.span>

      </motion.h1>

    <div className="">
      {aboutHighlights.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            whileHover={{
                  x:8,
              }}
            className={`flex flex-col sm:flex-row gap-3 mt-5 ${
              index !== aboutHighlights.length - 1
                ? "border-b border-white/10 pb-3"
                : ""
            }`}
          >
            {/* Icon */}
            <div className="gap-5 flex flex-row lg:flex-row items-center">
              <motion.div
                whileHover={{
                  rotate:12,
                  scale:1.1,
                }}
                className="
                flex
                h-14
                w-14
                sm:h-16
                sm:w-16
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                "
                >
                <Icon className="text-3xl text-violet-500" />
              </motion.div>

            {/* Content */}

              <h3 className="mb-1 text-xl sm:text-2xl font-semibold text-white">
                {item.title}
              </h3>
            </div>

              <p className="text-sm sm:text-base leading-7 text-gray-400">
                {item.description}
              </p>
          </motion.div>
        );
      })}
    </div>
    </motion.div>
  );
}

export default HeroContent;