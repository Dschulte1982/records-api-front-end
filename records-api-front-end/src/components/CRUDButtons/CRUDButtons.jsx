import React from "react";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export const CRUDButtons = () => {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      id="detailed-card-stack"
      className=" flex-2"
    >
      <FontAwesomeIcon
        className="detailed-edit-icon"
        icon="fa-regular fa-pen-to-square"
        size="2x"
        fixedWidth
      />
      <FontAwesomeIcon
        className="detailed-delete-icon"
        icon="fa-regular fa-trash-can"
        size="2x"
        fixedWidth
      />
    </Stack>
  );
};
