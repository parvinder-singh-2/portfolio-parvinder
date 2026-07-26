function HeroStatCard({
  icon: Icon,
  value,
  title,
  subtitle,
}) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-5
      sm:p-6
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-violet-500/40
      hover:shadow-2xl
      hover:shadow-violet-600/10
    "
    >
      <div className="flex gap-4">

        <div
          className="
          mb-6
          flex
          h-12
          w-12
          sm:h-14
          sm:w-14
          lg:h-16
          lg:w-16
          text-2xl
          sm:text-3xl
          items-center
          justify-center
          rounded-3xl
          bg-violet-500/10
          text-violet-400
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-violet-600
          group-hover:text-white
          "
          >
          <Icon />
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xlfont-bold">
          {value}
        </h3>
      </div>

      <p className="text-lg sm:text-xl font-semibold">
        {title}
      </p>

      <p className="text-xs sm:text-sm text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}

export default HeroStatCard;