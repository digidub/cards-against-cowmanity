import './App.css';
import React, { useState, useEffect } from 'react';
import GridContainer from './components/GridContainer';
import { AppLogic } from './components/AppLogic';
import Scoreboard from './components/Scoreboard';
import Header from './components/Header';

const App = (props) => {
  const [cows, setCows] = useState([
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
  ]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    console.log(e);
    const clickedCow = e.target.alt;
    console.log(clickedCow);
    if (AppLogic.checkIfClicked(clickedCow, clicked)) {
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

  useEffect(() => {
    const randomised = AppLogic.shuffle(cows);
    setCows(randomised);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <Header />
      <Scoreboard score={score} highScore={highScore} />
      <GridContainer cows={cows} clicked={clicked} clickFunction={handleClick} />
    </div>
  );
};

export default App;
