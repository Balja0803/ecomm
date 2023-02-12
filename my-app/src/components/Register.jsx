import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
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

  function updateData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setId(small_id);
    setData((data.id = `${id ? id : small_id}`));
    axios.post("http://localhost:2020/users/add", data);
    console.log("user data:", data);

    setData({
      username: "",
      email: "",
      password: "",
      id: "",
    });
    setId("");
  };

  return (
    <div>
      <form className="add-user" on onSubmit={submitHandler}>
        <label htmlFor="username">Username: </label>
        <input onChange={updateData} name="username" value={data.username} />
        <label htmlFor="email">email:</label>
        <input onChange={updateData} name="email" value={data.email} />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          onChange={updateData}
          name="password"
          value={data.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
