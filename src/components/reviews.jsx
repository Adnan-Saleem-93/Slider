import React, {useState, useEffect} from "react";
import people from "../utils/data";
import {Row, Col, Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteRight, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

const Reviews = ({activeReview}) => {
  useEffect(() => {}, [activeReview]);
  const renderReviewsList = () => {
    return people.map(({id, name, image, title, quote}, index) => {
      return (
        <section key={index} hidden={activeReview !== id ? true : false} className="text-center">
          <Row>
            <Col>
              <Image src={image} alt={name} roundedCircle />
              <p className="person">{name}</p>
              <p className="designation">{title}</p>
              <p className="quote-start">
                <FontAwesomeIcon icon={faQuoteLeft} size="lg" />
              </p>
              <p className="quote">{quote}</p>
              <p className="quote-end">
                <FontAwesomeIcon icon={faQuoteRight} size="lg" />
              </p>
            </Col>
          </Row>
        </section>
      );
    });
  };

  return <article>{renderReviewsList()}</article>;
};

export default Reviews;
