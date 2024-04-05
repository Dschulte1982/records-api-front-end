import React, { useEffect, useState } from "react";
import { RecordsAPI } from "../../apis/RecordsAPI";
import { useLocation, useParams } from "react-router-dom";

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
      <div>
        <div>Show Record will go here</div>
        <div>{record.name}</div>
      </div>
    );
  }
};
