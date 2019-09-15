import React from 'react';
import './App.css';
import Board from './component/Board'
class App extends React.Component {
  render() {
    return (
      <div >
        <div>
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default App;
