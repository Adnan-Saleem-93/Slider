import React, {useState} from "react";
import Reviews from "./reviews";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {Button, Row, Col} from "react-bootstrap";
import people from "../utils/data";

const ReviewSection = () => {
  const [activeReview, setActiveReview] = useState(1);
  const handleButtonClick = (direction) => {
    if (direction === "right")
      setActiveReview(activeReview === people.length ? 1 : activeReview + 1);
    else setActiveReview(activeReview === 1 ? people.length : activeReview - 1);
  };

  return (
    <section className="review-section">
      <Reviews activeReview={activeReview} />
      <Button
        className="btn-left"
        variant="light"
        title="Previous"
        onClick={() => handleButtonClick("left")}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
      </Button>
      <Button
        className="btn-right"
        variant="light"
        title="Next"
        onClick={() => handleButtonClick("right")}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} size="lg" />
      </Button>
    </section>
  );
};

export default ReviewSection;
