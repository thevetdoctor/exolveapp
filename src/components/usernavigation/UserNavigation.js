import React, { useState } from 'react';
import GoTrue from 'gotrue-js';
import { IoChevronDownSharp,
        IoChevronUpSharp,
         IoNotificationsSharp, 
         IoPersonSharp,
         IoExitSharp
        } from 'react-icons/io5';
import { useGlobalState } from '../../Provider';
import './usernavigation.css';

export default function UserNavigation() {
    const [, dispatch] = useGlobalState();

    const [nav, setNav] = useState(false);
    const navigate = () => {
        setNav(!nav);
    }
    
    // Instantiate the GoTrue auth client with an optional configuration
    const auth = new GoTrue({
        APIUrl: 'https://goofy-kare-a5c4ce.netlify.app/.netlify/identity',
        audience: '',
        setCookie: false,
    });
  
  const logout = () => {

        const user = auth.currentUser();
        try{
            user
            .logout()
            .then(response => console.log("User logged out"))
            .catch(error => {
                console.log("Failed to logout user: %o", error);
                throw error;
            });

        } catch(error) {
            console.log(error);
        }  

        dispatch({
            type: 'SET_LOGOUT',
        });
    };

    return (
        <div className='usernavigation'>
            <span className='user-notification'>
            <IoNotificationsSharp 
                color='#72809d'
                />
            </span>
            <span className='user-avatar'>
                <IoPersonSharp size='0.9em'/>
            </span>
            <span className='user-action' onClick={() => navigate()}>
                {!nav ? 
                    <IoChevronDownSharp size='0.8em' />
                    :
                    <IoChevronUpSharp size='0.8em' />
                }
            </span>
            <span onClick={() => logout()}>
                    {nav && <IoExitSharp size='0.9em' />}
            </span>
            {/* {nav && <span className='logout'>logout</span>} */}
        </div>
    )
}
