import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectNavigation({
  current,
  total,
  setCurrent,
}) {
  return (
    <>
      <button
        onClick={() =>
          setCurrent((current - 1 + total) % total)
        }
        className="absolute left-[-70px] top-1/2 -translate-y-1/2 z-20"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={() =>
          setCurrent((current + 1) % total)
        }
        className="absolute right-[-70px] top-1/2 -translate-y-1/2 z-20"
      >
        <ChevronRight size={36} />
      </button>
    </>
  );
}

export default ProjectNavigation;