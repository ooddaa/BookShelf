// https://medium.com/react-courses/follow-this-tutorial-and-become-a-react-developer-in-5-minutes-a-2020-tutorial-e3709513b51e
// https://reactjs.org/tutorial/tutorial.html
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './main/main';
import Header from './header/header';
import Game from './tictactoe/tictactoe.js';
import Oda from './oda/oda.js';
import Books from './books/books.js';

function App() {
  // window.onload(function () {
  //   console.log('window loaded')
  // })
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Header />
    //     <Main version="666" />
    //   </header>
    // </div>
    // <div className="root">

    // </div>
    <div className="App">
      <Oda />
      <Books />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           |
//           NNNNNNNN
//         </p>
//         <p> asdasldkahsl </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           CHANGED
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
