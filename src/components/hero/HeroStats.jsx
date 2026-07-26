import HeroStatCard from "./HeroStatCard";
import { heroStats } from "../../data/heroData";

function HeroStats() {
  return (
    <div
      className="
      grid
      gap-4
      grid-cols-4
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