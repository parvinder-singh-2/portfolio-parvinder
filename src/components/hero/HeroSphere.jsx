function HeroSphere() {
  return (
    <div className="flex justify-center lg:justify-end">
      <img
        src={hero1}
        alt="Parvinder Singh Gandhi"
        className="
          w-full
          max-w-xs
          sm:max-w-sm
          md:max-w-md
          lg:max-w-xl
          xl:max-w-2xl
          h-auto
          object-contain
          select-none
        "
      />
    </div>
  );
}

export default HeroSphere;