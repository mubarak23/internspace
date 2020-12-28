import React from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AdminScreen = () => {
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
            <span className="badge">203</span>
          </a>
        </div>
      </Col>
      <Col md="9">
        <h4>Latest Internship Available</h4>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Applied</th>
              <th>Published By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>67684896FHTH</td>
              <td>social media inter</td>
              <td>34</td>
              <td>Admin Staff</td>
              <td>
                <Link to={`/orders/3y4y5`}>Upadte Status</Link>{" "}
                <LinkContainer to={`/admin/user/4y5ye/edit`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </LinkContainer>
              </td>
            </tr>
            <tr>
              <td>67684896FHTH</td>
              <td>social media inter</td>
              <td>34</td>
              <td>Admin Staff</td>
              <td>
                <Link to={`/orders/3y4y5`}>Upadte Status</Link>{" "}
                <LinkContainer to={`/admin/user/4y5ye/edit`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </LinkContainer>
              </td>
            </tr>
            <tr>
              <td>67684896FHTH</td>
              <td>social media inter</td>
              <td>34</td>
              <td>Admin Staff</td>
              <td>
                <Link to={`/orders/3y4y5`}>Upadte Status</Link>{" "}
                <LinkContainer to={`/admin/user/4y5ye/edit`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </LinkContainer>
              </td>
            </tr>
            <tr>
              <td>67684896FHTH</td>
              <td>social media inter</td>
              <td>34</td>
              <td>Admin Staff</td>
              <td>
                <Link to={`/orders/3y4y5`}>Upadte Status</Link>{" "}
                <LinkContainer to={`/admin/user/4y5ye/edit`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </LinkContainer>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminScreen;
