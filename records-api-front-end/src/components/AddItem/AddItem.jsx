import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import StarRating from "../StarRating";
import { RecordsAPI } from "../../apis/RecordsAPI";
import * as formik from "formik";
import * as yup from "yup";
import "./styles.css";

export const AddItem = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Your name is too short.")
      .max(100, "Your name is too long.")
      .required("An item name is required."),
    description: yup
      .string()
      .min(2, "Too short!")
      .max(250, "Too Long")
      .required("A description is required."),
    price: yup
      .number()
      .test(
        "maxDigitsAfterDecimal",
        "Price cannot have more than two decimal places",
        (price) => /^\d+(\.\d{1,2})?$/.test(price)
      )
      .required(),
  });

  const [showAdd, setShowAdd] = useState(false);
  const [showAddConfirmation, setShowAddConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addValues, setAddValues] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const [rating, setRating] = useState();

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.stopPropagation();
    }
  };

  const handleClose = () => {
    setShowAdd(false);
    setShowAddConfirmation(false);
  };

  const handleShowAdd = () => setShowAdd(true);

  const navigate = useNavigate();

  const handleConfirmationClick = () => {
    navigate(`/${addValues.id}`);
  };

  useEffect(() => {
    if (isSubmitting) {
      RecordsAPI.create({ ...addValues, rating }).then((record) => {
        setShowAdd(false);
        setShowAddConfirmation(true);
        setAddValues({ ...addValues, id: record.id });
        setIsSubmitting(false);
      });
    }
  }, [addValues, isSubmitting, rating]);

  const addFormSubmit = (formValues) => {
    setAddValues({ ...addValues, ...formValues });
    setIsSubmitting(true);
  };

  return (
    <div>
      <div onClick={handleShowAdd}>Add Item</div>
      <Formik
        validationSchema={schema}
        onSubmit={addFormSubmit}
        initialValues={{
          name: "",
          description: "",
          price: 0.0,
          image:
            "https://images.unsplash.com/photo-1586253634026-8cb574908d1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Modal show={showAdd} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="addForm.ControlNameInput"
                >
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter the item name..."
                    value={values.name}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}
                    autoFocus
                  />
                  <Form.Control.Feedback>
                    Item name looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="addForm.ControlDescriptionInput"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    rows={3}
                    placeholder="Enter the item description..."
                    onKeyDown={handleKeyDown}
                    value={values.description}
                    onChange={handleChange}
                    isValid={touched.description && !errors.description}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback>
                    Item description looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="addForm.ControlPriceInput"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter the item price..."
                    value={values.price}
                    onChange={handleChange}
                    isValid={touched.price && !errors.price}
                    isInvalid={!!errors.price}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="addForm.ControlImageInput"
                >
                  <Form.Label>Image</Form.Label>
                  <Form.Select
                    aria-label="add-form-image-select"
                    name="image"
                    value={values.image}
                    onChange={handleChange}
                  >
                    <option disabled readOnly>
                      Select an image
                    </option>
                    <option value="https://images.unsplash.com/photo-1586253634026-8cb574908d1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      Camera
                    </option>
                    <option value="https://images.unsplash.com/photo-1714630448768-d4f3ab1a154b?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      Donut
                    </option>
                    <option value="https://images.unsplash.com/photo-1586170737392-383ba61aca98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      Ruler
                    </option>
                    <option value="https://images.unsplash.com/photo-1586941962519-b1a78cf17677?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      Scissors
                    </option>
                    <option value="https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      Sneakers
                    </option>
                    <option value="https://images.unsplash.com/photo-1587287720536-ce7b84c23d35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      Spaghetti
                    </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="addForm.ControlRatingInput"
                >
                  <Form.Label>Rating</Form.Label>
                  <StarRating
                    rating={rating}
                    size={30}
                    active={true}
                    setRating={setRating}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button id="add-item-button" type="submit" onClick={handleSubmit}>
                Add Item
              </Button>
              <Button
                type="button"
                id="delete-item-button"
                onClick={handleClose}
              >
                <span class="text">Cancel</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Formik>
      {/* Confirmation Modal */}
      <Modal show={showAddConfirmation} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Item Successfully Added!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleShowAdd}>
            Add Another Item
          </Button>
          <Button variant="success" onClick={handleConfirmationClick}>
            Go to Item Details
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
