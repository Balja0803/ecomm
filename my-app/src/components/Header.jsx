import MainLogo from "../subcomponent/MainLogo";
import "../style/header.css";
import SignInLogo from "../subcomponent/SignInLogo";
import BasketLogo from "../subcomponent/BasketLogo";
import { useState, useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ModalLogo from "../subcomponent/ModalLogo";
import { UserContext, useUserContext } from "../layout/UserContext";
import axios from "axios";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  const navigate = useNavigate();
  const { users, setUsers, isLoggedIn, setIsLoggedIn, user, setUser } =
    useUserContext();
  // const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  // const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    axios.get("http://localhost:2020/users").then((res) => {
      console.log("users:", res.data);
      setUsers(res.data);
    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showBasket, setShowBasket] = useState(false);
  const basketCloseHandler = () => setShowBasket(false);
  const basketShowHandler = () => setShowBasket(true);

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
        <Button variant="primary" onClick={basketShowHandler}>
          <BasketLogo />
        </Button>
        <Offcanvas
          show={showBasket}
          onHide={basketCloseHandler}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Basket</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>Basket list</Offcanvas.Body>
        </Offcanvas>

        <p>0</p>
      </div>
    </div>
  );
}
