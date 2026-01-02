import { Code, Sparkles, Zap } from "lucide-react";

const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="group p-8 rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-linear-to-br hover:from-slate-800/70 hover:to-slate-900/50">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 transition-all">
            <Zap className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-lg font-bold mb-2">Respuestas al instante</h3>
          <p className="text-slate-400 text-sm">
            Obtén soluciones en milisegundos con nuestro motor impulsado por IA.
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
    </>
  );
};
export default Cards;
