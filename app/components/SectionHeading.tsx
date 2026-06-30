import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-amber-500 font-semibold tracking-widest text-xs">{eyebrow}</div>
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-black/70">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-black/70 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

