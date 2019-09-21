import React from 'react';
import './App.css';
import Board from './component/Board'
import Swal from 'sweetalert2'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(400).fill(null),
        }],
      arrWin: [],
      background: "",
      stepNumber: 0,
      xIsNext: true,
      check: false,
      sum: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const newSquaresArr = current.squares.slice();
    if (this.state.check) {
      Swal.fire({
        imageUrl: 'https://www.cointelligence.com/content/wp-content/uploads/2019/02/Game-Over-Hodler.jpg',
        title: 'Game over',
        text: 'Please restart game!!!'
      })
      return;
    }

    else if (newSquaresArr[i] === null) {
      var length = 20;
      var arrTem = [];
      newSquaresArr[i] = this.state.xIsNext ? 'X' : 'O';
      var total = this.state.sum + 1;
      this.setState({
        history: history.concat([{
          squares: newSquaresArr,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        sum: total
      });
      switch (newSquaresArr[i]) {
        case 'O': {
          //hàng
          for (var colum = 1; colum < 6; colum++) {
            if (((newSquaresArr[i - colum] === 'X' && newSquaresArr[i - colum + 6] !== 'X') ||
              (newSquaresArr[i - colum] !== 'X' && newSquaresArr[i - colum + 6] === 'X') ||
              (newSquaresArr[i - colum] !== 'X' && newSquaresArr[i - colum + 6] !== 'X')
            )
              && newSquaresArr[i - colum + 1] === 'O'
              && newSquaresArr[i - colum + 2] === 'O'
              && newSquaresArr[i - colum + 3] === 'O'
              && newSquaresArr[i - colum + 4] === 'O'
              && newSquaresArr[i - colum + 5] === 'O'
            ) {
              arrTem.push(i - colum + 1)
              arrTem.push(i - colum + 2)
              arrTem.push(i - colum + 3)
              arrTem.push(i - colum + 4)
              arrTem.push(i - colum + 5)
              this.setState({
                check: true,
                arrWin: arrTem
              })
              Swal.fire({
                imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: '0 is winner :)',
              })
              return;
            }
          }
          //dọc
          for (var row = 1; row < 6; row++) {
            if (((newSquaresArr[i - row * length] === 'X' && newSquaresArr[i + (-row + 6) * length] !== 'X') ||
              (newSquaresArr[i - row * length] !== 'X' && newSquaresArr[i + (-row + 6) * length] === 'X') ||
              (newSquaresArr[i - row * length] !== 'X' && newSquaresArr[i + (-row + 6) * length] !== 'X')
            )
              && newSquaresArr[i + (-row + 1) * 20] === 'O'
              && newSquaresArr[i + (-row + 2) * 20] === 'O'
              && newSquaresArr[i + (-row + 3) * 20] === 'O'
              && newSquaresArr[i + (-row + 4) * 20] === 'O'
              && newSquaresArr[i + (-row + 5) * 20] === 'O'
            ) {
              arrTem.push(i + (-row + 1) * 20)
              arrTem.push(i + (-row + 2) * 20)
              arrTem.push(i + (-row + 3) * 20)
              arrTem.push(i + (-row + 4) * 20)
              arrTem.push(i + (-row + 5) * 20)
              this.setState({
                check: true,
                arrWin: arrTem
              })
              Swal.fire({
                imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: '0 is winner :)',
              })
              return;
            }
          }
          //chéo phải
          for (var row = 1; row < 6; row++) {
            if (((newSquaresArr[i - row * (length + 1)] === 'X' && newSquaresArr[i + (-row + 6) * (length + 1)] !== 'X') ||
              (newSquaresArr[i - row * (length + 1)] !== 'X' && newSquaresArr[i + (-row + 6) * (length + 1)] === 'X') ||
              (newSquaresArr[i - row * (length + 1)] !== 'X' && newSquaresArr[i + (-row + 6) * (length + 1)] !== 'X')
            )
              && newSquaresArr[i + (-row + 1) * (length + 1)] === 'O'
              && newSquaresArr[i + (-row + 2) * (length + 1)] === 'O'
              && newSquaresArr[i + (-row + 3) * (length + 1)] === 'O'
              && newSquaresArr[i + (-row + 4) * (length + 1)] === 'O'
              && newSquaresArr[i + (-row + 5) * (length + 1)] === 'O'
            ) {
              arrTem.push(i + (-row + 1) * (length + 1))
              arrTem.push(i + (-row + 2) * (length + 1))
              arrTem.push(i + (-row + 3) * (length + 1))
              arrTem.push(i + (-row + 4) * (length + 1))
              arrTem.push(i + (-row + 5) * (length + 1))
              this.setState({
                check: true,
                arrWin: arrTem
              })
              Swal.fire({
                imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: '0 is winner :)',
              })
              return;
            }
          }

          //chéo trái
          for (var row = 1; row < 6; row++) {
            if (((newSquaresArr[i - row * (length - 1)] === 'X' && newSquaresArr[i + (-row + 6) * (length - 1)] !== 'X') ||
              (newSquaresArr[i - row * (length - 1)] !== 'X' && newSquaresArr[i + (-row + 6) * (length - 1)] === 'X') ||
              (newSquaresArr[i - row * (length - 1)] !== 'X' && newSquaresArr[i + (-row + 6) * (length - 1)] !== 'X')
            )
              && newSquaresArr[i + (-row + 1) * (length - 1)] === 'O'
              && newSquaresArr[i + (-row + 2) * (length - 1)] === 'O'
              && newSquaresArr[i + (-row + 3) * (length - 1)] === 'O'
              && newSquaresArr[i + (-row + 4) * (length - 1)] === 'O'
              && newSquaresArr[i + (-row + 5) * (length - 1)] === 'O'
            ) {
              arrTem.push(i + (-row + 1) * (length - 1))
              arrTem.push(i + (-row + 2) * (length - 1))
              arrTem.push(i + (-row + 3) * (length - 1))
              arrTem.push(i + (-row + 4) * (length - 1))
              arrTem.push(i + (-row + 5) * (length - 1))
              this.setState({
                check: true,
                arrWin: arrTem
              })
              Swal.fire({
                imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: '0 is winner :)',
              })
              return;
            }
          }
          break;


        }
        case 'X': {
          //hàng
          for (var colum = 1; colum < 6; colum++) {
            if (((newSquaresArr[i - colum] === 'O' && newSquaresArr[i - colum + 6] !== 'O') ||
              (newSquaresArr[i - colum] !== 'O' && newSquaresArr[i - colum + 6] === 'O') ||
              (newSquaresArr[i - colum] !== 'O' && newSquaresArr[i - colum + 6] !== 'O')
            )
              && newSquaresArr[i - colum + 1] === 'X'
              && newSquaresArr[i - colum + 2] === 'X'
              && newSquaresArr[i - colum + 3] === 'X'
              && newSquaresArr[i - colum + 4] === 'X'
              && newSquaresArr[i - colum + 5] === 'X'
            ) {
              arrTem.push(i - colum + 1)
              arrTem.push(i - colum + 2)
              arrTem.push(i - colum + 3)
              arrTem.push(i - colum + 4)
              arrTem.push(i - colum + 5)
              this.setState({
                check: true,
                arrWin: arrTem
              })
              Swal.fire({
                imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: 'X is winner :)',
              })
              return;
            }
          }


          //dọc
          for (var row = 1; row < 6; row++) {
            if (((newSquaresArr[i - row * length] === 'O' && newSquaresArr[i + (-row + 6) * length] !== 'O') ||
              (newSquaresArr[i - row * length] !== 'O' && newSquaresArr[i + (-row + 6) * length] === 'O') ||
              (newSquaresArr[i - row * length] !== 'O' && newSquaresArr[i + (-row + 6) * length] !== 'O')
            )
              && newSquaresArr[i + (-row + 1) * 20] === 'X'
              && newSquaresArr[i + (-row + 2) * 20] === 'X'
              && newSquaresArr[i + (-row + 3) * 20] === 'X'
              && newSquaresArr[i + (-row + 4) * 20] === 'X'
              && newSquaresArr[i + (-row + 5) * 20] === 'X'
            ) {
              arrTem.push(i + (-row + 1) * 20)
              arrTem.push(i + (-row + 2) * 20)
              arrTem.push(i + (-row + 3) * 20)
              arrTem.push(i + (-row + 4) * 20)
              arrTem.push(i + (-row + 5) * 20)
              this.setState({
                check: true,
                arrWin: arrTem
              })
              Swal.fire({
                imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: 'X is winner :)',
              })
            }
          }
          //chéo phải
          for (var row = 1; row < 6; row++) {
            if (((newSquaresArr[i - row * (length + 1)] === 'O' && newSquaresArr[i + (-row + 6) * (length + 1)] !== 'O') ||
              (newSquaresArr[i - row * (length + 1)] !== 'O' && newSquaresArr[i + (-row + 6) * (length + 1)] === 'O') ||
              (newSquaresArr[i - row * (length + 1)] !== 'O' && newSquaresArr[i + (-row + 6) * (length + 1)] !== 'O')
            )
              && newSquaresArr[i + (-row + 1) * (length + 1)] === 'X'
              && newSquaresArr[i + (-row + 2) * (length + 1)] === 'X'
              && newSquaresArr[i + (-row + 3) * (length + 1)] === 'X'
              && newSquaresArr[i + (-row + 4) * (length + 1)] === 'X'
              && newSquaresArr[i + (-row + 5) * (length + 1)] === 'X'
            ) {
              arrTem.push(i + (-row + 1) * (length + 1))
              arrTem.push(i + (-row + 2) * (length + 1))
              arrTem.push(i + (-row + 3) * (length + 1))
              arrTem.push(i + (-row + 4) * (length + 1))
              arrTem.push(i + (-row + 5) * (length + 1))
              this.setState({
                check: true,
                arrWin: arrTem
              })
              Swal.fire({
                imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: 'X is winner :)',
              })
            }
          }


          //chéo trái
          for (var row = 1; row < 6; row++) {
            if (((newSquaresArr[i - row * (length - 1)] === 'O' && newSquaresArr[i + (-row + 6) * (length - 1)] !== 'O') ||
              (newSquaresArr[i - row * (length - 1)] !== 'O' && newSquaresArr[i + (-row + 6) * (length - 1)] === 'O') ||
              (newSquaresArr[i - row * (length - 1)] !== 'O' && newSquaresArr[i + (-row + 6) * (length - 1)] !== 'O')
            )
              && newSquaresArr[i + (-row + 1) * (length - 1)] === 'X'
              && newSquaresArr[i + (-row + 2) * (length - 1)] === 'X'
              && newSquaresArr[i + (-row + 3) * (length - 1)] === 'X'
              && newSquaresArr[i + (-row + 4) * (length - 1)] === 'X'
              && newSquaresArr[i + (-row + 5) * (length - 1)] === 'X'
            ) {
              arrTem.push(i + (-row + 1) * (length - 1))
              arrTem.push(i + (-row + 2) * (length - 1))
              arrTem.push(i + (-row + 3) * (length - 1))
              arrTem.push(i + (-row + 4) * (length - 1))
              arrTem.push(i + (-row + 5) * (length - 1))
              this.setState({
                check: true,
                arrWin: arrTem
              })
              Swal.fire({
                imageUrl: 'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: 'X is winner :)',
              })
            }
          }
          break;
        }
      }
    }
    else return;
  }
  handleClickReset() {
    this.setState({
      history: [
        {
          squares: Array(400).fill(null),
        }],
      arrWin: [],
      stepNumber: 0,
      xIsNext: true,
      check: false,
      sum: 0
    })
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    const sum = 'Number of rounds: ' + (this.state.sum);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <option key={move} onClick={() => this.jumpTo(move)}>{desc}</option>
      );
    });
    return (
      <div className="game">
        <div className="game-board status2" >
          <div className="status3">
            <h5><u>{status}</u></h5>
            <br></br>
            <br></br>
            <h5><u>{sum}</u></h5>
            <br></br>
            <br></br>
            <button onClick={() => this.handleClickReset()} type="button" class="btn btn-success" >Restart game</button>
            <br></br>
            <br></br>
            <select className="slect" multiple>
              {moves}
            </select>
          </div>
          <Board
            arrWins={this.state.arrWin}
            background={this.state.background}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

export default App;
