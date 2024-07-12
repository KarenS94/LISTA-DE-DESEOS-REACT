
import Swal from 'sweetalert2'
import { useState } from "react";

// hay q hacer estados por cada uno de los campos
// con onchange capturamos el evento con la funcion que modifica al estado

// con el target capturamos el input y con value capturamos la infor del cliente
const Formulario= ({addTodo}) => {

   const [todo, setTodo] = useState( {
    title : "Deseo #",
    description : "Descripcion",
    state: "pendiente",
    priority: true,
    
   });

    const {title,description,state, priority} = todo;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '' || description.trim() === ''){
          return  Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y descripcion obligatorios!',
              })
        }

        addTodo({

            id : Date.now(),
            ...todo,
            state : state === "completado"
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    };

     const handleChange = (e) => {
        const {name, type,checked,value} = e.target

        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        });
     };

    return (
        <form onSubmit={handleSubmit}>
        <input 
             type="text" 
             placeholder=" Ingrese datos"
            className="form-control mb-2"
            name="title"
            value={title}
            onChange={handleChange}
        />
    
    <textarea 
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={description}
        onChange={handleChange}
    />
     <select className="form-select mb-2️" 
        name="state"
        value={state}
        onChange={handleChange}
        >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
     </select>

    <div className="form-check mb-2">
        <input 
        type="checkbox"
        name="priority"
        className="form-check-input" 
        id="inputCheck"
        checked = {priority}
        onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar Prioridad</label>
    </div>
     <button type="submit" className="btn btn-primary my-2" >Procesar</button>
    </form>
    );
   };
  
   export default Formulario;