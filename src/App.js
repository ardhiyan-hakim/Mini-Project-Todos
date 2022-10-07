import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/> }></Route>
            <Route path="/detail" element={<DetailPage/> }></Route>
            <Route path="/*" element={<NotFoundPage/> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
