import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";

import { Provider } from "react-redux";
import store from "./bootstrap/store";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/detail" element={<DetailPage />}></Route>
              <Route path="/*" element={<NotFoundPage />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
