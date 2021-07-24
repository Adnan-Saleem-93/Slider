import React, {useState} from "react";
import Reviews from "./reviews";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {Button, Row, Col} from "react-bootstrap";

const ReviewSection = () => {
  const [activeReview, setActiveReview] = useState(1);
  const handleButtonClick = () => {};

  return (
    <Row className="main-section">
      <Col>
        <Button className="btn-left" variant="light" title="Previous" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
        </Button>
      </Col>
      <Col>
        <Reviews activeReview={activeReview} />
      </Col>
      <Col>
        <Button className="btn-right" variant="light" title="Next" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faAngleDoubleRight} size="lg" />
        </Button>
      </Col>
    </Row>
  );
};

export default ReviewSection;
