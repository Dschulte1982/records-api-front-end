import React, { useEffect, useState } from "react";
import { CardBody } from "../CardBody/CardBody";
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
        height: "800px",
        width: "400px",
        overflowY: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        textAlign: "justify",
        margin: "20px 0px 0px -8px",
        padding: "20px",
        WebkitScrollBar: { display: "none" },
      }}
    >
      {recordsList.map((record) => (
        <CardBody key={record.id} record={record} />
      ))}
    </div>
  );
};
