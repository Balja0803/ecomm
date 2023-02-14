import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import { UserContext } from "./layout/UserContext";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Main from "./components/pages/Main";
import { ProductContext } from "./layout/ProductContext";
import "./style/app.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);

  return (
    <div className="app">
      <UserContext.Provider
        value={{ users, setUsers, isLoggedIn, setIsLoggedIn, user, setUser }}
      >
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
