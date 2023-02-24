import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Main from "./components/pages/Main";
import "./style/app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
