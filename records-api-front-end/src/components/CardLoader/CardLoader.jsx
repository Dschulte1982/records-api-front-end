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
        height: "270px",
        width: "233px",
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
        <Card key={record.id} record={record} />
      ))}
    </div>
  );
};
