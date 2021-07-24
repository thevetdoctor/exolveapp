/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import NewTodo from './components/todos/NewTodo';
import store from './redux/store';
    
function App() {
  const {getState, dispatch} = store;
  const state = getState();
  const { authenticated } = useSelector(state => state);
  
  return (
    <div className="App">
      {authenticated && <NewTodo />}
      {authenticated && <Dashboard />}
      {!authenticated && <Homepage />}
    </div> 
  ); 
}

export default App;
