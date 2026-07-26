import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

function HeroSocials() {
  const socials = [
    FaGithub,
    FaLinkedinIn,
    MdOutlineEmail,
  ];

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="mt-6 gap-4 flex">

      {socials.map((Icon, index) => (
        <button
          key={index}
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-violet-500
          text-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-violet-600
          hover:shadow-lg
          hover:shadow-violet-600/40
        "
        >
          <Icon />
        </button>
      ))}

    </motion.div>
  );
}

export default HeroSocials;