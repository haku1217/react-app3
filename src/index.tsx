import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD
import './style.css';


interface ISquareProps{
  value: any;
  // value: string | ;
  onClick: () => void;
}
  
function Square(props: ISquareProps){
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

interface IBoardProps{
  // squares: ('O' | 'X' | null)[];
  squares: Array<'O' | 'X' | null>;
  onClick: (i: number) => void;
}

class Board extends React.Component<IBoardProps, {}> {
  public renderSquare(i: number) {
    return (
      <div>
        <Square 
          value={this.props.squares[i]}
          onClick={() => {this.props.onClick(i)}}
        />
      </div>
    );
  }

  public render() {
    return (
      <div>
=======
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

interface ISquareProps{
  value: number;
}

interface IState{
  value: string;
}

class Square extends React.Component<ISquareProps,IState> {
  public render() {
    return (
      <button className="square">
        <div>
          {this.props.value}
        </div>
      </button>
    );
  }
}


class Board extends React.Component{
  renderSquare(i: number) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
>>>>>>> origin/master
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
interface IHistoryData{
  squares: Array<'O' | 'X' | null>;
}

interface IGameState{
  history: IHistoryData[];
  xIsNext: boolean;
  stepNumber: number;
}
class Game extends React.Component<{}, IGameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
      // this.handleClick = this.handleClick.bind(this);
  }
  public handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
      
    public jumpTo(step: number){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    public render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start' ;
            return(
                <li key={move} >
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        });

        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        }else{
          status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');
        }

        return (
        <div className="game">
            <div className="game-board">
                <Board 
                squares={current.squares}
                onClick={(i)=> this.handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
        );
    }
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
=======
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
>>>>>>> origin/master
