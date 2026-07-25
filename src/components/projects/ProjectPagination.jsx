function ProjectPagination({
  current,
  total,
  setCurrent,
}) {
  return (
    <div className="flex justify-center items-center gap-8 mt-10">

      {Array.from({ length: total }).map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`transition ${
            current === index
              ? "text-violet-400"
              : "text-gray-500"
          }`}
        >
          {(index + 1).toString().padStart(2, "0")}
        </button>

      ))}

    </div>
  );
}

export default ProjectPagination;