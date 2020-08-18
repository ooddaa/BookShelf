// https://medium.com/react-courses/follow-this-tutorial-and-become-a-react-developer-in-5-minutes-a-2020-tutorial-e3709513b51e
// https://reactjs.org/tutorial/tutorial.html
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header/Header.js';
// import Game from './tictactoe/tictactoe.js'; 
import Oda from './Oda/Oda.js';
import Clock from './Clock/Clock.js';
import Books from './Books/Books.js';
import AddBook from './AddBook/AddBook.js';
import Buffet from './Buffet/Buffet.js';

function App() {
  return (
    <div className="container">
      <div className="App">
        {/* <!-- <Header /> --> */}
        <Oda />
        <Clock delay="1000" />
        <div className="nav">
        </div>
        <div className="content">
          <div className="main" style={{ justifyItems: "stretch" }}>
            <Buffet />
            <Books />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
