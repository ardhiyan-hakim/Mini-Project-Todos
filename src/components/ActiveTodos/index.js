import TodosList from "../TodosList";

function ActiveTodos() {
  return (
    <div className="active-todos">
      <h2>Active Todos</h2>
      <TodosList active={true} />
    </div>
  );
}

export default ActiveTodos;
