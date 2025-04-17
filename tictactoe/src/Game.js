import { useState } from 'react';
import Square from './Square.js';

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, sethistory] = useState(Array(9).fill(null));
  const currentSquares = history[history.length - 1];

  function handleClick(nextSquares) {
    sethistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
       <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}