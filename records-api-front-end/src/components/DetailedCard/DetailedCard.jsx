import React from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
            <Card.Header as={"h2"} className="text-center">
              {name}
            </Card.Header>
            <Card.Body>
              <Card.Title>${price}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>
                <StarRating rating={rating} size={50} />
              </Card.Text>
              <div className="detailed-card-date">
                <Card.Text>Created On: {created_at}</Card.Text>
                <Card.Text>Updated On: {updated_at}</Card.Text>
              </div>
              <Button variant="outline-primary">Edit Record</Button>{" "}
              <Button variant="outline-danger">Delete Record</Button>{" "}
            </Card.Body>
          </div>
        </div>
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
