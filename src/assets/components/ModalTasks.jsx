

function Taks(data) {
  const inputTarea = document.getElementById("input-tarea");
  const inputDescripcion = document.getElementById("input-descripcion");
  //let totalTask = tareasAlmacenadas?.length;
  const guardarTarea = () => {
    if (!validarCamposVacios()) {
      //if (inputIndex.value == "null") {
      let count = 0;

      //totalTask > 0 ? (count = tareasAlmacenadas.length) : 0;
      totalTask <= 0 ? totalTask = 0 : totalTask;
      console.log('total de tareas ' + totalTask);
      count = tareasAlmacenadas.length;
      tareasAlmacenadas.push({
        id: totalTask++,
        nombre: inputTarea.value,
        descripcion: inputDescripcion.value,
        fecha: obtenerFecha(),
      });

      localStorage.setItem("datos", JSON.stringify(tareasAlmacenadas)); // guarda los datos al localStorage
      // success();
      // leerDatos();
      // limpiarCajas();
      //  }
    }
  };
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


  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Nueva Tarea</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="input-tarea" className="col-form-label">Tarea:</label>
                  <input type="text" className="form-control" id="input-tarea" />
                </div>
                <div className="mb-3">
                  <label htmlFor="input-descripcion" className="col-form-label">Descripcion:</label>
                  <textarea className="form-control" id="input-descripcion"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={() => guardarTarea()}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Taks