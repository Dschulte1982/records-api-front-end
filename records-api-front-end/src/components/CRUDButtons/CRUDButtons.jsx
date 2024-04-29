import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecordsAPI } from "../../apis/RecordsAPI";
import "./styles.css";

export const CRUDButtons = ({ record, setRecordDetails }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [values, setValues] = useState({
    id: record.id,
    name: record.name,
    description: record.description,
    price: record.price,
    image: record.image,
    rating: record.rating,
  });

  const onChangeHandler = (attribute) => {
    return (event) => {
      setValues({ ...values, [attribute]: event.target.value });
    };
  };

  const handleClose = () => {
    setShowEdit(false);
    setShowDelete(false);
  };

  const handleShowEdit = () => setShowEdit(true);
  const handleShowDelete = () => setShowDelete(true);

  const navigate = useNavigate();

  const handleEditClick = () => {
    RecordsAPI.update(values).then(() => {
      setRecordDetails(values);
      setShowEdit(false);
    });
  };

  const handleDeleteClick = (id) => {
    RecordsAPI.delete(id).then(() => {
      setShowDelete(false);
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
        onClick={handleShowEdit}
        className="detailed-edit-icon"
        icon="fa-regular fa-pen-to-square"
        size="2x"
        fixedWidth
      />
      <FontAwesomeIcon
        onClick={handleShowDelete}
        className="detailed-delete-icon"
        icon="fa-regular fa-trash-can"
        size="2x"
        fixedWidth
      />
      {/* Edit Modal*/}
      <Modal show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editForm.ControlNameInput">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={values.name}
                onChange={onChangeHandler("name")}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="editForm.ControlDescriptionInput"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={values.description}
                onChange={onChangeHandler("description")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editForm.ControlPriceInput">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={values.price}
                onChange={onChangeHandler("price")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addForm.ControlImageInput">
              <Form.Label>Image</Form.Label>
              <Form.Select
                aria-label="add-form-image-select"
                value={values.image}
                onChange={onChangeHandler("image")}
              >
                <option>Open this select menu</option>
                <option value="https:\/\/via.placeholder.com\/640x480.png\/0000ee?text=OptionOne">
                  One
                </option>
                <option value="https:\/\/via.placeholder.com\/640x480.png\/0000ee?text=OptionTwo">
                  Two
                </option>
                <option value="https:\/\/via.placeholder.com\/640x480.png\/0000ee?text=OptionThree">
                  Three
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addForm.ControlRatingInput">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                aria-label="add-form-image-select"
                value={values.rating}
                onChange={onChangeHandler("rating")}
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleEditClick(record.id)}>
            Save Changes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Delete Modal*/}
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item: {record.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Return
          </Button>
          <Button variant="danger" onClick={() => handleDeleteClick(record.id)}>
            Confirm Deletion
          </Button>
        </Modal.Footer>
      </Modal>
    </Stack>
  );
};

CRUDButtons.propTypes = {
  record: PropTypes.object,
};
