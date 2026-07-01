"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import { servicesdetails } from "../files/ServicesDetails";
import type { StaticImageData } from "next/image";

import thumbNail from "../assets/images/aaadesignconstructthumbnail.png";

function ExploreContent() {
  const params = useSearchParams();
  const id = params.get("id");
  const service = servicesdetails.find((s) => String(s.id) === id) ?? servicesdetails[0];

  const thumbSrc = thumbNail;

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Hero */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] overflow-hidden">
        <Image
          src={thumbSrc}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <a
            href="/"
            className="group inline-flex items-center gap-2 px-4 py-2 text-stone-600 text-sm font-semibold hover:text-gray-300 transition"
          >
            <ArrowLeft className="inline-block w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </a>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 pb-10">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-amber-400/10 px-3 py-1 text-stone-700 text-xs font-semibold mb-3 ">
              <Sparkles className="h-3 w-3" />
              AAA Design &amp; Construct
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-700">
              {service.title}
            </h1>
            <p className="mt-2 text-stone-600 text-base ">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-6 sm:px-12 py-14 space-y-14">

        {/* Overview */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-1 w-8 rounded-full bg-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Overview</span>
          </div>
          <p className="text-stone-600 leading-relaxed text-base">{service.overview}</p>
        </div>

        {/* Project Gallery */}
        {service.imageProject && service.imageProject.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 rounded-full bg-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Project Gallery</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.imageProject.map((img, idx) => {
                const src = typeof img === "string" ? img : (img as StaticImageData).src;
                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 aspect-[4/3]"
                  >
                    <Image
                      src={src}
                      alt={`${service.title} project ${idx + 1}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition duration-300">
                      <span className="text-white text-xs font-semibold bg-black/50 rounded-lg px-2 py-1">
                        {service.title} #{idx + 1}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-transparent p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-stone-900 font-bold text-xl">Interested in {service.title}?</h3>
            <p className="text-stone-700 text-sm mt-1">Get a free consultation and clear next steps within 24–48 hours.</p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-stone-700 font-semibold hover:brightness-110 transition whitespace-nowrap"
          >
            Get a Quote
          </a>
        </div>

        {/* Other Services */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-8 rounded-full bg-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Other Services</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {servicesdetails
              .filter((s) => s.id !== service.id)
              .map((s) => {
                const src = typeof s.imagethumbnail === "string" ? s.imagethumbnail : (s.imagethumbnail as StaticImageData).src;
                return (
                  <a
                    key={s.id}
                    href={`/explore?id=${s.id}`}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 aspect-[4/3]"
                  >
                    <Image src={src} alt={s.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-white text-xs font-semibold leading-tight">{s.title}</div>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white/50">Loading...</div>}>
      <ExploreContent />
    </Suspense>
  );
}
