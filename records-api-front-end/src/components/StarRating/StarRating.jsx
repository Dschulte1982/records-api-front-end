import React from "react";
import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";

export const StarRating = ({ rating, size }) => {
  //   const [rating, setRating] = useState(null);

  // https://codesandbox.io/p/sandbox/react-five-star-rating-9dwks?file=%2Fsrc%2FStarRating.js%3A25%2C70-25%2C77

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
};

StarRating.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.number,
};
