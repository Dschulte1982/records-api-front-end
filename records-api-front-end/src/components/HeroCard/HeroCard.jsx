import React from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import Card from "react-bootstrap/Card";
import "./styles.css";

export const HeroCard = ({
  featuredRecord: { id, name, description, price, rating, image },
}) => {
  return (
    <div className="hero-card-container">
      <Card>
        <div className="hero-card-inner-container">
          <div className="hero-card-image">
            <Card.Img src={image} />
          </div>
          <div className="hero-card-content">
            <Card.Header as={"h1"}>Featured</Card.Header>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>${price}</Card.Text>
              <Card.Text>
                <StarRating rating={rating} size={15} />
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
};
