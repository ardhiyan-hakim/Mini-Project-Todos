import { GrFormNext } from "react-icons/gr";
import { MdDone, MdRestore, MdDelete } from "react-icons/md";

function CardTodo({ title, completed }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__footer">
          <p>{completed ? "Complete" : "Active"}</p>
        </div>
      </div>
      <div className="card-button">
        <GrFormNext />
        {completed ? <MdRestore /> : <MdDone />}
        <MdDelete />
      </div>
    </div>
  );
}

export default CardTodo;
