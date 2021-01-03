import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
//import axios from "axios";
import Rating from "../components/Rating";
//import products from "../products";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import { internshipDetails } from "../actions/internshipActions";

const ProductScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.internshipDetails);
  const { loading, error, internship } = details;

  useEffect(() => {
    dispatch(internshipDetails(match.params.id));
  }, [dispatch, match]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <>
      <Link to="/">Back</Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={internship.title} />
          <Row>
            <Col md={6}>
              <h3>{internship.title}</h3>
              <h5>Description</h5>
              {internship.description}
              <p>
                <h5>Responsibilities</h5>
                {internship.responsibilities}
              </p>
              <p>
                <h5>Requirement</h5>
                {internship.requirement}
              </p>
            </Col>

            <Col md={6}>
              <h3>Apply For This Internship</h3>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
