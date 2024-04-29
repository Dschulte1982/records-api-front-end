import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import StarRating from "../StarRating";
import { RecordsAPI } from "../../apis/RecordsAPI";

export const AddItem = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [addValues, setAddValues] = useState({
    name: "",
    description: "",
    price: "",
    rating: "0",
    image: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.stopPropagation();
    }
  };

  const onChangeAddHandler = (attribute) => {
    return (event) => {
      console.log(event.target.value);
      setAddValues({ ...addValues, [attribute]: event.target.value });
    };
  };

  const handleClose = () => {
    setShowAdd(false);
  };

  const handleShowAdd = () => setShowAdd(true);

  const navigate = useNavigate();

  const handleAddClick = () => {
    RecordsAPI.create(addValues).then(() => {
      setShowAdd(false);
      navigate("/");
    });
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
                value={addValues.name}
                onKeyDown={handleKeyDown}
                onChange={onChangeAddHandler("name")}
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
                placeholder="Enter the item description..."
                value={addValues.description}
                onKeyDown={handleKeyDown}
                onChange={onChangeAddHandler("description")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addForm.ControlPriceInput">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={addValues.price}
                placeholder="Enter the item price..."
                onChange={onChangeAddHandler("price")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addForm.ControlImageInput">
              <Form.Label>Image</Form.Label>
              <Form.Select
                aria-label="add-form-image-select"
                value={addValues.image}
                onChange={onChangeAddHandler("image")}
              >
                <option readOnly>Open this select menu</option>
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
              <StarRating
                value={addValues.rating}
                size={30}
                active={true}
                onChange={onChangeAddHandler("rating")}
              />
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
