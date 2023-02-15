import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../layout/UserContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { users, setUsers, isLoggedIn, setIsLoggedIn, user, setUser } =
    useUserContext();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [fail, setFail] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const isValid = users.some(
  //     (user) => user.username === username && user.password === password
  //   );
  //   if (isValid) {
  //     setIsLoggedIn(true);
  //     setUser(username);
  //     navigate("/");
  //   } else {
  //     console.log("username password wrong");
  //   }
  // }
  function updateData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:2020/users/login", data)
        .then((res) => {
          setIsLoggedIn(true);
          setUser(data.username);
          navigate("/");
        });
    } catch (error) {
      setFail(true);
    }
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            name="username"
            value={data.username}
            onChange={updateData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={updateData}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Нэвтрэх
        </Button>
      </Form>
      {fail ? (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Username or Password Wrong</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>sooo sad</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setFail(true)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      ) : null}
    </div>
  );
}
