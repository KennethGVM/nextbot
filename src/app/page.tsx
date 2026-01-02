"use client";

import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Pros from "./components/Pros";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-5xl w-full">
          <Hero />
          <Cards />
          <Pros />
        </div>
      </div>
    </div>
  );
}
