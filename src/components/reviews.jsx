import React, {useEffect} from "react";
import people from "../utils/data";
import {Row, Col, Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteRight, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

const Reviews = ({activeReview}) => {
  let len = people.length;
  useEffect(() => {
    // first remove all 'next and prev' slide classes
    let articles = document.querySelectorAll("[class^=article_]");
    console.log(articles);
    articles.forEach((item) => {
      item.classList.remove("active-slide", "prev-slide", "next-slide");
    });

    // then, assign 'active' class to active review
    document.getElementById(`article_${activeReview}`).classList.add("active-slide");

    // next, we assign 'next and prev slide' classes based on activeReview value
    // if 1st review
    if (activeReview === 1) {
      document.getElementById(`article_${len}`).classList.add("prev-slide");
      for (let i = 2; i < len; i++) {
        document.getElementById(`article_${i}`).classList.add("next-slide");
      }
    }
    // if last review
    else if (activeReview === len) {
      document.getElementById(`article_1`).classList.add("next-slide");
      for (let i = 2; i < len; i++) {
        document.getElementById(`article_${i}`).classList.add("prev-slide");
      }
    }
    // if middle review
    else {
      // apply prev-slide class to previous elements
      for (let i = 1; i < activeReview; i++) {
        document.getElementById(`article_${i}`).classList.add("prev-slide");
      }
      // apply next-slide class to next elements
      for (let i = activeReview + 1; i <= len; i++) {
        document.getElementById(`article_${i}`).classList.add("next-slide");
      }
    }
  }, [activeReview, len]);

  const renderReviewsList = () => {
    return people.map(({id, name, image, title, quote}, index) => {
      return (
        <article
          key={index}
          hidden={activeReview !== id ? true : false}
          className={`article_${id} text-center`}
          id={`article_${id}`}
        >
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
        </article>
      );
    });
  };

  return <section>{renderReviewsList()}</section>;
};

export default Reviews;
