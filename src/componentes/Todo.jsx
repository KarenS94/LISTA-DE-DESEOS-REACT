import Todos from "./Todos";

const Todo = ({todo, deleteTodo, updateTodo}) => {

    const {id, title, description, state,priority} = todo;

    return (
        <li className="list-group-item">
        <div className="d-flex justify-conten-between">
            <div>
                <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                <p className={`${state && 'text-decoration-line-through'}`}>{description}</p>
                <div className="d-flex gap-2">
                    <button onClick={()=> deleteTodo(id)} className="btn btn-danger btn-sm">
                        Eliminar
                        </button>
                    <button onClick={()=> updateTodo(id)} className="btn btn-warning btn-sm">
                        Actualizar
                        </button>
                </div>
            </div>
            <span className="badge rounded-pill text-bg-primary">{priority && "Prioridad"}</span>
       </div>
    </li>  

    );
};

export default Todo;