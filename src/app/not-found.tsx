"use client";

import { ArrowLeft, Code2, Github, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-size[40px_40px] pointer-events-none" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-2xl w-full text-center">
          <div className="flex items-center justify-center gap-2 mb-16">
            <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold text-lg">
              WebNextBot
            </span>
          </div>

          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-black bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              404
            </div>
            <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Página no encontrada
          </h1>

          <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto leading-relaxed">
            Parece que la página que buscas desapareció en el código. Pero no te
            preocupes, nuestro bot de desarrollo web puede ayudarte con
            cualquier pregunta.
          </p>

          <div className="mb-12 p-6 rounded-2xl bg-linear-to-br from-slate-800/30 to-slate-900/20 border border-slate-700/30">
            <p className="text-slate-400 font-mono text-sm">
              Error: <span className="text-cyan-400">Route</span>{" "}
              <span className="text-blue-400">/not-found</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-full transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Atrás
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-950 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 group"
            >
              <Home className="w-5 h-5" />
              Ir al inicio
            </Link>
            <Link
              href="https://github.com/KennethGVM/nextbot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-950 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 group"
            >
              <Github className="w-5 h-5" />
              Repositorio
            </Link>
          </div>

          {/* Floating elements for decoration */}
          <div className="mt-16 pt-12 border-t border-slate-700/30">
            <p className="text-slate-500 text-sm mb-8">
              ¿Necesitas ayuda? Pregúntale al bot
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              <span>Ir a WebNextBot</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
