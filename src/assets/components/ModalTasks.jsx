
import Swal from "sweetalert2";

function Taks(props) {

  console.log(props);

  const {setNombre, setDescripcion, count, nombre, descripcion } = props

  let inputTarea = document.getElementById("input_tarea");
  let inputDescripcion = document.getElementById("input_descripcion");

  const obtenerFecha = () => {
    const date = new Date();
    return date.toDateString();
  };
  const validarCamposVacios = () => {
    if (inputTarea.value === "") {
      Swal.fire("Debes llenar el campo de tarea");
      return true;
    }

    if (inputDescripcion.value === "") {
      Swal.fire("Debes llenar el campo de descripcion");
      return true;
    }
  };

  //let totalTask = tareasAlmacenadas?.length;
  const guardarTarea = () => {
    if (!validarCamposVacios()) {
    //if (inputIndex.value == "null") {

    //totalTask > 0 ? (count = tareasAlmacenadas.length) : 0;
    // totalTask <= 0 ? totalTask = 0 : totalTask;
    // console.log('total de tareas ' + totalTask);
    // count = tareasAlmacenadas.length;
    // tareasAlmacenadas.push({
    //   id: 0,
    //   nombre: inputTarea.value,
    //   descripcion: inputDescripcion.value,
    //   fecha: obtenerFecha(),
    // });

    // localStorage.setItem("datos", JSON.stringify(tareasAlmacenadas)); // guarda los datos al localStorage
    // success();
    // leerDatos();
    // limpiarCajas();
    //  }
    }

   // console.log(taks);

    console.log(inputTarea.value);
    console.log(inputDescripcion.value);
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Nueva Tarea
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="input_tarea" className="col-form-label">
                    Tarea:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="input_tarea"
                    placeholder="Aqui"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}                    
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="input_descripcion" className="col-form-label">
                    Descripcion:
                  </label>
                  <textarea
                    className="form-control"
                    id="input_descripcion"
                    placeholder="aqui"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => guardarTarea()}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Taks;
