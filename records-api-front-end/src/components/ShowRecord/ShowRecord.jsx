import React, { useEffect, useState } from "react";
import { RecordsAPI } from "../../apis/RecordsAPI";
import { NavBar } from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import { DetailedCard } from "../DetailedCard/DetailedCard";
import "./styles.css";

export const ShowRecord = () => {
  const [recordLoading, setRecordLoading] = useState(true);
  const [record, setRecord] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setRecordLoading(true);
    RecordsAPI.get(id).then((record) => {
      setRecord(record);
      setRecordLoading(false);
    });
  }, [id]);

  if (recordLoading) {
    return <div>Still Loading</div>;
  } else {
    return (
      <div className="show-record-main-container">
        <NavBar />
        <DetailedCard record={record} />
      </div>
    );
  }
};
