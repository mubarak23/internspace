import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { appliedInternshipList } from "../actions/appliedInternshipActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const InternScreen = ({ history }) => {
  const dispatch = useDispatch();
  const internLogin = useSelector((state) => state.internLogin);
  const { internInfo } = internLogin;
  const applliiedinternshipsLists = useSelector(
    (state) => state.appliedinternshipList
  );
  const { loading, error, appliedinternships } = applliiedinternshipsLists;
  console.log(appliedinternships);
  console.log(internInfo);
  useEffect(() => {
    if (!internInfo) {
      history.push("/login");
    } else {
      dispatch(appliedInternshipList());
    }
  }, [dispatch, history, internInfo]);
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
        <h4>Applied Internship </h4>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger"> {error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Details</th>
                <th>Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {appliedinternships.map((applied) => (
                <tr key={applied._id}>
                  <td>{applied._id}</td>
                  <td>{applied.title}</td>
                  <td>{applied.status}</td>
                  <td>
                    <Link to={`/internship/${applied.internship}`}>View</Link>{" "}
                  </td>
                  <td>{applied.applied_date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default InternScreen;
