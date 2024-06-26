import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Spinner from "react-bootstrap/Spinner";
import WelcomeJumbotron from "../WelcomeJumbotron";
import CardLoader from "../CardLoader";
import { RecordsAPI } from "../../apis/RecordsAPI";
import "./styles.css";

export const MainContainer = () => {
  const [itemsListLoading, setItemsListLoading] = useState(true);
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setItemsListLoading(true);
    RecordsAPI.getAll().then((items) => {
      setItemsList(items.reverse());
      setItemsListLoading(false);
    });
  }, []);

  if (itemsListLoading) {
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
      <div className="main-container">
        <NavBar />
        <WelcomeJumbotron />
        <CardLoader itemsList={itemsList} />
      </div>
    );
  }
};
