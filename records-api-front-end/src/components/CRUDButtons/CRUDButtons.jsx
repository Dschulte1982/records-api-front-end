import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "../StarRating";
import { RecordsAPI } from "../../apis/RecordsAPI";
import * as formik from "formik";
import * as yup from "yup";
import "./styles.css";

export const CRUDButtons = ({ record, setRecordDetails }) => {
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

  const [rating, setRating] = useState(record.rating);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [values, setValues] = useState({
    id: record.id,
    name: record.name,
    description: record.description,
    price: record.price,
    image: record.image,
  });

  useEffect(() => {
    if (isSubmitting) {
      RecordsAPI.update({ ...values, rating }).then(() => {
        setRecordDetails({ ...values, rating });
        setShowEdit(false);
        setShowEditConfirmation(true);
      });
    }
  }, [values, isSubmitting, rating, setRecordDetails]);

  const navigate = useNavigate();

  const handleClose = () => {
    setShowEdit(false);
    setShowDelete(false);
    setShowEditConfirmation(false);
    setShowDeleteConfirmation(false);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  const handleDeleteClose = () => {
    setShowDeleteConfirmation(false);
    navigate(`/`);
  };

  const handleShowEdit = () => setShowEdit(true);
  const handleShowDelete = () => setShowDelete(true);

  const handleDeleteClick = (id) => {
    RecordsAPI.delete(id).then(() => {
      setShowDelete(false);
      setShowDeleteConfirmation(true);
    });
  };

  const editFormSubmit = (formValues) => {
    setValues({ ...values, ...formValues });
    setIsSubmitting(true);
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
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            onSubmit={editFormSubmit}
            initialValues={{
              name: values.name,
              description: values.description,
              price: values.price,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="editForm.ControlNameInput"
                >
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
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
                  controlId="editForm.ControlDescriptionInput"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
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
                  controlId="editForm.ControlPriceInput"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    isValid={touched.price && !errors.price}
                    isInvalid={!!errors.price}
                  />
                  <Form.Control.Feedback>
                    Price looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
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
                <Button type="submit">Submit form</Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
      {/* Delete Modal*/}
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item: {values.name}</Modal.Title>
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
      {/* Edit Confirmation Modal */}
      <Modal show={showEditConfirmation} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Item has been successfully edited!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteConfirmation} onHide={handleDeleteClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Item has been successfully deleted!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Stack>
  );
};

CRUDButtons.propTypes = {
  record: PropTypes.object,
};
