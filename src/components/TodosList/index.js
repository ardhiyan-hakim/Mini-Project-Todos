import { GrFormNext } from "react-icons/gr";

function TodosList({ active }) {
  return (
    <div className="todos-container">
      {active && (
        <div className="card">
          <div className="card-body">
            <div className="card__header">
              <h3>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</h3>
            </div>
            <div className="card__footer">
              <p>Active</p>
            </div>
          </div>
          <div className="card-button">
            <GrFormNext />
          </div>
        </div>
      )}

      {!active && (
        <div className="card">
          <div className="card-body">
            <div className="card__header">
              <h3>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</h3>
            </div>
            <div className="card__footer">
              <p>Complete</p>
            </div>
          </div>
          <div className="card-button">
            <GrFormNext />
          </div>
        </div>
      )}
    </div>
  );
}

export default TodosList;
