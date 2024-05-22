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
    navigate(`/${id}`, { state: { action: "show" } });
  };

  return (
    <Card onClick={handleClickToShowPage}>
      <Card.Img id="card-body-image" variant="top" src={image} />
      <Card.Body>
        <Card.Title id="card-body-name">{name}</Card.Title>
        <Card.Text className="card-body-description">{description}</Card.Text>
        <Card.Text className="card-body-price">${price}</Card.Text>
        <Card.Text>
          <StarRating rating={rating} size={25} />
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
