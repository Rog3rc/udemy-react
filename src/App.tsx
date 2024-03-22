import { useEffect, useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import Object from "./interfaces/taskInterface";
// Variable para manipular arreglo
let newTasks = JSON.parse(localStorage.getItem("tasks") as string) || [];

function App() {
  // Se declara el state para las tareas
  const [tasks, setTasks] = useState(newTasks);

  // Verificar LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  // Funcion para agregar tareas
  const addTask = (task: Object) => {
    setTasks([...tasks, task]);
  };

  // Funcion para eleiminar tareas
  const deleteTask = (id: number) => {
    newTasks = tasks.filter((task: Object) => task.id !== id);
    setTasks(newTasks);
  };

  // Funcion para actualizar tareas
  const updateTask = (id: number) => {
    newTasks = tasks.map((task: Object) => {
      if (task.id == id) {
        task.state = !task.state;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const sortTasks = (tasks: any) => {
    return tasks.sort((a: Object, b: Object) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (a.priority) return 1;
    });
  };

  return (
    <div className="container">
      <h1 className="m-2">Create Task</h1>
      <Form addTask={addTask} />
      <Tasks
        tasks={sortTasks(tasks)}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
