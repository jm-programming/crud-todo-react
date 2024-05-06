
import './listTaks.css'
import Swal from 'sweetalert2'

function ListTaks({ task }) {

    const { id, nombre, descripcion, fecha } = task

    const editarTarea = (task) => {
        console.log('Hola ' + task)
    }

    const eliminarTarea = (data) => {
        Swal.fire({
          title: "Estas seguro?",
          text: "No podras recuperar tu tarea!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminala!",
        }).then((result) => {
          if (result.isConfirmed) {
            // if (localStorage.key("datos") === "datos") {
            //   let rep = tareasAlmacenadas.findIndex((e) => e.id === data);
            //   tareasAlmacenadas.splice(rep, 1);
            //   localStorage.setItem("datos", JSON.stringify(tareasAlmacenadas));
            //   leerDatos();
            // buscar_tarea.value = "";
            Swal.fire({
              title: "Eliminar!",
              text: "Tu tarea fue eliminada.",
              icon: "success",
            });
            // }
          }
        });
      };

    
    
    return (
        <>
            <tr key={task.id}>
                <th scope="row">{id}</th>
                <td>{nombre}</td>
                <td>{descripcion}</td>
                <td>{fecha}</td>
                <td>
                    <button className='btn btn-primary'><i className="fas fa-pencil-alt" onClick={() => editarTarea(id)}> </i></button>
                    <span>---</span>
                    <button className='btn btn-danger' onClick={() => eliminarTarea(id)}><i className="fas fa-trash"> </i></button>
                </td>
            </tr>
        </>
    )
}

export default ListTaks