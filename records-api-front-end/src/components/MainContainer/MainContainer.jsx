import React, { useEffect, useState } from "react";
import { RecordsAPI } from "../../apis/RecordsAPI";
import { NavBar } from "../NavBar/NavBar";
import Spinner from "react-bootstrap/Spinner";
import { WelcomeJumbotron } from "../WelcomeJumbotron/WelcomeJumbotron";
import { CardLoader } from "../CardLoader/CardLoader";
import "./styles.css";

export const MainContainer = () => {
  const [recordsListLoading, setRecordsListLoading] = useState(true);
  const [recordsList, setRecordsList] = useState([]);

  useEffect(() => {
    setRecordsListLoading(true);
    RecordsAPI.getAll().then((records) => {
      setRecordsList(records);
      setRecordsListLoading(false);
    });
  }, []);

  if (recordsListLoading) {
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
        <CardLoader recordsList={recordsList} />
      </div>
    );
  }
};
