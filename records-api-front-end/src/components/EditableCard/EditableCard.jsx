import React, { useState } from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import { CRUDButtons } from "../CRUDButtons/CRUDButtons";
import Card from "react-bootstrap/Card";
import "./styles.css";

export const EditableCard = ({
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
  const [values, setValues] = useState({
    name: name,
    description: description,
    price: price,
  });

  const onChangeHandler = (attribute) => {
    return (event) => {
      setValues({ ...values, [attribute]: event.target.value });
    };
  };

  return (
    <div className="detailed-card-container">
      <Card.Img id="detailed-card-image" src={image} />
      <div className="tablet-view">
        <Card id="detailed-card-1">
          <Card.Body className="detailed-card-body-1">
            <Card.Text
              as={"input"}
              type="text"
              className="flex-1 card-1-id"
              value={values.name}
              onChange={onChangeHandler("name")}
            ></Card.Text>
            <Card.Text
              as={"input"}
              type="text"
              className="detailed-card-description flex-3"
              value={values.description}
              onChange={onChangeHandler("description")}
            ></Card.Text>
            <Card.Text
              as={"input"}
              type="number"
              className="detailed-card-price flex-1"
              value={values.price}
              onChange={onChangeHandler("price")}
            ></Card.Text>
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
            <CRUDButtons id={id} name={name} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

EditableCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
};
