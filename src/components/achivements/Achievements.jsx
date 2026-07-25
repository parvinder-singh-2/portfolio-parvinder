import { patents, award } from "../../data/achievementsData";

import SectionHeading from "../common/SectionHeading";
import PatentGrid from "./PatentGrid";
import AwardShowcase from "./AwardShowcase";

function Achievements() {
  return (
    <section className="relative py-20 overflow-hidden">

      <div className="container mx-auto px-6">

        <SectionHeading
          badge="PATENTS & ACHIEVEMENTS"
          title="Innovation"
          highlight="Recognized"
          description="From research to real world impact — building solutions that create value and solve critical problems."
        />

        <PatentGrid patents={patents} />

        <AwardShowcase award={award} />

      </div>

    </section>
  );
}

export default Achievements;