import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { GrFormNext } from "react-icons/gr";

import "../../assets/styles/pages/HomePage.css";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <h1>Todos</h1>

        <div className="active-todos">
          <h2>Active Todos</h2>
          <div className="todos-container">
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
          </div>
        </div>

        <div className="complete-todos">
          <h2>Complete Todos</h2>
          <div className="todos-container">
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
