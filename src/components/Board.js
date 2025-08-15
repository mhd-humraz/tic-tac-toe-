import React from 'react';
import Square from './Square';
import './Board.css';

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((val, idx) => (
        <Square key={idx} value={val} onClick={() => onClick(idx)} />
      ))}
    </div>
  );
}

export default Board;
