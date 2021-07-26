/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import GoTrue from 'gotrue-js';
import { auth } from '../../firebase';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Input from '../input/Input';
import Button from '../input/Buttons';
import store from '../../redux/store';
import './homepage.css';
 
export default function Homepage() {
    const {getState, dispatch} = store;
    const state = getState();    
    const { email, password, username, tc, tag } = useSelector(state => state);
    const [loading, setLoading] = useState(false);
    const [signupMode, setSignupMode] = useState(false);
    
  // Instantiate the GoTrue auth client with an optional configuration
//   const auth = new GoTrue({
//     APIUrl: 'https://goofy-kare-a5c4ce.netlify.app/.netlify/identity',
//     audience: '',
//     setCookie: false,
//   });

  const apiUrl = `https://api.github.com/users/${username}`;

  const fetchData = async() => {
    if(username) {
     
     try {
         const res = await axios({
          method: 'GET',
          url: `${apiUrl}`,
          headers: {'Content-Type': 'application/json'}
          });
          dispatch({
            type: 'SET_PUBLIC_DATA',
            publicData: res.data
          });
          if(signupMode) {
              register();
          } else {
              signIn();
          }
        }  catch(e) {
            setLoading(false);
            dispatch({
            type: 'SET_TAG',
            error: e.message ? `Not a valid GITHUB username` : 'Error found'
            });
        }
    }  
  }
  

    const signIn = async() => {
        // e.preventDefault();
        await auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log('User logged in');
                setLoading(false);
                dispatch({
                    type: 'SET_USER',
                    user: auth
                });
                dispatch({
                    type: 'SET_AUTHENTICATE',
                    data: true
                });
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
                dispatch({
                  type: 'SET_TAG',
                  error: error.message.indexOf('no user') > -1 ? 'Account not found, please select signup' : error.message
                });             
              });
    }

    const register = async() => {
        // e.preventDefault();
        await auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log('User signed up');
                setLoading(false);
                dispatch({
                    type: 'SET_USER',
                    user: auth
                });
                dispatch({
                    type: 'SET_AUTHENTICATE',
                    data: true
                });
            })  
            .catch((error) => {
                console.log("It's an error", error.message);
                setLoading(false);
                dispatch({
                  type: 'SET_TAG',
                  error: error.message.indexOf('already') > -1 ? 'Account already exist, please select login' : error.message

                }); 
            });
    }

  const signup = async() => {
    setLoading(true);
    await auth
              .signup(email, password)
              .then((response) => {
                  console.log('Confirmation email sent', response);
                  setLoading(false);
                  dispatch({
                    type: 'SET_TAG',
                    error: 'Successful, please check your email'
                  });                 
             })
              .catch((error) => {
                  console.log("It's an error", error);
                  setLoading(false);
                  dispatch({
                    type: 'SET_TAG',
                    error: error.message
                  }); 
              });
  }

  const login = async() => {
      await auth
            .login(email, password, true)
            .then((response) => {
              setLoading(false);
                dispatch({
                    type: 'SET_USER',
                    user: response
                });
                dispatch({
                    type: 'SET_AUTHENTICATE',
                    data: true
                });
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
              dispatch({
                type: 'SET_TAG',
                error: error.message
              });             
            });
    }

    const handleSubmit = () => {
        setLoading(true);
        fetchData();
    }

    return (
        <div className='homepage-banner'>
            <div className='homepage-top'>
                <div className='tag-home'>
                    <p className='slide-home'>
                        Exolve Dashboard App
                    </p>
                    <p className='slide-home'>
                        {signupMode ? 'SIGNUP' : ''}
                        <span 
                            className='mode' 
                            onClick={() => setSignupMode(!signupMode)}
                            >
                            {signupMode ? 'click to login ?' : 'click to signup ?'}
                        </span>
                        {signupMode ? '' : 'LOGIN'}
                    </p>
                    <Input 
                        label='Email'
                        type='text'
                        value={email}
                        defalutValue={email}
                        name='email'
                        placeholder='Enter your email'
                    />
                    <Input 
                        label='Password'
                        type='password'
                        value={password}
                        name='password'
                        placeholder='Enter your password'
                    />
                    <Input 
                        label='Username - github'
                        type='text'
                        value={username}
                        tag={tag}
                        name='username'
                        placeholder='Enter your github username'
                    />
                    <div className={`tc ${!tc && 'tc-red'}`}>
                        <Input 
                        type='checkbox'
                        value={tc}
                        name='tc'
                        placeholder='Enter your github username'
                        /><span>Accept Terms & Conditions</span>
                    </div>
                    {!loading ?
                    <Button
                        name={signupMode ? 'SIGNUP' : 'LOGIN'}
                        classname='btn'
                        onClick={handleSubmit}
                        disabled={!email || !password || !username || !tc}
                    />
                    :
                    <Loader 
                        type='ThreeDots'
                        color='#00bfff'
                        height={80} 
                        width={80} 
                    />}
                </div>
            </div> 
        </div>
    )
}
