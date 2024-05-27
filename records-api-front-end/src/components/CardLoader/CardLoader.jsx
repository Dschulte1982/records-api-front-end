import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardBody from "../CardBody";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import "./styles.css";

export const CardLoader = ({ itemsList }) => {
  const [pageState, setPageState] = useState({
    currentData: [],
    pages: [],
    activePage: 1,
    min: 0,
    max: 6,
  });

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber < pageState.pages.length + 1) {
      setPageState((prev) => ({
        ...prev,
        activePage: pageNumber,
        max: pageNumber * 6,
        min: pageNumber * 6 - 6,
      }));
    }
  };

  useEffect(() => {
    setPageState((prev) => ({
      ...prev,
      currentData: itemsList.slice(pageState.min, pageState.max),
      pages: Array.from(
        { length: (itemsList.length - 1) / 6 + 1 },
        (value, index) => 1 + index * 6
      ),
    }));
  }, [pageState.min, pageState.max, itemsList]);

  return (
    <div className="cardloader-main-container">
      <Row xs={1} md={2} lg={3} className="g-4">
        {pageState.currentData.map((item, idx) => {
          return (
            <Col key={idx}>
              <CardBody key={item.id} item={item} />
            </Col>
          );
        })}
      </Row>
      <div className="cardloader-pagination">
        <Pagination className="px-4">
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(pageState.activePage - 1)}
          />
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
          <Pagination.Next
            onClick={() => handlePageChange(pageState.activePage + 1)}
          />
          <Pagination.Last
            onClick={() => handlePageChange(pageState.pages.length)}
          />
        </Pagination>
      </div>
    </div>
  );
};

CardLoader.propTypes = {
  itemsList: PropTypes.array,
};
