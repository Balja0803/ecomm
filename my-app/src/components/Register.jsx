import axios from "axios";
import { useState } from "react";

import React from "react";
import "../style/register.css";
import { Button, Modal } from "react-bootstrap";
import ModalLogo from "../subcomponent/ModalLogo";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const alertClose = () => setShowAlert(false);
  const alertShow = () => setShowAlert(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function updateData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:2323/users/register",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.log("409");
    }
    console.log("user data:", data);

    setData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register-form">
      <div>
        <ModalLogo />
      </div>
      <form className="add-user" on onSubmit={submitHandler}>
        <label htmlFor="username">Username: </label>
        <input onChange={updateData} name="username" value={data.username} />
        <label htmlFor="email">Email:</label>
        <input onChange={updateData} name="email" value={data.email} />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          onChange={updateData}
          name="password"
          value={data.password}
        />
        <button type="submit">Create Account!</button>
      </form>
      {showModal ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <ModalLogo />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Account created successfully!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => navigate("/")}>
              Sign in!
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
      {alert ? (
        <Modal show={showAlert} onHide={alertClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <ModalLogo />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Username or email already exists!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={alertClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
}
