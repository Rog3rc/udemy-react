interface Props {
  task: any;
}

const Task: React.FC<Props> = ({ task }) => {
  const { id, title, description, state, priority } = task;
  return (
    <tr key={id}>
      <td>
        {title}{" "}
        <span className="badge text-bg-success">{priority && "Priority"}</span>
      </td>
      <td>{description}</td>
      <td>{state ? "complete" : "pending"}</td>
      <td className="dropdown">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Opciones
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item text-center btn btn-danger"
              type="button"
            >
              Delete
            </button>
          </li>
          <button
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
