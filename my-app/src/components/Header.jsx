import MainLogo from "../subcomponent/MainLogo";
import "../style/header.css";
import SignInLogo from "../subcomponent/SignInLogo";
import BasketLogo from "../subcomponent/BasketLogo";
import { useState, useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ModalLogo from "../subcomponent/ModalLogo";
import { UserContext } from "../layout/UserContext";
import axios from "axios";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    axios.get("http://localhost:2020/users").then((res) => {
      console.log("users:", res.data);
      setUsers(res.data);
    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <div className="header-logo" onClick={() => navigate("/")}>
        <MainLogo />
      </div>

      <div className="search-field">
        <input id="search-bar" />
        <button id="search-button">Search</button>
      </div>
      <div className="sign-in">
        {isLoggedIn ? (
          <div className="logged-in">
            <p>Hello! {user}</p>
            <span
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Log out
            </span>
          </div>
        ) : (
          <div>
            <SignInLogo />
            <p onClick={handleShow}>Sign In</p>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <ModalLogo />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SignIn users={users} />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/register");
                    setShow(false);
                  }}
                >
                  Бүртгүүлэх
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </div>
      <div className="header-basket-logo">
        <BasketLogo />
        <p>0</p>
      </div>
    </div>
  );
}
