import PatentCard from "./PatentCard";

function PatentGrid({ patents }) {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {patents.map((patent) => (
        <PatentCard
          key={patent.id}
          patent={patent}
        />
      ))}

    </div>
  );
}

export default PatentGrid;