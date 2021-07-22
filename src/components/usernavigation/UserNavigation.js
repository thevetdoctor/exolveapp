import React from 'react';
import { IoChevronDownSharp, 
         IoNotificationsSharp, 
         IoPersonSharp
        } from 'react-icons/io5';
import './usernavigation.css';

export default function UserNavigation() {
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
            <span className='user-action'>
                <IoChevronDownSharp size='0.7em' />
            </span>
        </div>
    )
}
