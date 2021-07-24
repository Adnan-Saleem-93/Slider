import React, {useState, useEffect} from "react";
import people from "../utils/data";
import {Row, Col, Image} from "react-bootstrap";

const Reviews = ({activeReview}) => {
  useEffect(() => {}, [activeReview]);
  const renderReviewsList = () => {
    return people.map(({id, name, image, title, quote}, index) => {
      return (
        <section key={index} hidden={activeReview !== id ? true : false}>
          <Row>
            <Col>
              <Image src={image} alt={name} roundedCircle />
              <p className="person">{name}</p>
              <p className="designation">{title}</p>
            </Col>
          </Row>
        </section>
      );
    });
  };

  return <article>{renderReviewsList()}</article>;
};

export default Reviews;
