"use client";

import type React from "react";
import { useState } from "react";
import { Loader2, Send} from "lucide-react";

export default function NextBotForm() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    const search = encodeURIComponent(`${category}. Pregunta: ${question}`);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_NEXT}/api?search=${search}`
    );
    return res.json();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (question === "" || category === "") {
      alert("Por favor, rellene los campos.");
      return;
    } else {
      setResult("");
      setLoading(true);
      e.preventDefault();
      getData()
        .then((r) => {
          setResult(r.data);
          setCategory("");
          setQuestion("");
        })
        .catch((e) => {
          setError(
            `Error: No se pudo procesar tu pregunta. Intenta de nuevo. ${e}`
          );
          alert(`No se pudo hacer la peticion: ${e}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative rounded-3xl bg-linear-to-br from-slate-900/80 via-slate-950/80 to-slate-950/90 border border-cyan-500/20 p-0 backdrop-blur-xl overflow-hidden group">
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Pregunta al Bot
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Obtén respuestas instantáneas sobre desarrollo web
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-slate-100 tracking-wide"
              >
                Categoría
              </label>
              <div className="relative">
                <select
                  id="category"
                  required
                  disabled={loading}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-linear-to-r from-slate-900/50 to-slate-900/30 border border-slate-700/50 text-white placeholder-black focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 disabled:opacity-50 appearance-none cursor-pointer hover:border-slate-600/50 font-medium"
                >
                  <option className="bg-slate-900 text-white" value="">Selecciona una categoría...</option>
                  <option className="bg-slate-900 text-white" value="Frontend">Frontend Development</option>
                  <option className="bg-slate-900 text-white" value="Backend">Backend Development</option>
                  <option className="bg-slate-900 text-white" value="Web Performance & Optimization">
                    Web Performance & Optimization
                  </option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="question"
                className="block text-sm font-semibold text-slate-100 tracking-wide"
              >
                Tu pregunta
              </label>
              <textarea
                id="question"
                required
                disabled={loading}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Describe tu pregunta sobre desarrollo web en detalle. Por ejemplo: ¿Cómo optimizar el rendimiento de imágenes en Next.js?"
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-linear-to-r from-slate-900/50 to-slate-900/30 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none disabled:opacity-50 hover:border-slate-600/50 font-medium leading-relaxed"
              />
              <p className="text-xs text-slate-500">
                Sé lo más específico posible para mejores resultados
              </p>
            </div>

            {error && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-r from-red-500/10 to-red-500/5 border border-red-500/30 backdrop-blur-sm">
                <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs">!</span>
                </div>
                <p className="text-red-200 text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-600 hover:via-blue-600 hover:to-cyan-600 disabled:from-slate-600 disabled:via-slate-700 disabled:to-slate-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/40 disabled:shadow-none disabled:cursor-not-allowed group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 translate-x-full group-hover:translate-x-0" />
              <div className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Procesando tu pregunta...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar pregunta</span>
                  </>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>

      {result && (
        <div className="mt-8 rounded-3xl bg-linear-to-br from-slate-900/80 via-slate-950/80 to-slate-950/90 border border-cyan-500/20 p-8 md:p-12 backdrop-blur-xl animate-in fade-in duration-500 group">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-400" />
              <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Respuesta
              </h3>
            </div>
            <p className="text-slate-200 leading-relaxed whitespace-pre-wrap text-base">
              {result}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
