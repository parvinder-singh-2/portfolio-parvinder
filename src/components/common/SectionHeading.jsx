import { Minus } from "lucide-react";

function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  description,
  centered = true,
}) {
  return (
    <div
      className={`mb-8 ${
        centered ? "mx-auto max-w-4xl text-center" : ""
      }`}
    >
      {/* Badge */}
      <div
        className={`mb-2 flex items-center gap-1 text-violet-500 ${
          centered ? "justify-center" : ""
        }`}
      >
        {BadgeIcon && <BadgeIcon size={20} />}

        <span className="text-lg font-semibold uppercase tracking-[0.25em]">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-5xl font-bold leading-tight md:text-7xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;