import { ArrowRight, Code2, Github, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-2xl font-bold mb-24">
        <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
          <Code2 className="w-6 h-6 text-white" />
        </div>
        <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          WebNextBot
        </span>
      </div>
      <div className="text-center mb-16">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">
              AI-powered web development assistant
            </span>
          </div>

          <Link
            href="https://github.com/KennethGVM/nextbot"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">
              Repositorio
            </span>
          </Link>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
          Tu asistente IA para
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            desarrollo web
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
          Obtén respuestas instantáneas a tus preguntas sobre Frontend, Backend
          y optimización de rendimiento. Soluciones en segundos, no en horas.
        </p>

        <Link
          href="/bot"
          className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-950 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 group"
        >
          Pregunta al Bot
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </>
  );
};
export default Hero;
