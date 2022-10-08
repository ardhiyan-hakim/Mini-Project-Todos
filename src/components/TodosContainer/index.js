import TodosList from "../TodosList";

function TodosContainer({ active}) {
  return (
    <div className={active ? "active-todos" : "completed-todos"}>
      <h2>{active ? "Active Todos" : "Completed Todos"}</h2>
      <TodosList active={active} />
    </div>
  );
}

export default TodosContainer;
