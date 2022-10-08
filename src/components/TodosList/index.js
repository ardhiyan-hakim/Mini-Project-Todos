import { useSelector } from "react-redux";
import CardTodo from "../CardTodo";

function TodosList({ active }) {
  const { todos } = useSelector((state) => state);
  const { activeTodos, completedTodos } = filterTodos(todos);

  return (
    <div className="todos-container">
      {active && (
        <>
          {activeTodos.slice(0, 10).map((activeTodo) => (
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
          {completedTodos.slice(0, 10).map((completedTodo) => (
            <CardTodo
              key={completedTodo.id}
              title={completedTodo.title}
              completed={completedTodo.completed}
            />
          ))}
        </>
      )}
    </div>
  );
}

function filterTodos(todos) {
  const completedTodos = todos.filter((todo) => todo.completed === true);
  const activeTodos = todos.filter((todo) => todo.completed === false);

  return { activeTodos, completedTodos };
}

export default TodosList;
