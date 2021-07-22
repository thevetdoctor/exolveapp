/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import { useGlobalState } from './Provider';
import GoTrue from 'gotrue-js';
import NewTodo from './components/todos/NewTodo';

function App() {
  const [state, dispatch] = useGlobalState();
  console.log(state);
  const { authenticated, email, password } = state;
  
  return (
    <div className="App">
      {authenticated && <NewTodo />}
      {authenticated && <Dashboard />}
      {!authenticated && <Homepage />}
    </div> 
  ); 
}

export default App;
