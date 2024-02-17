import Task from "./Task";

// Propiedades para el componente
interface Props {
  tasks: Array<any>;
}

const Tasks: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="m-2">
      <h2 className="text-center">Tasks</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">description</th>
            <th scope="col">state</th>
            <th scope="col">menu</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
