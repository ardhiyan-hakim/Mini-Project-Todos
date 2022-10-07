import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

import "../../assets/styles/pages/HomePage.css";
import ActiveTodos from "../../components/ActiveTodos";
import CompleteTodos from "../../components/CompleteTodos";

function HomePage() {
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
