import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

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
      animate="show"
    >

      <motion.p variants={itemVariants} className="mb-5 text-violet-400 text-base sm:text-lg lg:text-xl tracking-wide">
        Hello, I'm 👋
      </motion.p>

      <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">

        PARVINDER

        <br />

        <motion.span variants={itemVariants} className="bg-gradient-to-r text-4xl sm:text-5xl md:text-6xl lg:text-7xl from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent ">
          SINGH GANDHI
        </motion.span>

      </motion.h1>
      <motion.div variants={itemVariants} className="mt-5 h-8 sm:h-10 md:h-12">
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1800,
            "Python Developer",
            1800,
            "React Developer",
            1800,
            "FastAPI Developer",
            1800,
            "Problem Solver",
            1800,
          ]}
          wrapper="span"
          speed={45}
          repeat={Infinity}
          className="
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            font-semibold
            text-blue-400
          "
        />
      </motion.div>

      <motion.p variants={itemVariants} className="mt-2 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
        I build scalable and efficient web applications with
        React, FastAPI and PostgreSQL. Passionate about solving
        real-world problems through code and creating meaningful
        digital experiences.
      </motion.p>

      <HeroButtons />

      <HeroSocials />

    </motion.div>
  );
}

export default HeroContent;