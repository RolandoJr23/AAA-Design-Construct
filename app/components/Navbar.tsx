"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

import {
  Menu,
  X,
  Hammer,
  LayoutGrid,
  Info,
  Phone,
  Mail,
} from "lucide-react";

const navItems = [
  { href: "#services", label: "Services", Icon: Hammer },
  { href: "#projects", label: "Projects", Icon: LayoutGrid },
  { href: "#about", label: "About", Icon: Info },
  { href: "#contact", label: "Contact", Icon: Phone },
];

import AAADesignConstruct from "../assets/logo/aaadesignconstructicon.png";
import AAADesignConstruct2 from "../assets/logo/aaadesignconstruct_nobgg.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () =>
      navItems.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 bg-black/20 group-hover:border-gold/50 group-hover:bg-gold/10 transition ">
            {Icon ? (
              <Icon className="h-4 w-4 text-gold" />
            ) : (
              <Image
                src={AAADesignConstruct}
                alt="AAA Design & Construct"
                className="h-4 w-4"
              />
            )}
          </span>
          <span>{label}</span>
        </a>
      )),
    []
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 " />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pointer-events-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="relative">
              <div className="h-16 w-16 flex items-center justify-center">
                <span className="inline-flex items-center justify-center h-16 w-16">
                  <Image
                    src={AAADesignConstruct}
                    alt="AAA Design & Construct"
                    width={48}
                    height={40}
                  />
                </span>
              </div>
            </div>

            <div className="leading-tight z-5">
              <Image
                src={AAADesignConstruct2}
                alt="AAA Design & Construct"
                width={200}
                height={48}
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="relative group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:text-amber-400 transition"
              >
                {Icon ? (
                  <Icon className="h-4 w-4 text-gold" />
                ) : (
                  <Image
                    src={AAADesignConstruct}
                    alt="AAA Design & Construct"
                    className="h-4 w-4"
                  />
                )}
                <span>{label}</span>
                <span className="absolute left-3 right-3 -bottom-1 h-px bg-gold transform scale-x-0 group-hover:scale-x-100 transition origin-left" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-400 bg-gold/10 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-gold/15 transition hover:text-gray-200 hover:border-gray-200"
            >
              <Mail className="h-4 w-4" />
              Get a quote
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-white/10 bg-black/30 hover:bg-black/50 transition"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
            <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="p-3">{links}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

