import { FaArrowRight } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function HeroButtons() {
  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="mt-8 gap-4 grid md:grid-cols-2">

      <button
        className="
        group
        flex
        items-center
        justify-center
        gap-3
        bg-violet-600
        rounded-xl
        px-8
        py-4
        text-2xl
        font-semibold
        transition-all
        duration-300
        hover:bg-violet-500
        hover:scale-105
        w-auto
      "
      >
        View My Work

        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>

      <button
        className="
        w-auto
        group
        flex
        items-center
        justify-center
        gap-3
        text-2xl
        border
        border-violet-500
        rounded-xl
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