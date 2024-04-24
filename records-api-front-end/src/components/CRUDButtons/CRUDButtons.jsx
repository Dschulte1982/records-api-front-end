import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecordsAPI } from "../../apis/RecordsAPI";
import "./styles.css";

export const CRUDButtons = ({ id, name }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/${id}`);
  };

  const handleDeleteClick = (id) => {
    RecordsAPI.delete(id).then(() => {
      setShow(false);
      navigate(`/`);
    });
  };

  return (
    <Stack
      direction="horizontal"
      gap={2}
      id="detailed-card-stack"
      className=" flex-2"
    >
      <FontAwesomeIcon
        onClick={handleEditClick}
        className="detailed-edit-icon"
        icon="fa-regular fa-pen-to-square"
        size="2x"
        fixedWidth
      />
      <FontAwesomeIcon
        onClick={handleShow}
        className="detailed-delete-icon"
        icon="fa-regular fa-trash-can"
        size="2x"
        fixedWidth
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item: {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Return
          </Button>
          <Button variant="danger" onClick={() => handleDeleteClick(id)}>
            Confirm Deletion
          </Button>
        </Modal.Footer>
      </Modal>
    </Stack>
  );
};

CRUDButtons.propTypes = {
  id: PropTypes.string,
};
