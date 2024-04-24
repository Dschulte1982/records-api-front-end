import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecordsAPI } from "../../apis/RecordsAPI";
import "./styles.css";

export const CRUDButtons = ({ id }) => {
  const navigate = useNavigate();
  const handleEditClick = () => {
    console.log("Edit was clicked");
  };

  const handleDeleteClick = (id) => {
    RecordsAPI.delete(id).then(() => {
      alert(`Record with Id: ${id} was deleted`);
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
        onClick={() => handleDeleteClick(id)}
        className="detailed-delete-icon"
        icon="fa-regular fa-trash-can"
        size="2x"
        fixedWidth
      />
    </Stack>
  );
};

CRUDButtons.propTypes = {
  id: PropTypes.string,
};
