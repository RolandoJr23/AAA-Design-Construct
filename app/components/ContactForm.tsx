"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Check } from "lucide-react";

const SERVICE_ID = "service_gz72xi5";
const TEMPLATE_ID = "template_ihcr9le";
const PUBLIC_KEY = "l5qaXYtvPZYVTNTIC";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-3xl border border-white/15 bg-white/50 backdrop-blur-xl p-7 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-stone-600 text-sm">Name</span>
            <input
              name="user_name"
              className="mt-2 w-full rounded-2xl bg-white/5 border border-stone-600 px-4 py-3 text-stone-600 placeholder:text-stone-600 outline-none focus:border-gold/60"
              placeholder="Your name"
              required
            />
          </label>
          <label className="block">
            <span className="text-stone-600 text-sm">Email</span>
            <input
              name="user_email"
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
            name="subject"
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
            name="message"
            className="mt-2 w-full min-h-50 rounded-2xl bg-white/5 border border-stone-600 px-4 py-3 text-stone-600 placeholder:text-stone-600 outline-none focus:border-gold/60"
            placeholder="Tell us about your goals, timeline, and style."
            required
          />
        </label>

        {status === "success" && (
          <p className="text-green-600 text-sm font-medium">
            Message sent! We&apos;ll get back to you within 24–48 hours.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm font-medium">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-2xl bg-gold border border-stone-600 px-7 py-3 text-black font-semibold hover:brightness-110 transition hover:text-gray-300 hover:border-gray-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Check className="h-4 w-4" />
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
      </form>
    </div>
  );
}
