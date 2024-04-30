import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";

export const StarRating = ({ rating, size, active, setRating }) => {
  const [hover, setHover] = useState(null);

  const handleAddClick = (ratingValue) => {
    setRating(ratingValue);
  };

  // https://codesandbox.io/p/sandbox/react-five-star-rating-9dwks?file=%2Fsrc%2FStarRating.js%3A25%2C70-25%2C77

  if (active) {
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          console.log(i);
          return (
            <IoMdStar
              key={i}
              type="radio"
              name="rating"
              value={ratingValue}
              className="star"
              size={size}
              color={ratingValue <= (hover || rating) ? "#FBBC04" : "#e4e5e9"}
              onClick={() => handleAddClick(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <IoMdStar
                key={i}
                className="star"
                size={size}
                color={ratingValue <= rating ? "#FBBC04" : "#e4e5e9"}
              />
            </label>
          );
        })}
      </div>
    );
  }
};

StarRating.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.number,
};
