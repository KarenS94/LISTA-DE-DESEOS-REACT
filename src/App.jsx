import { useEffect, useState } from "react";
import Formulario from "./componentes/Formulario";
import Todos from "./componentes/Todos";


const initialStateTodos = JSON.parse(localStorage.getItem("todos"))  || []

 const App = () => {
// vamos a trabajar en esta app xq necesito que el div contenedor   contenga toda la logica de los TO-DOS,
// agregar, actualizar, eliminar etc
   const [todos, setTodos] = useState(initialStateTodos);
// el use effect siempre se va a ejecutar en el primer renderizado
  useEffect(()=> {
    // vamos a guardar todo en el almacenamiento local, el localstorage
    localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos]); // se va a ejecutar cada vez que cambien los todos, ya sea que se elimine, actualice

   const addTodo = todo => {
    setTodos([...todos, todo])
   };

   const deleteTodo = (id) => {
      const newArray = todos.filter((todo)=> todo.id !== id);
      setTodos(newArray);
   }

   const updateTodo = (id) => {

    const newArray = todos.map((todo)=> {
      if (todo.id === id) {
        todo.state = !todo.state
      }
      return todo
    })

    setTodos(newArray);
   }


   return (
    <div className="container mb-2">
      <h1 className="my-5">Lista de Deseos</h1>
       <Formulario addTodo = {addTodo}/>
       <Todos todos = {todos} deleteTodo = {deleteTodo} updateTodo= {updateTodo}/>

    </div>
   );

 };

 export default App;