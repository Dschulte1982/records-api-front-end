import React, { useEffect, useState } from "react";
import { RecordsAPI } from "../../apis/RecordsAPI";
import { NavBar } from "../NavBar/NavBar";
import { HeroCard } from "../HeroCard/HeroCard";
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
    return <div>Still Loading</div>;
  } else {
    return (
      <div className="main-container">
        <NavBar />
        <HeroCard featuredRecord={recordsList.slice(-1)[0]} />
        <CardLoader recordsList={recordsList} />
      </div>
    );
  }
};
