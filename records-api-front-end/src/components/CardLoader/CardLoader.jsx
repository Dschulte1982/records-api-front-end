import React, { useEffect, useState } from "react";
import { CardBody } from "../CardBody/CardBody";
import { RecordsAPI } from "../../apis/RecordsAPI";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
    <Row xs={1} md={2} lg={3} className="g-4">
      {recordsList.map((record, idx) => (
        <Col key={idx}>
          <CardBody key={record.id} record={record} />
        </Col>
      ))}
    </Row>
  );
};
