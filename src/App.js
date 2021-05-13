import './App.css';
import React, { useState } from 'react';
import GridContainer from './components/GridContainer';
import { AppLogic } from './components/AppLogic';
import Scoreboard from './components/Scoreboard';

const App = (props) => {
  const [cows, setCows] = useState(['cow1', 'cow2', 'cow3']);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    const clickedCow = e.target.innerText;
    console.log(clickedCow);
    if (AppLogic.checkIfClicked(clickedCow, clicked)) {
      console.log('YOU LOSE!!!');
      if (score > highScore) setHighScore(score);
      setScore((score) => 0);
      setClicked([]);
    } else {
      setClicked(clicked.concat(clickedCow));
      setScore((score) => score + 1);
    }
    const randomised = AppLogic.shuffle(cows);
    setCows(randomised);
  };

  return (
    <div className='App'>
      <p>it works!</p>
      <GridContainer cows={cows} clicked={clicked} clickFunction={handleClick} />
      <Scoreboard score={score} highScore={highScore} />
      {props.children}
    </div>
  );
};

export default App;
