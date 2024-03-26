import React from "react";
import PropTypes from "prop-types";

const headerStyling = {
  fontFamily: "sans-serif",
  color: "gray",
  fontWeight: "bold",
  fontSize: "9px",
  flexGrow: "2",
};

const textStyling = {
  fontFamily: "sans-serif",
  fontSize: "10px",
  margin: "0 0 0 5px",
  flexGrow: "8",
};

export const Card = ({ record: { id, name, description, price, rating } }) => {
  return (
    <div
      className="card-container"
      key={id}
      style={{
        borderStyle: "solid",
        borderColor: "lightgray",
        borderWidth: "1px",
        borderRadius: "5px",
        boxShadow: "0.01em 2px 1px lightgray, -1px 0 2px lightgray",
        margin: "0 0 10px 0",
      }}
    >
      <div
        className="card-table"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          className="card-row-1"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row-item-1-header" style={headerStyling}>
            NAME
          </div>
          <div className="row-item-1" style={textStyling}>
            {name}
          </div>
        </div>
        <div
          className="card-row-2"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row-item-2-header" style={headerStyling}>
            DESCRIPTION
          </div>
          <div className="row-item-2" style={textStyling}>
            {description}
          </div>
        </div>
        <div
          className="card-row-3"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row-item-3-header" style={headerStyling}>
            PRICE
          </div>
          <div className="row-item-3" style={textStyling}>
            {price}
          </div>
        </div>
        <div
          className="card-row-4"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="row-item-4-header" style={headerStyling}>
            RATING
          </div>
          <div className="row-item-4" style={textStyling}>
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
};