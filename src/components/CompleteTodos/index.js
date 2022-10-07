import TodosList from "../TodosList";

function CompleteTodos() {
  return (
    <div className="complete-todos">
      <h2>Complete Todos</h2>
      <TodosList active={false} />
    </div>
  );
}

export default CompleteTodos;
