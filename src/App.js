import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `🎉 Winner: ${winner}`
    : `Next Player: ${xIsNext ? "❌" : "⭕"}`;

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "❌" : "⭕";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <p className="status">{status}</p>
      <Board squares={squares} onClick={handleClick} />
      <button className="restart-button" onClick={restartGame}>
        🔄 Restart
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default App;
