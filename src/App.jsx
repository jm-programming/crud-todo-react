import { useEffect, useState } from "react";
import { db } from "./data/db";
import "./App.css";
import ListTaks from "./assets/components/ListTaks";
import ModalTasks from "./assets/components/ModalTasks";

function App() {
  let tareasAlmacenadas = JSON.parse(localStorage.getItem("datos"));
  let buscar_tarea = document.getElementById("buscar_tarea");

  const [tasks, setTasks] = useState(tareasAlmacenadas);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  
  // function setNombre() {
    
  // }

  // function setDescripcion() {
    
  // }

  useEffect(() => {
    if (!tareasAlmacenadas) {
      localStorage.setItem("datos", JSON.stringify(db)); // guarda los datos de prueba DB al localStorage
      tareasAlmacenadas = JSON.parse(localStorage.getItem("datos"));
    }
  }, [tasks]);

  

  

  const buscarTarea = () => {
    // let elem = tareasAlmacenadas.filter((e) =>
    //   e.nombre.includes(buscar_tarea.value)
    // );
    // console.log(elem.length > 0);
    // if (elem.length > 0) {
    //   elem.map((e) => {

    //     console.log(e);
    //     //document.getElementById("tbody").innerHTML = display;
    //   });
    // }

    console.log("buscando..");
  };

  return (
    <>
      <div className="container p-5">
        <div className="card">
          <h5 className="card-header">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand">Tareas</a>
                <form className="d-flex" role="search">
                  <input
                    className="form-control float-end"
                    type="search"
                    onKeyUp={() => buscarTarea()}
                    placeholder="Buscar Tarea"
                    aria-label="Search"
                    id="buscar_tarea"
                  />
                </form>
              </div>
            </nav>
          </h5>
          <div className="card-body">
            <button
              type="button"
              className="btn btn-primary "
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Nueva Tarea
            </button>

            <ModalTasks
              count={tareasAlmacenadas?.length}
              nombre={nombre}
              descripcion={descripcion}
              setDescripcion={() => setDescripcion()}
              setNombre={() => setNombre()}
            />

            <div className="row">
              <div className="col-md-12">
                <table className="table p-3">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Tarea</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks?.map((task) => {
                      return <ListTaks key={task.id} task={task} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
