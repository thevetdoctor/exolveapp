/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

export default function NewTodo() {
  const [userId, setUserId] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    if (userId) {
      setOpenModal(false);
    }
  }, []);

  Modal.setAppElement("div");

  const customStyles = {
    content: {
      backgroundColor: "#3a3e3fb7",
      fontSize: "1.2em",
      top: "44%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexFlow: "column",
      width: "80vw",
      alignItems: "center",
      borderRadius: "1rem",
      justifyContent: "center"
    }
  };
  const formChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const type = e.target[1].value;
    console.log(e.target[1].value);
    //    addTask(name, type);
  };

  return (
    <Modal isOpen={openModal} style={customStyles}>
      <div className="closeBtn" onClick={() => setOpenModal(false)}>
        <span className="close-btn">
          <FaTimes />
        </span>
      </div>
    
    </Modal>
  );
}
