import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import React from "react";
import "../style/register.css";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import ModalLogo from "../subcomponent/ModalLogo";

export default function Register() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const [id, setId] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    id: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function updateData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setId(small_id);
    setData((data.id = `${id ? id : small_id}`));

    // try {
    //   const response = await axios.post(
    //     "http://localhost:2020/users/add",
    //     data
    //   );
    //   if (response.status === 200) {
    //     setShowModal(true);
    //   }
    // } catch (error) {}
    axios.post("http://localhost:2020/users/add", data);
    console.log("user data:", data);
    setShow(true);
    setShowModal(true);
    setData({
      username: "",
      email: "",
      password: "",
      id: "",
    });
    setId("");
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
      {showModal && (
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
            <Button variant="primary" onClick={handleClose}>
              Sign in!
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
