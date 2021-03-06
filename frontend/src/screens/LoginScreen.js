import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { adminlogin } from "../actions/adminActions";
//import { userLoginReducer } from "../reducers/userReducers.js";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;

  //const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (adminInfo) {
      history.push("/admin");
    }
  }, [history, adminInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adminlogin(email, password));
  };

  return (
    <FormContainer>
      <h2>SignIn</h2>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          SignIn
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          <Link to={"/"}>View Internships</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
