import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { intern_login } from "../actions/internActions";
//import { userLoginReducer } from "../reducers/userReducers.js";

const InternLoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const internLogins = useSelector((state) => state.internLogin);
  const { loading, error, internInfo } = internLogins;
  //internLogin

  //const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (internInfo) {
      history.push("/intern");
    }
  }, [history, internInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(intern_login(email, password));
  };

  return (
    <FormContainer>
      <h2>Intern SignIn</h2>
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
          <Link to={"/"}>Create Intern Account</Link>
          <Link to={"/"}>View Internships</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default InternLoginScreen;
