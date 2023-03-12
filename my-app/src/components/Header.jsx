import MainLogo from "../subcomponent/MainLogo";
import "../style/header.css";
import SignInLogo from "../subcomponent/SignInLogo";
import BasketLogo from "../subcomponent/BasketLogo";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ModalLogo from "../subcomponent/ModalLogo";
import { useUserContext } from "../layout/UserContext";

import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useBasketContext } from "../layout/BasketContext";
import BasketList from "./BasketList";

export default function Header() {
  const navigate = useNavigate();
  const { users, isLoggedIn, setIsLoggedIn, user } = useUserContext();
  const { basket } = useBasketContext();

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
            <p>Welcome</p>
            <DropdownButton id="dropdown-basic-button" title={user}>
              <Dropdown.Item href="#/action-1">action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </Dropdown.Item>
            </DropdownButton>
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
          <Offcanvas.Body>
            <p>
              {basket.map((item, index) => (
                <div key={index}>
                  <BasketList item={item} />
                </div>
              ))}
            </p>
          </Offcanvas.Body>
        </Offcanvas>

        <p>{basket ? basket.length : 0}</p>
      </div>
    </div>
  );
}
