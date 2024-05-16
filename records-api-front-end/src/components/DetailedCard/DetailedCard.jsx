import React, { useState } from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import { CRUDButtons } from "../CRUDButtons/CRUDButtons";
import Card from "react-bootstrap/Card";
import "./styles.css";

export const DetailedCard = ({ record }) => {
  const [recordDetails, setRecordDetails] = useState(record);

  return (
    <div className="detailed-card-container">
      <div className="detailed-card-image-container">
        <Card.Img id="detailed-card-image" src={record.image} />
      </div>
      <div className="tablet-view">
        <Card id="detailed-card-1">
          <Card.Body id="card-body-1" className="detailed-card-body-1">
            <Card.Text as={"h1"} className="flex-2">
              {recordDetails.name}
            </Card.Text>
            <Card.Text className="detailed-card-description flex-3">
              {recordDetails.description}
            </Card.Text>
            <Card.Text as={"h2"} className="detailed-card-price flex-1">
              ${recordDetails.price}
            </Card.Text>
            <div id="detailed-star-rating" className="flex-1">
              <StarRating rating={recordDetails.rating} size={30} />
            </div>
          </Card.Body>
        </Card>
        <div className="separator"></div>
        <Card id="detailed-card-2" className="flex-2">
          <Card.Body className="detailed-card-body-2">
            <div className="detailed-id-and-dates">
              <Card.Text as={"h3"} className="flex-1" id="detailed-card-2-id">
                ID: {record.id}
              </Card.Text>
              <Card.Text id="created-on" className="created-on">
                <b>Created On:</b> {record.created_at}
              </Card.Text>
              <Card.Text id="updated-on" className="updated-on">
                <b>Updated On: </b> {recordDetails.updated_at}
              </Card.Text>
            </div>
            <CRUDButtons record={record} setRecordDetails={setRecordDetails} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

DetailedCard.propTypes = {
  record: PropTypes.object,
};
