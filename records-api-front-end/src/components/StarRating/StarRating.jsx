import Reactm, { useState } from "react";
import { IoMdStar } from "react-icons/io";

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      <IoMdStar key={rating} className="star" size={25} color={"#e4e5e9"} />
    </div>
  );
};
