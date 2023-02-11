import MainLogo from "../subcomponent/MainLogo";
import "../style/header.css";
import SignInLogo from "../subcomponent/SignInLogo";
import BasketLogo from "../subcomponent/BasketLogo";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ModalLogo from "../subcomponent/ModalLogo";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <MainLogo />
      <div className="search-field">
        <input id="search-bar" />
        <button id="search-button">Search</button>
      </div>
      <div className="sign-in">
        <SignInLogo />
        <p onClick={handleShow}>Sign In</p>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <ModalLogo />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="header-basket-logo">
        <BasketLogo />
        <p>0</p>
      </div>
    </div>
  );
}
