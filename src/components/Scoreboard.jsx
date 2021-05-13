import React from 'react';

const Scoreboard = (props) => {
  return (
    <div>
      <p>Score: {props.score}</p>
      <p>Highscore: {props.highScore}</p>
    </div>
  );
};

export default Scoreboard;
