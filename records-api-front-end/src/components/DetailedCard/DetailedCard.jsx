import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import StarRating from "../StarRating";
import CRUDButtons from "../CRUDButtons";
import "./styles.css";

export const DetailedCard = ({ item }) => {
  const [itemDetails, setItemDetails] = useState(item);

  return (
    <div className="detailed-card-container">
      <div className="detailed-card-image-container">
        <Card.Img id="detailed-card-image" src={itemDetails.image} />
      </div>
      <div className="tablet-view">
        <Card id="detailed-card-1">
          <Card.Body id="card-body-1" className="detailed-card-body-1">
            <Card.Text as={"h1"} id="detailed-card-1-id" className="flex-1">
              {itemDetails.name}
            </Card.Text>
            <Card.Text className="detailed-card-description flex-3">
              {itemDetails.description}
            </Card.Text>
            <Card.Text as={"h2"} className="detailed-card-price flex-3">
              ${itemDetails.price.toFixed(2)}
            </Card.Text>
            <div id="detailed-star-rating" className="flex-1">
              <StarRating rating={itemDetails.rating} size={30} />
            </div>
          </Card.Body>
        </Card>
        <div className="separator"></div>
        <Card id="detailed-card-2" className="flex-2">
          <Card.Body className="detailed-card-body-2">
            <div className="detailed-id-and-dates flex-1">
              <Card.Text as={"h3"} id="detailed-card-2-id" className="flex-2">
                ID: {item.id}
              </Card.Text>
              <Card.Text id="created-on" className="created-on flex-1">
                <b>Created On:</b> {item.created_at}
              </Card.Text>
              <Card.Text id="updated-on" className="updated-on flex-1">
                <b>Updated On: </b> {itemDetails.updated_at}
              </Card.Text>
            </div>
            <CRUDButtons item={item} setItemDetails={setItemDetails} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

DetailedCard.propTypes = {
  item: PropTypes.object,
};
