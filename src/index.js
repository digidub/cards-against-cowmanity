import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Scoreboard from './components/Scoreboard';
import GridContainer from './components/GridContainer';

ReactDOM.render(
  <React.StrictMode>
    <App>
      {(score, highScore, cows, clicked, handleClick) => (
        <Fragment>
          <Scoreboard score={score} highScore={highScore} />
          <GridContainer cows={cows} clicked={clicked} clickFunction={handleClick} />
        </Fragment>
      )}
    </App>{' '}
  </React.StrictMode>,
  document.getElementById('root')
);
