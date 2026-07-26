import HeroContent from "./HeroContent"
import HeroSphere from "./HeroSphere"
import HeroStats from "./HeroStats"

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-24 pb-14"
    >
      <div className="mx-auto w-full max-w-7xl px-12">

        <div className="grid items-center lg:grid-cols-2 gap-16">

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