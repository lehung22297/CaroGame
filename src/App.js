import React from 'react';
import './App.css';
import Board from './component/Board'
class App extends React.Component {
  render() {
    return (
      <div >
        <div className="black">
          <Board />
        </div>
        
      </div>
    );
  }
}

export default App;
