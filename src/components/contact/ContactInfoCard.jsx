import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ContactInfoCard({
  title,
  value,
  icon: Icon,
  href,
  external = false,
}) {
  const Component = href ? motion.a : motion.div;

  return (
    <Component
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        flex
        items-center
        gap-5
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        p-4
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:bg-violet-500/[0.04]
        hover:shadow-[0_0_30px_rgba(139,92,246,.12)]
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: -8,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="
          relative
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-violet-500/10
          text-violet-400
        "
      >
        <Icon size={20} strokeWidth={1.8} />
      </motion.div>

      {/* Text */}

      <div className="relative min-w-0 flex-1">
        <h4 className="text-md lg:text-lg font-semibold text-white">
          {title}
        </h4>

        <p className="mt-1 truncate text-sm lg:text-md text-gray-400">
          {value}
        </p>
      </div>

      {/* Arrow */}

      {href && (
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
          className="
            text-violet-400
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={22} />
        </motion.div>
      )}
    </Component>
  );
}

export default ContactInfoCard;