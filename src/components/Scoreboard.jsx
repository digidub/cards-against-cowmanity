import React from 'react';

const Scoreboard = (props) => {
  return (
    <div>
      <p>SCORE: {props.score}</p>
      <p>HIGHSCORE: {props.highScore}</p>
    </div>
  );
};

export default Scoreboard;
