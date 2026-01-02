const Pros = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-700/50">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
          10K+
        </div>
        <div className="text-sm text-slate-400">Preguntas respondidas</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
          99%
        </div>
        <div className="text-sm text-slate-400">Satisfacción de usuarios</div>
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
  );
};

export default Pros;
