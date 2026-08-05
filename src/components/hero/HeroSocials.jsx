import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

function HeroSocials() {
  const socials = [
    {
      icon: FaGithub,
      link: "https://github.com/parvinder-singh-2",
      label: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/itzparvinder/",
      label: "LinkedIn",
    },
    {
      icon: MdOutlineEmail,
      link: "mailto:Mr.ParvinderSinghGandhi@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="mt-10 flex gap-5"
    >
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
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
          </a>
        );
      })}
    </motion.div>
  );
}

export default HeroSocials;