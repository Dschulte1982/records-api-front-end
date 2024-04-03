import React from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import Card from "react-bootstrap/Card";
import "./styles.css";

export const HeroCard = (
  {
    //   record: { id, name, description, price, rating, image },
  }
) => {
  return (
    <div className="hero-card-container">
      {/* <img src={image} alt="A record" className="hero-card-image" /> */}
      {/* <Card>
        <Card.Img variant="left" src={image} />
        <Card.Header as={"h1"}>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <Card.Text>
            <StarRating rating={rating} size={15} />
          </Card.Text>
        </Card.Body>
      </Card> */}

      <Card>
        <div className="hero-card-inner-container">
          <div>
            <Card.Img
              variant="left"
              src={"https://via.placeholder.com/640x480.png/007755?text=et"}
            />
          </div>
          <div>
            <Card.Header as={"h1"}>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>
                A bunch of text to see if I can make this even wider
              </Card.Text>
              <Card.Text>$99.99</Card.Text>
              <Card.Text>
                <StarRating rating={4} size={15} />
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
