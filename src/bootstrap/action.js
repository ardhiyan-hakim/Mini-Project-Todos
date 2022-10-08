const setTodos = (payload) => {
  return {
    type: "SET_TODOS",
    payload: payload,
  };
};

export { setTodos };
