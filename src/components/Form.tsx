import { useState } from "react";
import Swal from "sweetalert2";

interface Props {
  addTask: any;
}

const Form: React.FC<Props> = ({ addTask }) => {
  // Se declara el state para los campos
  const [form, setForm] = useState({
    title: "",
    description: "",
    state: "pending",
    priority: false,
  });

  // Desestructurar el state
  const { title, description, state, priority } = form;

  // Funcion para enviar el contenido del formulario
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title and description are required!",
        showConfirmButton: false,
        timer: 3000,
        allowOutsideClick: false,
      });
    } else {
      addTask({
        id: Date.now(),
        ...form,
        state: state === "complete",
      });
      return Swal.fire({
        icon: "success",
        title: "OK",
        text: "Task successfully submitted!",
        showConfirmButton: false,
        timer: 3000,
        allowOutsideClick: false,
      });
    }
  };

  // Funcion para cambiar el estado de los campos
  const handleChange = (e: any) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form className="w-25" onSubmit={handleSubmit}>
      <input
        className="form-control m-2"
        type="text"
        name="title"
        id="title"
        placeholder="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control m-2"
        name="description"
        id="description"
        placeholder="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check m-2">
        <input
          className="form-check-input"
          type="checkbox"
          name="priority"
          id="priority"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="priority" className="form-check-label">
          priority
        </label>
      </div>
      <select
        className="form-select m-2"
        name="state"
        id="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pending">pending</option>
        <option value="complete">complete</option>
      </select>
      <button
        className="btn btn-dark m-2"
        type="submit"
        name="submit"
        id="submit"
      >
        Create
      </button>
    </form>
  );
};
export default Form;
