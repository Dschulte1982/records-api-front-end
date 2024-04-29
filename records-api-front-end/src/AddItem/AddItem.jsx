import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { RecordsAPI } from "../apis/RecordsAPI";

export const AddItem = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    image: "",
  });

  const onChangeHandler = (attribute) => {
    return (event) => {
      setValues({ ...values, [attribute]: event.target.value });
    };
  };

  const handleClose = () => {
    setShowAdd(false);
  };

  const handleShowAdd = () => setShowAdd(true);

  const navigate = useNavigate();

  const handleAddClick = () => {
    // RecordsAPI.create(values).then(() => {
    //   setShowAdd(false);
    // });
    setShowAdd(false);
  };

  return (
    <div>
      <div onClick={handleShowAdd}>Add Item</div>
      <Modal show={showAdd} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="addForm.ControlNameInput">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the item name..."
                value={values.name}
                onChange={onChangeHandler("name")}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="addForm.ControlDescriptionInput"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={values.description}
                placeholder="Enter the item description..."
                onChange={onChangeHandler("description")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addForm.ControlPriceInput">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={values.price}
                placeholder="Enter the item price..."
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
          <Button variant="primary" onClick={() => handleAddClick()}>
            Add Item
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

AddItem.propTypes = {
  record: PropTypes.object,
};
