"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import dynamic from "next/dynamic";

const FacebookIcon = dynamic(() => import("@mui/icons-material/Facebook"), { ssr: false });
const InstagramIcon = dynamic(() => import("@mui/icons-material/Instagram"), { ssr: false });

import AAADesignConstruct from "../assets/logo/aaadesignconstructicon.png";
import AAADesignConstruct2 from "../assets/logo/aaadesignconstruct_nobgg.png";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <div className="h-16 w-16 flex items-center justify-center">
                <span className="inline-flex items-center justify-center h-16 w-16">
                  <Image
                    src={AAADesignConstruct.src}
                    alt="AAA Design & Construct"
                    width={48}
                    height={40}
                    className="h-10 w-12"
                  />
                </span>
              </div>
              <div>
                <Image
                  src={AAADesignConstruct2.src}
                  alt="AAA Design & Construct"
                  width={200}
                  height={48}
                  className="h-12 w-full"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-white/70 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Globe className="h-4 w-4 text-gold" />
                Residential &amp; Commercial
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <MapPin className="h-4 w-4 text-gold" />
                <h3 className='text-xs'><a href="https://maps.app.goo.gl/D8vQ3rws695wPR5Y7" target="_blank">Local service</a></h3>
              </span>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Quick Links</div>
            <div className="mt-4 space-y-3 text-white/70 text-sm">
              <a className="block hover:text-white transition" href="#services">
                Services
              </a>
              <a className="block hover:text-white transition" href="#projects">
                Projects
              </a>
              <a className="block hover:text-white transition" href="#about">
                About
              </a>
              <a className="block hover:text-white transition" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Contact</div>
            <div className="mt-4 space-y-3 text-white/70 text-sm">
              <a
                className="flex items-center gap-2 hover:text-white transition"
                href="#contact"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span>+639975042829</span>
              </a>
              <a
                className="flex items-center gap-2 hover:text-white transition"
                href="#contact"
              >
                <Mail className="h-4 w-4 text-gold" />
                <span>aa019921@gmail.com</span>
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
              >
                <span className="text-blue-400 font-semibold text-sm">
                  <FacebookIcon className="object-cover"/>
                </span>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
              >
                <span className="text-pink-400 font-semibold text-sm">
                  <InstagramIcon className="object-cover"/>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-white/50 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            {`© ${new Date().getFullYear()} AAA Design & Construct. All rights reserved.`}
          </div>
          <div className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>Design • Build • Create • Better Spaces</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

