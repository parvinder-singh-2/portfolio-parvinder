import { motion } from "framer-motion";

function TechBubble({ tech, index }) {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      animate={{
            y:[0,-6,0]
        }}
        transition={{
            y:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:3 + Math.random()*2,
                delay:index*0.25
            }
        }}
      whileHover={{
        y: -10,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="group relative flex flex-col items-center flex-shrink-0"
    >
      {/* Glow */}

      <div className="absolute h-24 w-24 rounded-full bg-violet-500/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Bubble */}

      <div
        className="
        relative
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-full

        border

        border-violet-400/40

        bg-gradient-to-br

        from-white/10

        via-white/5

        to-transparent

        backdrop-blur-xl

        transition-all

        duration-300

        group-hover:border-violet-400

        group-hover:shadow-[0_0_30px_rgba(168,85,247,.45)]
      "
      >
        {/* Animated Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "linear",
          }}
          className="
          absolute
          inset-0
          rounded-full
          border
          border-violet-500/20
        "
        />

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 12,
            scale: 1.15,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
          }}
        >
          <Icon
            size={42}
            style={{
              color: tech.color,
            }}
          />
        </motion.div>

        {/* Floating particles */}

        <span className="absolute left-2 top-3 h-1.5 w-1.5 rounded-full bg-violet-400 opacity-80 animate-pulse" />

        <span className="absolute right-3 bottom-4 h-1 w-1 rounded-full bg-violet-300 opacity-70 animate-ping" />

        <span className="absolute right-5 top-2 h-1 w-1 rounded-full bg-white opacity-70 animate-pulse" />
      </div>

      {/* Name */}

      <p
        className="
        mt-3
        text-center
        text-sm
        font-medium
        text-gray-200
        transition
        group-hover:text-white
      "
      >
        {tech.name}
      </p>
    </motion.div>
  );
}

export default TechBubble;