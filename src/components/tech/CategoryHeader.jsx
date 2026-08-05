import { motion } from "framer-motion";

function CategoryHeader({ category }) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        flex
        items-center
        gap-5

        lg:min-w-[280px]
        lg:max-w-[280px]

        md:min-w-[220px]

        w-full
      "
    >
      {/* Icon */}

      <div
        className="
          relative
          flex
          h-20
          w-20
          shrink-0
          items-center
          justify-center
          rounded-full

          border
          border-violet-500/30

          bg-gradient-to-br
          from-violet-500/20
          via-violet-500/5
          to-transparent

          backdrop-blur-xl
        "
      >
        {/* Glow */}

        <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl" />

        <Icon className="relative text-4xl text-violet-400" />
      </div>

      {/* Content */}

      <div>

        <h3 className="text-2xl font-bold text-violet-400 uppercase tracking-wide">
          {category.title}
        </h3>

        <p className="mt-2 text-gray-400 leading-7 hidden lg:block">
          {category.description}
        </p>

      </div>

    </motion.div>
  );
}

export default CategoryHeader;