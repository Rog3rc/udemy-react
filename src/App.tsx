import { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

// Valores ficticios
const initialTasks: Array<any> = [
  { id: 1, title: "One", description: "Des1", state: false, priority: false },
  { id: 2, title: "Two", description: "Des2", state: false, priority: false },
  { id: 3, title: "Three", description: "Des3", state: false, priority: true },
];
function App() {
  // Se declara el state para las tareas
  const [tasks, setTasks] = useState(initialTasks);

  // Funcion para agregar tareas
  const addTask = (task: any) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <h1 className="m-2">Create Task</h1>
      <Form addTask={addTask} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
