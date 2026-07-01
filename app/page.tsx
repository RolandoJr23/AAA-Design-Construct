import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import FeaturedProjectsGrid from "./components/FeaturedProjectsGrid";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
import ScrollReveal from "./components/ScrollReveal";
import {
  LayoutGrid,
  ShieldCheck,
  Sparkles,
  Droplets,
  HardHat,
  Ruler,
  Check,
  Mail,
  Phone
} from "lucide-react";
import ServicesGrid from "./components/ServicesGrid";

import AboutImage from "./assets/images/686400886_122168907770937303_490107985428863713_n.jpg";
import ContactImage from "./assets/images/540689138_122123372030937303_5420469847583778664_n.jpg";

const heroImage = "/hero-bg.jpg";

export default function Homepage() {
  return (
    <div className="min-h-screen text-black">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[999] focus:bg-gold focus:text-black focus:px-3 focus:py-2 rounded"
      >
        Skip to content
      </a>

      <div className="relative w-full min-h-[90vh] sm:min-h-screen overflow-hidden">
        <div className="w-full">
          <Navbar />
        </div>

        <main id="main" className="relative">

          {/* Hero */}
          <section className="w-full py-46 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-transparent"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <ScrollReveal direction="up" delay={0}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-2 text-black/70 text-sm">
                    <Sparkles className="h-4 w-4 text-amber-300" />
                    Premium design &amp; reliable construction
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={100}>
                  <h1 className="mt-5 text-white font-semibold tracking-tight text-7xl sm:text-5xl lg:text-6xl leading-[1.05]">
                    Design &amp; Construct
                    <span className="block text-gold">with timeless elegance</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                  <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-xl">
                    AAA Design &amp; Construct creates functional, durable, and beautiful spaces—built with
                    clarity, confidence, and meticulous workmanship.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={300}>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-white font-semibold hover:brightness-110 transition hover:text-amber-400"
                    >
                      <Check className="h-4 w-4" />
                      Get a Quote
                    </a>
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black px-6 py-3 text-white font-semibold hover:bg-black/30 transition hover:text-amber-400"
                    >
                      <LayoutGrid className="h-4 w-4 text-gold" />
                      View Projects
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={400}>
                  <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Renovations", value: "Premium" },
                      { label: "Residential", value: "Crafted" },
                      { label: "Commercial", value: "Built" },
                      { label: "On-time", value: "Delivered" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4">
                        <div className="text-amber-400 font-semibold">{s.value}</div>
                        <div className="text-white text-sm mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="left" delay={200} className="lg:col-span-5">
                <div className="rounded-3xl bg-white/55 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-6">
                  <h3 className="text-black font-semibold text-lg tracking-tight">
                    Why clients choose us
                  </h3>
                  <p className="text-black/70 mt-2 text-sm leading-relaxed">
                    Elegant design, engineering-minded build quality, and a smooth journey from first
                    concept to final handover.
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-3">
                    {[
                      { icon: <ShieldCheck className="h-5 w-5 text-amber-500" />, title: "Reliable & durable", desc: "Quality materials and workmanship built for long-term performance." },
                      { icon: <Ruler className="h-5 w-5 text-amber-500" />, title: "Precise planning", desc: "Clear scopes, accurate estimates, and a structured delivery timeline." },
                      { icon: <HardHat className="h-5 w-5 text-amber-500" />, title: "Craft you can feel", desc: "Detail-focused finishing for interiors that look exceptional—every day." },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-gray-300 bg-white/45 px-4 py-3">
                        <div className="mt-0.5">{item.icon}</div>
                        <div>
                          <div className="text-black font-semibold">{item.title}</div>
                          <div className="text-black/65 text-sm mt-1">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-gray-300 bg-white/55 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-black font-semibold">Free consultation</div>
                        <div className="text-black text-sm">Tell us your goals—get a clear next step within 24–48 hours.</div>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl bg-gold px-4 py-2 text-black font-semibold hover:brightness-110 transition hover:text-amber-500"
                      >
                        Start
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
            <ScrollReveal direction="up">
              <SectionHeading
                eyebrow="Services"
                title="Design that feels premium"
                description="From architectural concepts to construction-ready plans—built to last and styled to impress."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <ServicesGrid />
            </ScrollReveal>
          </section>

          {/* Featured Projects */}
          <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
            <ScrollReveal direction="up">
              <SectionHeading
                eyebrow="Featured Projects"
                title="Built with clarity & craft"
                description="A glimpse of the kinds of spaces we create—beautiful from every angle."
              />
            </ScrollReveal>
            <FeaturedProjectsGrid />
          </section>

          {/* About */}
          <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
            <ScrollReveal direction="up">
              <SectionHeading
                eyebrow="About"
                title="Elegant design + dependable construction"
                description="We merge aesthetics with structural thinking—so the result looks good and performs even better."
              />
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <ScrollReveal direction="right" delay={100}>
                <div className="rounded-3xl border border-white/15 bg-black/55 backdrop-blur-xl p-7">
                  <h3 className="text-white font-semibold text-xl">Our promise</h3>
                  <div className="mt-5 space-y-3">
                    {[
                      { icon: <Droplets className="h-5 w-5 text-amber-400" />, t: "Clean communication", d: "Clear updates and transparent planning at every step." },
                      { icon: <ShieldCheck className="h-5 w-5 text-amber-400" />, t: "Quality materials", d: "Durable selections chosen for longevity and comfort." },
                      { icon: <Sparkles className="h-5 w-5 text-amber-400" />, t: "Beautiful finishing", d: "Detail-focused results with a refined, elegant look." },
                    ].map((row) => (
                      <div key={row.t} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="mt-0.5">{row.icon}</div>
                        <div>
                          <div className="text-white font-semibold">{row.t}</div>
                          <div className="text-white/70 text-sm mt-1 leading-relaxed">{row.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200}>
                <div className="rounded-3xl overflow-hidden border border-white/15 bg-black/30">
                  <div className="relative h-80 sm:h-96">
                    <Image src={AboutImage} alt="Design and Build" fill className="object-cover" />
                  </div>
                  <div className="p-6 bg-black/55">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl border border-amber-400 bg-gold/10 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Design + Build in one team</div>
                        <div className="text-white/70 text-sm">Less friction. Better outcomes.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
            <ScrollReveal direction="up">
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something beautiful"
                description="Send us your project idea—our team will respond with a clear next step."
              />
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <ScrollReveal direction="right" delay={100} className="lg:col-span-7">
                <div className="rounded-3xl border border-white/15 bg-white/50 backdrop-blur-xl p-7 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-stone-600 text-sm">Name</span>
                        <input
                          className="mt-2 w-full rounded-2xl bg-white/5 border border-stone-600 px-4 py-3 text-stone-600 placeholder:text-stone-600 outline-none focus:border-gold/60"
                          placeholder="Your name"
                          required
                        />
                      </label>
                      <label className="block">
                        <span className="text-stone-600 text-sm">Email</span>
                        <input
                          type="email"
                          className="mt-2 w-full rounded-2xl bg-white/5 border border-stone-600 px-4 py-3 text-stone-600 placeholder:text-stone-600 outline-none focus:border-gold/60"
                          placeholder="you@example.com"
                          required
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-stone-600 text-sm">Project type</span>
                      <select
                        className="mt-2 w-full rounded-2xl bg-white/5 border border-stone-600 px-4 py-3 text-stone-600 outline-none focus:border-gold/60"
                        defaultValue="renovation"
                      >
                        <option value="customizedcabinet">Customized Cabinet</option>
                        <option value="ceilingpartition">Ceiling and Partition</option>
                        <option value="paint">Paint</option>
                        <option value="repaint">Re-Paint</option>
                        <option value="renovation">Renovation</option>
                        <option value="finishing">Finishing</option>
                        <option value="gate">Gate</option>
                        <option value="tiles">Tiles</option>
                        <option value="laminated">Laminated</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-stone-600 text-sm">Message</span>
                      <textarea
                        className="mt-2 w-full min-h-50 rounded-2xl bg-white/5 border border-stone-600 px-4 py-3 text-stone-600 placeholder:text-stone-600 outline-none focus:border-gold/60"
                        placeholder="Tell us about your goals, timeline, and style."
                        required
                      />
                    </label>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-2xl bg-gold border border-stone-600 px-7 py-3 text-black font-semibold hover:brightness-110 transition hover:text-gray-300 hover:border-gray-300 cursor-pointer"
                    >
                      <Check className="h-4 w-4" />
                      Submit
                    </button>
                  </form>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200} className="lg:col-span-5">
                <div className="space-y-5">
                  <div className="rounded-3xl border border-white/15 bg-black/55 backdrop-blur-xl p-7">
                    <h3 className="text-amber-400 font-semibold text-xl">Contact details</h3>
                    <div className="mt-5 space-y-3 text-white/75 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl border border-amber-400 bg-gold/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-amber-400 font-semibold">Email</div>
                          <div>aa019921@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl border border-amber-400 bg-gold/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-amber-400 font-semibold">Phone</div>
                          <div>+639975042829</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl overflow-hidden border border-white/15">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${ContactImage.src})` }}
                    />
                    <div className="p-6 bg-black/55">
                      <div className="text-white font-semibold">Want faster planning?</div>
                      <div className="text-white/70 text-sm mt-2">
                        Share a few photos and dimensions—our team will respond with a clear approach.
                      </div>
                      <a
                        href="#contact"
                        className="mt-4 inline-flex items-center gap-2 text-white font-semibold hover:text-amber-400 transition"
                      >
                        Send photos <Check className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
