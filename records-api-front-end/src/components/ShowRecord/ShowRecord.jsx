import React, { useEffect, useState } from "react";
import { RecordsAPI } from "../../apis/RecordsAPI";
import { NavBar } from "../NavBar/NavBar";
import { useParams, useLocation } from "react-router-dom";
import { DetailedCard } from "../DetailedCard/DetailedCard";
import { EditableCard } from "../EditableCard/EditableCard";
import "./styles.css";

export const ShowRecord = () => {
  const [recordLoading, setRecordLoading] = useState(true);
  const [record, setRecord] = useState([]);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    setRecordLoading(true);
    RecordsAPI.get(id).then((record) => {
      setRecord(record);
      setRecordLoading(false);
    });
  }, [id]);

  if (recordLoading || location.state === null) {
    return <div>Still Loading</div>;
  } else if (location.state.action === "edit") {
    return (
      <div className="show-record-main-container">
        <NavBar />
        <EditableCard record={record} />
      </div>
    );
  } else {
    return (
      <div className="show-record-main-container">
        <NavBar />
        <DetailedCard record={record} />
      </div>
    );
  }
};
