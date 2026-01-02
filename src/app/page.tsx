"use client";

import { Code2, Zap, Code, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-size[40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-5 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-5xl w-full">
          <div className="flex items-center gap-2 text-2xl font-bold mb-24">
            <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              WebNextBot
            </span>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                AI-powered web development assistant
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
              Tu asistente IA para
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                desarrollo web
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
              Obtén respuestas instantáneas a tus preguntas sobre Frontend,
              Backend y optimización de rendimiento. Soluciones en segundos, no
              en horas.
            </p>

            <Link
              href="/bot"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-950 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 group"
            >
              Pregunta al Bot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="group p-8 rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-linear-to-br hover:from-slate-800/70 hover:to-slate-900/50">
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 transition-all">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Respuestas al instante</h3>
              <p className="text-slate-400 text-sm">
                Obtén soluciones en milisegundos con nuestro motor impulsado por
                IA.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-linear-to-br hover:from-slate-800/70 hover:to-slate-900/50">
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center mb-4 group-hover:from-blue-500/30 transition-all">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Ejemplos de código</h3>
              <p className="text-slate-400 text-sm">
                Muestras prácticas y claras para cada solución.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-linear-to-br hover:from-slate-800/70 hover:to-slate-900/50">
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 transition-all">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Disponible 24/7</h3>
              <p className="text-slate-400 text-sm">
                Nunca más esperes por soporte. Siempre aquí para ayudarte.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-sm text-slate-400">
                Preguntas respondidas
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-sm text-slate-400">
                Satisfacción de usuarios
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                &lt;1s
              </div>
              <div className="text-sm text-slate-400">
                Tiempo promedio de respuesta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
