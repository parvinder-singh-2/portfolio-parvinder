import HeroStatCard from "./HeroStatCard";
import { heroStats } from "../../data/heroData";

function HeroStats() {
  return (
    <div
      className="
      grid
      grid-cols-1
      gap-4
      sm:grid-cols-2
      lg:grid-cols-4
      xl:grid-cols-4
    "
    >
      {heroStats.map((stat) => (
        <HeroStatCard
          key={stat.id}
          {...stat}
        />
      ))}
    </div>
  );
}

export default HeroStats;