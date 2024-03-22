import Object from "../interfaces/taskInterface";

interface Props {
  task: Object;
  deleteTask: Function;
  updateTask: Function;
}

const Task: React.FC<Props> = ({ task, deleteTask, updateTask }) => {
  const { id, title, description, state, priority } = task;
  return (
    <tr key={id}>
      <td
        className={`d-felx justify-content-between align-items-start
          ${state && "text-decoration-line-through"}`}
      >
        {title}{" "}
        <span className="badge text-bg-success">{priority && "Priority"}</span>
      </td>
      <td className={`${state && "text-decoration-line-through"}`}>
        {description}
      </td>
      <td>{state ? "complete" : "pending"}</td>
      <td className="dropdown">
        <button
          className="btn btn-sm btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Opciones
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              onClick={() => deleteTask(id)}
              className="dropdown-item text-center btn btn-danger"
              type="button"
            >
              Delete
            </button>
          </li>
          <button
            onClick={() => updateTask(id)}
            className="dropdown-item text-center btn btn-info"
            type="button"
          >
            Update
          </button>
          <li></li>
        </ul>
      </td>
    </tr>
  );
};

export default Task;
