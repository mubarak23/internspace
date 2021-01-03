import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import Meta from "../components/Meta";

import { Link } from "react-router-dom";
import { listinternships } from "../actions/internshipActions.js";

import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  //internshipsListHome
  const internshipsList = useSelector((state) => state.internshipsListHome);
  const { loading, error, internships } = internshipsList;

  useEffect(() => {
    dispatch(listinternships());
  }, [dispatch]);

  return (
    <>
      <h3>Latest Internship Opening</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error}</Message>
      ) : (
        <Row>
          {internships.map((internship) => (
            <Col className="col-md-6 mb-2">
              <Card style={{ width: "30rem" }} bg="Warning" text="info">
                <Card.Body>
                  <Card.Title>{internship.title}</Card.Title>
                  <Card.Subtitle className=" subtitle">
                    posted by: Techarewa Media
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">
                    Duration: {internship.duration}
                  </Card.Link>
                  <Card.Link href="#">Status: Open</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
