import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

import "../../assets/styles/pages/HomePage.css";

import { useDispatch } from "react-redux";
import createInstance from "../../bootstrap/api";
import { setTodos } from "../../bootstrap/action";
import { useEffect } from "react";
import TodosContainer from "../../components/TodosContainer";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await getTodos();
      dispatch(setTodos(result));
      localStorage.setItem("todos", JSON.stringify(result));

    }
    
    const currTodos = JSON.parse(localStorage.getItem('todos'));

    if (currTodos === null) {
      console.log('loading...')
      fetchData();
    } else {
      dispatch(setTodos(currTodos));
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <h1>Todos</h1>
        <TodosContainer active={true} />
        <TodosContainer active={false} />
      </main>
      <Footer />
    </>
  );
}

async function getTodos() {
  const api = createInstance(3000);

  try {
    const { data } = await api.get("/todos");
    return await data;
  } catch (err) {
    console.error(err);
  }
}


export default HomePage;
