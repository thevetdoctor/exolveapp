import React from 'react';
import Board from './components/board/Board';
import './App.css';
import Banner from './components/banner/Banner';
import Profile from './components/profile/Profile';
import Todos from './components/todos/Todos';
import UserNavigation from './components/usernavigation/UserNavigation';

function App() {
 
  return (
    <div className="App">
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
        </div>
      </div>
    </div> 
  );
}

export default App;
