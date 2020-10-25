import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispach, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name"></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Address"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/login/?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
