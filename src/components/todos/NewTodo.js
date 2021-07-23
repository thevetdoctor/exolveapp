/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import Modal from "react-modal";
import './newtodo.css';

export default function NewTodo() {
  const {getState, dispatch} = store;
  const state = getState();
  const [todoText, setTodoText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const closeModal = () => {
    dispatch({
        type: 'ADD_TODO',
        addTodo: false
    });
};

  Modal.setAppElement("div");

  const customStyles = {
    content: {
      background: "rgba(255,255,255, 0.3)",
      fontSize: "1.2em",
      top: "54%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexFlow: "column",
      width: "25vw",
      alignItems: "center",
      borderRadius: "1rem",
      justifyContent: "center"
    }
  };
  const formChange = (e) => {
    e.preventDefault();
    setTodoText(e.target.value);
  };
  const cancelTodo = () => {
    console.log('Cancelling Todo');
    setTodoText('');
  };
  const saveTodo = () => {
    if(todoText) {
      // create unique ID for TODO
      let str = Math.trunc(Math.random() * 1000);
      let id = `5fa82b63f201f705d1a3ab${str}`;      
      
      dispatch({
        type: 'SAVE_TODO',
        todo: {id, name: todoText, done: false}
      });
      setTodoText('');
    } else {
      console.log('Input field is empty');
      return false;
    }
    console.log(todoText);
  };

  return (
    <Modal isOpen={state.addTodo} style={customStyles}>
      <div className="close-div" onClick={() => closeModal()}>
        <span className="close-btn">
          <FaTimes />
        </span>
      </div>
      <div className='todo-form'>
        <span className='todo-form-header'>New Todo </span>
        <span className='todo-form-tip'>Please write content of TODO in the input below </span>
        <span className='todo-input'>
          <input
            type='text'
            placeholder='Do something ...'
            value={todoText}
            onChange={formChange}
          />
        </span>
        <span className='btn-span'>
          <span className='cancel btn' onClick={() => cancelTodo()}>Cancel</span>
          <span className='add btn' onClick={() => saveTodo()}>Add</span>
        </span>
      </div>
    </Modal>
  );
}
