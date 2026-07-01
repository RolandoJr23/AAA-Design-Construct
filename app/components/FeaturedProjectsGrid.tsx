"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { featuredprojectsdetails, type FeaturedProjectsDetails } from "../files/FeaturedPorjectsDetails";
import FeaturedProjectsDetailsModal from "./FeaturedProjectsDetailsModal";
import type { StaticImageData } from "next/image";

const INITIAL = 6;

export default function FeaturedProjectsGrid() {
  const [selected, setSelected] = useState<FeaturedProjectsDetails | null>(null);
  const [visible, setVisible] = useState(INITIAL);
  const hasMore = visible < featuredprojectsdetails.length;

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredprojectsdetails.slice(0, visible).map((project) => {
            const src = typeof project.imagethumbnail === "string"
              ? project.imagethumbnail
              : (project.imagethumbnail as StaticImageData).src;
            return (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/30 cursor-pointer"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-white font-semibold">{project.title}</div>
                    <div className="text-white/70 text-sm mt-1 line-clamp-2">{project.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisible(featuredprojectsdetails.length)}
              className="inline-flex items-center gap-2 px-6 py-3 text-stone-600 font-semibold hover:text-gray-400 cursor-pointer"
            >
              <ChevronDown className="h-4 w-4" />
              Load more projects
            </button>
          </div>
        )}
      </div>

      <FeaturedProjectsDetailsModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
