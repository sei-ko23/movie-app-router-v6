import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button } from "react-bootstrap";
  import "./addmovie.css"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [rate, setRate] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitMovie = (e) => {
    e.preventDefault();

    let x = {
      title,
      photo,
      rate,
    };

    if (title === "" || photo === "" || rate === "") {
      return alert("Would you please fill all fields ?");
    }

    addMovie(x);
    setTitle("");
    setPhoto("");
    setRate("");

    closeModal();
  };

  return (
    <div>
      
      <button className="button" onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Type Movie Name</Form.Label>
            <Form.Control
              placeholder="Film Name ..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Movie image url</Form.Label>
            <Form.Control
              placeholder="Film Photo ..."
              onChange={(e) => setPhoto(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Rate your Movie from 0 to 5</Form.Label>
            <Form.Control
              placeholder="Film Rate ..."
              onChange={(e) => setRate(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            onClick={(e) => submitMovie(e)}
          >
            Post Movie
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddMovie;
