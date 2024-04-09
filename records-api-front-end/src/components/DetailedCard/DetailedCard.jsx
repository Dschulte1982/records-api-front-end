import React from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import Card from "react-bootstrap/Card";
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
      <Card>
        <div className="detailed-card-inner-container">
          <div className="detailed-card-image">
            <Card.Img src={image} />
          </div>
          <div className="detailed-card-content">
            <Card.Body className="card-body">
              <Card.Text as={"h2"}>{name}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <Card.Text>${price}</Card.Text>
              <Card.Text>
                <StarRating rating={rating} size={30} />
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text as={"h4"}>{id}</Card.Text>
          <div className="detailed-card-date">
            <Card.Text className="created-on">
              <p>Created On:</p>
              {created_at}
            </Card.Text>
            <Card.Text className="updated-on">
              <p>Updated On:</p>
              {updated_at}
            </Card.Text>
          </div>
          <div className="detailed-card-button-group">
            <Button variant="outline-primary">Edit Record</Button>{" "}
            <Button variant="outline-danger">Delete Record</Button>{" "}
          </div>
          <FontAwesomeIcon icon="fa-regular fa-trash-can" />
        </Card.Body>
      </Card>
      <FontAwesomeIcon icon="fa-regular fa-trash-can" />
      <FontAwesomeIcon icon="fa-solid fa-trash-can" />
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
