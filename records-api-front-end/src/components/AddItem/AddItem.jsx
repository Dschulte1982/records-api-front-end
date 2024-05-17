import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import StarRating from "../StarRating";
import { RecordsAPI } from "../../apis/RecordsAPI";
import * as formik from "formik";
import * as yup from "yup";

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
      .string()
      .required()
      .matches(/^[0-9]*\.[0-9]{2}$/, "Invalid price"),
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

  const onChangeAddHandler = (attribute) => {
    return (event) => {
      setAddValues({ ...addValues, [attribute]: event.target.value });
    };
  };

  const handleClose = () => {
    setShowAdd(false);
    setShowAddConfirmation(false);
  };

  const handleShowAdd = () => setShowAdd(true);

  const navigate = useNavigate();

  // const handleAddClick = () => {
  //   RecordsAPI.create({ ...addValues, rating }).then((record) => {
  //     setShowAdd(false);
  //     setShowAddConfirmation(true);
  //     setAddValues({ ...addValues, id: record.id });
  //   });
  // };

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
          price: "",
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
                    Description looks good!
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
                    type="string"
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
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add Item
              </Button>
              <Button type="button" variant="danger" onClick={handleClose}>
                Cancel
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
