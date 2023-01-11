import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import '../../styles/index.css';

//create your first component
const Home = () => {
  const [tareas, setTareas] = useState("");
  const [listaTareas, setlistaTareas] = useState([]);
  const [noTareas, setnoTareas] = useState("");

  function handleTareas(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (tareas === "") {
        alert("Falta informacion");
      } else {
        setlistaTareas([...listaTareas, tareas]);
        console.log(listaTareas);
        setnoTareas("visually-hidden");
        setTareas("");
      }
    }
  }
  function eliminarTareas(id) {
    setlistaTareas(listaTareas.filter((tarea, index) => index !== id));
    if (listaTareas.length === 1) {
      setnoTareas("");
    }
  }
  return (
    <div className="container text-center">
      <h1 className="fw-light ">Todos</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item fw-light">
          {" "}
          <input
            className="w-100 border border-0 fs-5
"
            type="text"
            placeholder="What needs to be done?"
            onChange={(e) => setTareas(e.target.value)}
            value={tareas}
            onKeyDown={handleTareas}
          ></input>
        </li>
        <li className={"list-group-item  fw-light " + noTareas}>
          No hay tareas, añadir tareas 
        </li>
        {listaTareas.map((tarea, id) => (
          <li
            className="list-group-item fs-5 d-flex justify-content-between" id="cruz"
            key={id}
          >
            {tarea}
            <button
              type="button"
              className="btn-close fs-6 mt-1" id= "eliminarcruz"
              aria-label="Close"
              onClick={() => eliminarTareas(id)}
            ></button>
          </li>
        ))}
        <li className="list-group-item  fw-light">
          {listaTareas.length} item left
        </li>
      </ul>
    </div>
  );
};

export default Home;
