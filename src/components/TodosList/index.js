import { useSelector } from "react-redux";
import CardTodo from "../CardTodo";

function TodosList({ active }) {
  const { todos } = useSelector((state) => state);
  const { activeTodos, completedTodos } = filterTodos(todos);

  const currActiveTodos = activeTodos.slice(0, 10);
  const currCompletedTodos = completedTodos.slice(0, 10);

  return (
    <>
      <h4>
        Currently {active ? "Active" : "Completed"} Todos : {" "}
        {active
          ? `${currActiveTodos.length} of ${activeTodos.length}`
          : `${currCompletedTodos.length} of ${completedTodos.length}`}
      </h4>
      <div className="todos-container">
        {active && (
          <>
            {currActiveTodos.map((activeTodo) => (
              <CardTodo
                key={activeTodo.id}
                title={activeTodo.title}
                completed={activeTodo.completed}
              />
            ))}
          </>
        )}

        {!active && (
          <>
            {currCompletedTodos.map((completedTodo) => (
              <CardTodo
                key={completedTodo.id}
                title={completedTodo.title}
                completed={completedTodo.completed}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

function filterTodos(todos) {
  const completedTodos = todos.filter((todo) => todo.completed === true);
  const activeTodos = todos.filter((todo) => todo.completed === false);

  return { activeTodos, completedTodos };
}

export default TodosList;
