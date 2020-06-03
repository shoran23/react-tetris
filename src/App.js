import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './components/Square.js'
import Gameboard from './components/Gameboard.js'
import Navigation from './components/Navigation'

const x = 0
const y = 1

class App extends React.Component {
  state = {
    curPosition: [],
    lastPosition: [],
    gameboard: [
      {
          name: 'Gameboard 6x10',
          size: [6,10],
          coordinates: [
              '0,9','1,9','2,9','3,9','4,9','5,9',
              '0,8','1,8','2,8','3,8','4,8','5,8',
              '0,7','1,7','2,7','3,7','4,7','5,7',
              '0,6','1,6','2,6','3,6','4,6','5,6',
              '0,5','1,5','2,5','3,5','4,5','5,5',
              '0,4','1,4','2,4','3,4','4,4','5,4',
              '0,3','1,3','2,3','3,3','4,3','5,3',
              '0,2','1,2','2,2','3,2','4,2','5,2',
              '0,1','1,1','2,1','3,1','4,1','5,1',
              '0,0','1,0','2,0','3,0','4,0','5,0'
          ]
      }
  ]
  }

  // class to create gameboard based on size

  clearBoard = () => {
    let board = document.getElementsByClassName('square')
    for(let i=0;i<board.length;i++){
      board[i].style.backgroundColor = "lightblue"
    }
  }

  updatePosition = arr => {
    // get board
    let board = document.getElementsByClassName('square')
    // set positions
    this.setState({lastPosition: this.state.curPosition})
    this.setState({curPosition: arr})
    
    

  }



  render() {
    return (
      <div className="App">
        <Gameboard 
          position={this.state.position}
          gameboard={this.state.gameboard[0]}
        />
        <Navigation
          movePosition={this.movePosition}
          clearBoard={this.clearBoard}
        />
      </div>
    );
  }
}
export default App;
