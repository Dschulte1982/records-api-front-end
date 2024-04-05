import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import Card from "react-bootstrap/Card";
import "./styles.css";

export const CardBody = ({
  record: { id, name, description, price, rating, image },
}) => {
  const navigate = useNavigate();
  const handleClickToShowPage = (record) => {
    navigate(`/${id}`);
  };

  return (
    <Card onClick={handleClickToShowPage}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-body-description">{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Card.Text>
          <StarRating rating={rating} size={15} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

CardBody.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
};
