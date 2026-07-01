"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Hammer, LayoutGrid, Building2, Paintbrush, PaintbrushVertical, ZodiacAquarius, Layers, ChevronDown } from "lucide-react";

const DoneAllIcon = dynamic(() => import("@mui/icons-material/DoneAll"), { ssr: false });
const FenceIcon = dynamic(() => import("@mui/icons-material/Fence"), { ssr: false });

const services = [
  { id: 1, icon: <Hammer className="h-5 w-5 text-stone-600" />, title: "Customized Cabinet", desc: "Beautifully crafted, space-efficient cabinets tailored to your style, needs, and home interior, combining functionality with quality workmanship." },
  { id: 2, icon: <Building2 className="h-5 w-5 text-stone-600" />, title: "Ceiling and Partition", desc: "Expertly designed ceiling and partition solutions that enhance aesthetics, maximize space, and provide a durable, functional finish for any interior." },
  { id: 3, icon: <Paintbrush className="h-5 w-5 text-stone-600" />, title: "Paint", desc: "High-quality painting services that bring color, protection, and a refined finish to residential and commercial spaces." },
  { id: 4, icon: <PaintbrushVertical className="h-5 w-5 text-stone-600" />, title: "Re-Paint", desc: "Professional repainting services that refresh, restore, and revitalize interiors and exteriors with a clean, long-lasting finish." },
  { id: 5, icon: <ZodiacAquarius className="h-5 w-5 text-stone-600" />, title: "Renovation", desc: "Comprehensive renovation services that transform existing spaces into modern, functional, and visually appealing environments tailored to your needs." },
  { id: 6, icon: <DoneAllIcon className="h-5 w-5 text-stone-600" />, title: "Finishing", desc: "Quality finishing works that add the perfect final touch, ensuring every detail reflects craftsmanship, durability, and a polished appearance." },
  { id: 7, icon: <FenceIcon className="h-5 w-5 text-stone-600" />, title: "Gate", desc: "Durable and stylish gate solutions designed to enhance security, functionality, and the overall appearance of your property." },
  { id: 8, icon: <LayoutGrid className="h-5 w-5 text-stone-600" />, title: "Tiles", desc: "Professional tile installation services that combine durability, precision, and elegant designs to create beautiful and long-lasting spaces." },
  { id: 9, icon: <Layers className="h-5 w-5 text-stone-600" />, title: "Laminated", desc: "Premium laminated finishes that provide a sleek, durable, and low-maintenance solution for modern interiors and furniture." },
];

const INITIAL = 3;

export default function ServicesGrid() {
  const [visible, setVisible] = useState(INITIAL);
  const hasMore = visible < services.length;

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.slice(0, visible).map((s) => (
          <div key={s.title} className="group rounded-3xl bg-white/50 backdrop-blur-xl p-6 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-2xl border border-stone-600 bg-gold/10">
                {s.icon}
              </div>
              <a href={`/explore?id=${s.id}`} className="text-stone-600 text-sm font-semibold opacity-80 transition group-hover:opacity-100 hover:text-amber-500">
                Explore →
              </a>
            </div>
            <div className="mt-4 text-stone-600 font-semibold text-lg uppercase">{s.title}</div>
            <div className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-2">{s.desc}</div>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-gold/70 via-white/10 to-transparent" />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setVisible(services.length)}
            className="inline-flex items-center gap-2 px-6 py-3 text-stone-600 font-semibold hover:text-gray-400 cursor-pointer"
          >
            <ChevronDown className="h-4 w-4" />
            Load more services
          </button>
        </div>
      )}
    </div>
  );
}
