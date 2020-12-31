import React, { useState, useEffect } from "react";
import {
  Table,
  Form,
  Button,
  Row,
  Col,
  Container,
  TextField,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminInternshipList } from "../actions/adminActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { crearteInternship } from "../actions/internshipActions.js";

const AdminInternship = ({ history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [duration, setDuration] = useState("");

  const dispatch = useDispatch();
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const internshipCreate = useSelector((state) => state.createInternship);
  const { loading, error, success } = internshipCreate;
  useEffect(() => {
    if (!adminInfo.isCompany) {
      history.push("/login");
    }
    if (success) {
      history.push("/admin");
    }
  }, [dispatch, history, adminInfo, success]);

  const handlecreateInternship = (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      requirement,
      responsibilities,
      duration,
    };
    console.log(data);
    dispatch(crearteInternship(data));
  };
  return (
    <Row>
      <Col md={3}>
        <div className="list-group">
          <a href="index.html" className="list-group-item active main-color-bg">
            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>{" "}
            Dashboard
          </a>
          <a href="users.html" className="list-group-item">
            <i class="fas fa-laptop-house"></i> Internship{" "}
            <span className="badge">12</span>
          </a>

          <a href="posts.html" className="list-group-item">
            <i className="fas fa-user"></i> Interns{" "}
            <span className="badge">33</span>
          </a>
          <a href="users.html" className="list-group-item">
            <i class="fas fa-handshake-alt-slash"></i> Applied Internship{" "}
            <span className="badge">3</span>
          </a>
        </div>
      </Col>
      <Col md="9">
        <h4>Add Internship</h4>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Row>
          <Container className="justify-content-md-center">
            <form onSubmit={handlecreateInternship}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  placeholder="Enter Title"
                  onChange={(e) => setTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="standard-multiline-flexible"
                  label="Description"
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="requirement">
                <Form.Label>Requirement</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  label="Requirement"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="responsibilities">
                <Form.Label>Responsibilities</Form.Label>
                <Form.Control
                  id="standard-multiline-flexible"
                  label="Responsibilities"
                  as="textarea"
                  rows={3}
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="duration">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="text"
                  value={duration}
                  placeholder="Enter duration"
                  onChange={(e) => setDuration(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary">
                Add Internship
              </Button>
            </form>
          </Container>
        </Row>
      </Col>
    </Row>
  );
};

export default AdminInternship;
