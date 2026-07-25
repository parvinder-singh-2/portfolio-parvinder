import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceStats from "./ExperienceStats";
import { BriefcaseBusiness } from "lucide-react";
import SectionHeader from "../common/SectionHeading";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 md:py-32"
    >
        <SectionHeader
        badgeIcon={BriefcaseBusiness}
        badge="Experience"
        title="My Professional"
        highlight="Journey"
        subtitle="A journey of growth, learning and delivering value across different roles and responsibilities."
        />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* <ExperienceHeader /> */}

        <div className="mt-20">
          <ExperienceTimeline />
        </div>

        <div className="mt-16">
          <ExperienceStats />
        </div>

      </div>
    </section>
  );
}

export default Experience;