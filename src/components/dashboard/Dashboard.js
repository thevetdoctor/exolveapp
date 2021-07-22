import React from 'react'
import Board from '../board/Board';
import Banner from '../banner/Banner';
import Profile from '../profile/Profile';
import Todos from '../todos/Todos';
import UserNavigation from '../usernavigation/UserNavigation';
import NewTodo from '../todos/NewTodo';
import './dashboard.css';

export default function Dashboard() {
    return (
        <div>
            {/* <span className='refresh'>
                Refresh the page to check your github information!!!
            </span>              */}
            <UserNavigation />
            <h2>Exolve App</h2>
            <div className='app'>
                <div className='app-left'> 
                    <Profile />
                    <Todos />
                </div>
                {/* <div className='top-content'> */}
                {/* </div> */}
                <div>
                <Banner />
                <Board />
                <NewTodo />
                </div>
            </div>
        </div>
    )
}
