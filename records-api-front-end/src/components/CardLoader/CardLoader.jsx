import React, { useEffect, useState } from "react";
import { CardBody } from "../CardBody/CardBody";
import { RecordsAPI } from "../../apis/RecordsAPI";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";

export const CardLoader = () => {
  const [recordsListLoading, setRecordsListLoading] = useState(false);
  const [recordsList, setRecordsList] = useState([]);
  const [pageState, setPageState] = useState({
    currentData: [],
    pages: [],
    activePage: 1,
    min: 0,
    max: 6,
  });

  const handlePageChange = (pageNumber) => {
    setPageState((prev) => ({
      ...prev,
      activePage: pageNumber,
      max: pageNumber * 6,
      min: pageNumber * 6 - 6,
    }));
  };

  useEffect(() => {
    setRecordsListLoading(true);
    RecordsAPI.getAll().then((records) => {
      setRecordsList(records);
    });
  }, []);

  useEffect(() => {
    setPageState((prev) => ({
      ...prev,
      currentData: recordsList.slice(pageState.min, pageState.max),
      pages: Array.from(
        { length: (recordsList.length - 1) / 6 + 1 },
        (value, index) => 1 + index * 6
      ),
    }));
  }, [pageState.min, pageState.max, recordsList]);

  return (
    // <Row xs={1} md={2} lg={3} className="g-4">
    //   {recordsList.map((record, idx) => (
    //     <Col key={idx}>
    //       <CardBody key={record.id} record={record} />
    //     </Col>
    //   ))}
    // </Row>
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {pageState.currentData.map((record, idx) => {
          return (
            <Col key={idx}>
              <CardBody key={record.id} record={record} />
            </Col>
          );
        })}
      </Row>

      <Pagination className="px-4">
        {/* {pageState.currentData.map((_, idx) => { */}
        {pageState.pages.map((_, idx) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(idx + 1)}
              key={idx + 1}
              active={idx + 1 === pageState.activePage}
            >
              {idx + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};
