import React, { useState } from 'react';
import GoTrue from 'gotrue-js';
import Loader from 'react-loader-spinner';
import Input from '../input/Input';
import Button from '../input/Buttons';
import { useGlobalState } from '../../Provider';
import './homepage.css';

export default function Homepage() {
    const [state, dispatch] = useGlobalState();
    const { email, password, username, tag } = state;

    const [loading, setLoading] = useState(false);
    const [signupMode, setSignupMode] = useState(true);
    
  // Instantiate the GoTrue auth client with an optional configuration
  const auth = new GoTrue({
    APIUrl: 'https://goofy-kare-a5c4ce.netlify.app/.netlify/identity',
    audience: '',
    setCookie: false,
  });

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
                  });                 })
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
              console.log(response);
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
        console.log(email, password, username);
        if(signupMode) {
            signup();
        } else {
            login();
        }
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
                    {!loading ?
                    <Button
                        name={signupMode ? 'SIGNUP' : 'LOGIN'}
                        classname='btn'
                        onClick={handleSubmit}
                        disabled={!email || !password || !username}
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
