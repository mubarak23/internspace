import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import Meta from "../components/Meta";

import { Link } from "react-router-dom";
import { listProducts } from "../actions/productAction.js";

import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h3>Latest Internship Opening</h3>
      <Row>
        <Col className="col-md-6 mb-2">
          <Card style={{ width: "30rem" }} bg="Warning" text="info">
            <Card.Body>
              <Card.Title>Social Media Manager</Card.Title>
              <Card.Subtitle className=" subtitle">
                posted by: Techarewa Media
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Duration: 8 Month</Card.Link>
              <Card.Link href="#">Status: Open</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
