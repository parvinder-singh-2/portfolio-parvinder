import HeroContent from "./HeroContent"
import HeroSphere from "./HeroSphere"
import HeroStats from "./HeroStats"

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-24 pb-14"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-12">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <HeroContent />

          <HeroSphere />

        </div>

        <div className="mt-4 md:mt-8">
          <HeroStats />
        </div>

      </div>
    </section>
  );
}

export default Hero;