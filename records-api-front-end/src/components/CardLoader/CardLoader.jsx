import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { RecordsAPI } from "../../apis/RecordsAPI";

export const CardLoader = () => {
  const [recordsListLoading, setRecordsListLoading] = useState(false);
  const [recordsList, setRecordsList] = useState([]);

  useEffect(() => {
    setRecordsListLoading(true);
    RecordsAPI.getAll().then((records) => {
      setRecordsList(records);
    });
  }, []);

  return (
    <div
      className="card-loader"
      style={{
        height: "250px",
        overflowY: "scroll",
        textAlign: "justify",
        margin: "30px 0px 0px 0px",
        padding: "20px",
      }}
    >
      {recordsList.map((record) => (
        <Card key={record.id} record={record} />
      ))}
    </div>
  );
};
