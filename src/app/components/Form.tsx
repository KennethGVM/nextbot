"use client";
import { useState } from "react";

const Form = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

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
          alert(`No se pudo hacer la peticion: ${e}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="form-section container flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className=" mr-4" htmlFor="category">
              Seleccione la categoria a preguntar.
            </label>
            <select
              required
              disabled={loading}
              name="category"
              id="tono"
              className="bg-slate-800 px-4 py-2 rounded-lg"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">Seleccione una categoria</option>
              <option value="Frontend">Frontend Development</option>
              <option value="Backend">Backend Development</option>
              <option value="Web Performance & Optimization">
                Web Performance & Optimization
              </option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2" htmlFor="question">
              Escriba su pregunta:{" "}
            </label>
            <textarea
              required
              className="bg-slate-800 p-2 rounded-lg"
              name="question"
              id="question"
              rows={3}
              disabled={loading}
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            ></textarea>
          </div>
          <input
            type="submit"
            value={loading ? "Cargando..." : "Enviar"}
            disabled={loading}
            className="bg-sky-600 cursor-pointer hover:bg-sky-800 py-1 px-4 rounded-lg"
          />
        </form>
      </div>
      {result !== "" && (
        <div className="result-section">
          <h2>Resultado: </h2>
          <p>{result}</p>
        </div>
      )}
      <section className="mt-8 p-4 border-x-2 border-gray-600">
        <h2>Acerca de nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          et, minima mollitia aspernatur harum numquam voluptatibus debitis
          rerum accusantium est ratione, voluptates ut! Qui numquam dolores
          molestiae similique nihil vero.
        </p>
      </section>
    </>
  );
};

export default Form;
