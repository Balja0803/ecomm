import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "../layout/UserContext";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../layout/UserContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { users, setUsers, isLoggedIn, setIsLoggedIn, user, setUser } =
    useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = users.some(
      (user) => user.username === username && user.password === password
    );
    if (isValid) {
      setIsLoggedIn(true);
      setUser(username);
      navigate("/");
    } else {
      console.log("username password wrong");
    }
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Нэвтрэх
      </Button>
    </Form>
  );
}
