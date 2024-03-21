import React from "react";
import PropTypes from "prop-types";

export const Card = ({ record: { id, name, description, price, rating } }) => {
  return (
    <div className="card-container">
      <div
        className="card-table"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          className="card-row-1"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row-item-1-header">Name</div>
          <div className="row-item-1">{name}</div>
        </div>
        <div
          className="card-row-2"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row-item-2-header">Description</div>
          <div className="row-item-2">{description}</div>
        </div>
        <div
          className="card-row-3"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row-item-3-header">Price</div>
          <div className="row-item-3">{price}</div>
        </div>
        <div
          className="card-row-4"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row-item-4-header">Rating</div>
          <div className="row-item-4">{rating}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
};
