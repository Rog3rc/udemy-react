import Task from "./Task";
import Object from "../interfaces/taskInterface";

// Propiedades para el componente
interface Props {
  tasks: Array<Object>;
  deleteTask: Function;
  updateTask: Function;
}

const Tasks: React.FC<Props> = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="m-2">
      <h2 className="text-center">Tasks</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            {tasks.length != 0 ? (
              <>
                <th scope="col">title</th>
                <th scope="col">description</th>
                <th scope="col">state</th>
                <th scope="col">menu</th>
              </>
            ) : (
              <th></th>
            )}
          </tr>
        </thead>
        <tbody>
          {tasks.length != 0 &&
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          {tasks.length === 0 && (
            <tr>
              <td className="text-center">No Tasks</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
