import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../layout/UserContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useUserContext();

  const [fail, setFail] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function updateData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2323/users/login",
        data
      );
      console.log(response);
      if (response.data.success) {
        const userToken = response.data.token;
        localStorage.clear();
        localStorage.setItem("user_token", userToken);
        setUser(response.data.data.username);
        setIsLoggedIn(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      setFail(true);
    }
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="email"
            name="email"
            value={data.email}
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
