import React from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export const DetailedCard = ({
  record: {
    id,
    name,
    description,
    price,
    rating,
    image,
    created_at,
    updated_at,
  },
}) => {
  return (
    <div className="detailed-card-container">
      <Card.Img id="detailed-card-image" src={image} />
      <Card id="detailed-card-1">
        <Card.Body className="detailed-card-body-1">
          <Card.Text as={"h1"} className="flex-1">
            {name}
          </Card.Text>
          <Card.Text className="mt-5 card-description flex-2">
            {description}
          </Card.Text>
          <Card.Text as={"h4"} className="mt-5 flex-1">
            ${price}
          </Card.Text>
          <div id="detailed-star-rating" className="mt-5 flex-2">
            <StarRating rating={rating} size={30} />
          </div>
        </Card.Body>
      </Card>
      <div className="separator"></div>
      <Card id="detailed-card-2">
        <Card.Body className="detailed-card-body-2">
          <Card.Text as={"h3"} className="flex-1">
            {id}
          </Card.Text>
          <div className="detailed-card-date flex-3 mt-5">
            <Card.Text className="created-on">
              <p className="detailed-p-tags">Created On:</p>
              {created_at}
            </Card.Text>
            <Card.Text className="updated-on">
              <p className="detailed-p-tags">Updated On:</p>
              {updated_at}
            </Card.Text>
          </div>
          <Stack
            direction="horizontal"
            gap={2}
            className="detailed-card-stack-2 flex-2"
          >
            <FontAwesomeIcon
              className="detailed-edit-icon ms-auto"
              icon="fa-regular fa-pen-to-square"
              size="2x"
              fixedWidth
            />
            <FontAwesomeIcon
              className="detailed-delete-icon"
              icon="fa-regular fa-trash-can"
              size="2x"
              fixedWidth
            />
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

DetailedCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
};
