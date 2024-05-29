import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import LinesEllipsis from "react-lines-ellipsis";
import Card from "react-bootstrap/Card";
import "./styles.css";

export const CardBody = ({
  item: { id, name, description, price, rating, image },
}) => {
  const navigate = useNavigate();
  const handleClickToShowPage = (item) => {
    navigate(`/${id}`, { state: { action: "show" } });
  };

  return (
    <Card onClick={handleClickToShowPage}>
      <Card.Img id="card-body-image" variant="top" src={image} />
      <Card.Body>
        <Card.Title id="card-body-name">{name}</Card.Title>
        {/* <Card.Text className="card-body-description">{description}</Card.Text> */}
        <Card.Text as="div" className="card-body-description">
          <LinesEllipsis
            text={description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          ></LinesEllipsis>
        </Card.Text>
        <Card.Text className="card-body-price">${price.toFixed(2)}</Card.Text>
        <Card.Text as={"div"}>
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
