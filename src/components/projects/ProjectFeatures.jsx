import { CheckCircle2 } from "lucide-react";

function ProjectFeatures({ features }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">

      {features.map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-3"
        >
          <CheckCircle2
            size={18}
            className="text-violet-500"
          />

          <span>{feature}</span>

        </div>
      ))}

    </div>
  );
}

export default ProjectFeatures;