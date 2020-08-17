// https://medium.com/react-courses/follow-this-tutorial-and-become-a-react-developer-in-5-minutes-a-2020-tutorial-e3709513b51e
// https://reactjs.org/tutorial/tutorial.html
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './main/main';
import Header from './header/header';
import Game from './tictactoe/tictactoe.js';
import Oda from './oda/oda.js';
import Clock from './clock/clock.js';
import Books from './books/books.js';
import AddBook from './AddBook/AddBook.js';

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="oda-header">
          <Oda />
        </div>
        <div className="content">
          <div className="App">
            <div className="nav">
              <div className="clock-wrapper">
                <Clock delay="1000" />
              </div>
            </div>
            <div className="main">
              <Books />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
