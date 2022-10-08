import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

import "../../assets/styles/pages/HomePage.css";
import ActiveTodos from "../../components/ActiveTodos";
import CompleteTodos from "../../components/CompleteTodos";

import { useDispatch } from "react-redux";
import createInstance from "../../bootstrap/api";
import { setTodos } from "../../bootstrap/action";
import { useEffect } from "react";

async function getTodos() {
  const api = createInstance(3000);

  try {
    const { data } = await api.get("/todos");
    return await data;
  } catch (err) {
    console.error(err);
  }
}

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await getTodos();
      dispatch(setTodos(result));
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
       <Header />
      <main>
        <h1>Todos</h1>
        <ActiveTodos />
        <CompleteTodos />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
