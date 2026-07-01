"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { FeaturedProjectsDetails } from "../files/FeaturedPorjectsDetails";
import type { StaticImageData } from "next/image";

interface Props {
  project: FeaturedProjectsDetails | null;
  onClose: () => void;
}

function toSrc(img: string | StaticImageData): string {
  return typeof img === "string" ? img : img.src;
}

export default function FeaturedProjectsDetailsModal({ project, onClose }: Props) {
  const [current, setCurrent] = useState(0);

  const images = project?.imageProject ?? [];
  const total = images.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Reset slider index when project changes
  useEffect(() => { setCurrent(0); }, [project]);

  // Close on Escape, arrow keys for slider
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose, prev, next]);

  if (!project) return null;

  const thumbSrc = toSrc(project.imagethumbnail);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 h-9 w-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/15 transition flex items-center justify-center"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-white" />
        </button>

        {/* Image Slider */}
        {total > 0 && (
          <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-t-3xl bg-black">
            <Image
              src={toSrc(images[current] as string | StaticImageData)}
              alt={`${project.title} image ${current + 1}`}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover transition-opacity duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Arrows */}
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-black/70 transition flex items-center justify-center"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-black/70 transition flex items-center justify-center"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </>
            )}

            {/* Dots */}
            {total > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "h-2 w-6 bg-amber-400"
                        : "h-2 w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Counter */}
            <div className="absolute top-4 left-4 rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm px-3 py-1 text-white/80 text-xs font-semibold">
              {current + 1} / {total}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title + badge */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-amber-400 text-xs font-semibold mb-3">
                AAA Design &amp; Construct
              </div>
              <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <div className="h-1 w-8 rounded-full bg-amber-400" />
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">About this project</div>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">{project.description}</p>
          </div>

          {/* Thumbnail strip */}
          {total > 1 && (
            <div>
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">All Photos</div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`relative flex-shrink-0 h-16 w-20 rounded-xl overflow-hidden border-2 transition ${
                      i === current ? "border-amber-400" : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={toSrc(img as string | StaticImageData)}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="/#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-black font-semibold hover:brightness-110 transition"
            >
              Get a Quote
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
