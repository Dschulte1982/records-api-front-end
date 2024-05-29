import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import NavBar from "../NavBar";
import DetailedCard from "../DetailedCard";
import { RecordsAPI } from "../../apis/RecordsAPI";

export const ShowItem = () => {
  const [itemLoading, setItemLoading] = useState(true);
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setItemLoading(true);
    RecordsAPI.get(id).then((item) => {
      setItem(item);
      setItemLoading(false);
    });
  }, [id]);

  if (itemLoading) {
    return (
      <div id="loading-container">
        <div className="loading-div">Loading...</div>
        <Spinner animation="grow" size="sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Spinner animation="grow" size="lg" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Spinner animation="grow" size="sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <div className="show-record-main-container">
        <NavBar />
        <DetailedCard item={item} />
      </div>
    );
  }
};
