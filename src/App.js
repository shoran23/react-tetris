import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './components/Square.js'
import Gameboard from './components/Gameboard.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Gameboard />
      </div>
    );
  }
}
export default App;
