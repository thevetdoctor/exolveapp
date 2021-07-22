/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { useGlobalState } from './Provider';
import GoTrue from 'gotrue-js';
import NewTodo from './components/todos/NewTodo';
// import Todoss from './components/todos/Todoss';

function App() {
  const [state, dispatch] = useGlobalState();
  console.log(state);

  const [email, setEmail] = useState('animalworld.tech@gmail.com');
  const [password, setPassword] = useState('obapass1');
  const [authenticated, setAuthenticated] = useState(false);


  // Instantiate the GoTrue auth client with an optional configuration
  const auth = new GoTrue({
    APIUrl: 'https://goofy-kare-a5c4ce.netlify.app/.netlify/identity',
    audience: '',
    setCookie: false,
  });

  const signup = async() => {
      await auth
              .signup(email, password)
              .then((response) => console.log('Confirmation email sent', response))
              .catch((error) => console.log("It's an error", error));
  }

  const login = async() => {
      await auth
            .login(email, password, true)
            .then((response) => {
              console.log(response);
              dispatch({
                type: 'SET_USER',
                user: response
              }); 
            })
            .catch((error) => console.log(error));
  }
  useEffect(() => {
    if(!state.user) {
      const user = auth.currentUser();
      console.log(user);
      if(!user) {
       login();
      } else {
        dispatch({
          type: 'SET_USER',
          user
        });        
        setAuthenticated(true);
      }
    } else {
      setAuthenticated(true);
    }

    return () => console.log('cleanup App.js')
  }, [state.user]);
  
  useEffect(() => {
    const ques = prompt('Enter your github username', 'thevetdoctor');
    if(ques !== null) {
      dispatch({
        type: 'SET_USERNAME',
        username: ques
      }); 
    }
  }, []);

  return (
    <div className="App">
      {/* <Todoss /> */}
      <NewTodo />
      <Dashboard />
    </div> 
  ); 
}

export default App;
