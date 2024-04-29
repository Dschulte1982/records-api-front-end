import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";

export const StarRating = ({ value, size, active, setAddValues }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // https://codesandbox.io/p/sandbox/react-five-star-rating-9dwks?file=%2Fsrc%2FStarRating.js%3A25%2C70-25%2C77

  if (active) {
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <IoMdStar
              key={i}
              type="radio"
              name="rating"
              value={ratingValue}
              className="star"
              size={size}
              color={ratingValue <= (hover || rating) ? "#FBBC04" : "#e4e5e9"}
              onClick={() => setRating(ratingValue)}
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
                color={ratingValue <= value ? "#FBBC04" : "#e4e5e9"}
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
