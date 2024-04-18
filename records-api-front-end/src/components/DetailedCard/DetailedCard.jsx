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
      <div className="tablet-view">
        <Card id="detailed-card-1">
          <Card.Body className="detailed-card-body-1">
            <Card.Text as={"h1"} className="flex-1">
              {name}
            </Card.Text>
            <Card.Text className="detailed-card-description flex-3">
              {description}
            </Card.Text>
            <Card.Text as={"h2"} className="detailed-card-price flex-1">
              ${price}
            </Card.Text>
            <div id="detailed-star-rating" className="flex-2">
              <StarRating rating={rating} size={30} />
            </div>
          </Card.Body>
        </Card>
        <div className="separator"></div>
        <Card id="detailed-card-2">
          <Card.Body className="detailed-card-body-2">
            <div className="detailed-id-and-dates">
              <Card.Text as={"h3"} className="flex-1" id="detailed-card-2-id">
                ID: {id}
              </Card.Text>
              <Card.Text id="created-on" className="created-on flex-2">
                <div className="created-on-div">
                  <b>Created On:</b> {created_at}
                </div>
              </Card.Text>
              <Card.Text id="updated-on" className="updated-on flex-2">
                <div className="updated-on-div">
                  <b>Updated On:</b> {updated_at}
                </div>
              </Card.Text>
            </div>
            <Stack
              direction="horizontal"
              gap={2}
              id="detailed-card-stack"
              className=" flex-2"
            >
              <FontAwesomeIcon
                className="detailed-edit-icon"
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
