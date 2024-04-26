import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import { CRUDButtons } from "../CRUDButtons/CRUDButtons";
import Card from "react-bootstrap/Card";
import "./styles.css";

// export const DetailedCard = ({
//   record: {
//     id,
//     name,
//     description,
//     price,
//     rating,
//     image,
//     created_at,
//     updated_at,
//   },
// }) => {
export const DetailedCard = ({ record }) => {
  const [recordDetails, setRecordDetails] = useState(record);

  useEffect(() => {}, []);

  return (
    <div className="detailed-card-container">
      <Card.Img id="detailed-card-image" src={record.image} />
      <div className="tablet-view">
        <Card id="detailed-card-1">
          <Card.Body className="detailed-card-body-1">
            <Card.Text as={"h1"} className="flex-1">
              {recordDetails.name}
            </Card.Text>
            <Card.Text className="detailed-card-description flex-3">
              {recordDetails.description}
            </Card.Text>
            <Card.Text as={"h2"} className="detailed-card-price flex-1">
              ${recordDetails.price}
            </Card.Text>
            <div id="detailed-star-rating" className="flex-2">
              <StarRating rating={recordDetails.rating} size={30} />
            </div>
          </Card.Body>
        </Card>
        <div className="separator"></div>
        <Card id="detailed-card-2">
          <Card.Body className="detailed-card-body-2">
            <div className="detailed-id-and-dates">
              <Card.Text as={"h3"} className="flex-1" id="detailed-card-2-id">
                ID: {record.id}
              </Card.Text>
              <Card.Text id="created-on" className="created-on flex-2">
                <div className="created-on-div">
                  <b>Created On:</b> {record.created_at}
                </div>
              </Card.Text>
              <Card.Text id="updated-on" className="updated-on flex-2">
                <div className="updated-on-div">
                  <b>Updated On:</b> {recordDetails.updated_at}
                </div>
              </Card.Text>
            </div>
            <CRUDButtons record={record} setRecordDetails={setRecordDetails} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

// DetailedCard.propTypes = {
//   record: {
//     id: PropTypes.string,
//     name: PropTypes.string,
//     description: PropTypes.string,
//     price: PropTypes.string,
//     rating: PropTypes.string,
//     image: PropTypes.string,
//     created_at: PropTypes.string,
//     updated_at: PropTypes.string,
//   },
// };
