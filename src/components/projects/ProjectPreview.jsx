function ProjectPreview({ image }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-violet-500/20 bg-[#0b0b14] shadow-2xl">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      {/* Screenshot */}
      <div className="aspect-[16/10]">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default ProjectPreview;