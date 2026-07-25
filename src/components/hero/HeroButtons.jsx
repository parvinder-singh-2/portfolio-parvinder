import { FaArrowRight } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function HeroButtons() {
  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="mt-10 flex flex-col gap-4 sm:flex-row">

      <button
        className="
        group
        flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-violet-600
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        hover:bg-violet-500
        hover:scale-105
      "
      >
        View My Work

        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>

      <button
        className="
        group
        flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-violet-500
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        hover:bg-violet-500/10
      "
      >
        Get In Touch

        <IoPaperPlaneOutline className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </button>

    </motion.div>
  );
}

export default HeroButtons;