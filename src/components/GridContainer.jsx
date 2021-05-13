import React, { useEffect, useState } from 'react';
import { AppLogic } from './AppLogic';

const GridContainer = (props) => {
  const [state, setState] = useState(['cow1', 'cow2', 'cow3']);
  const [clicked, setClicked] = useState([]);

  const handleClick = (e) => {
    const clickedCow = e.target.innerText;
    console.log(clickedCow);
    if (AppLogic.checkIfClicked(clickedCow, clicked)) console.log('YOU LOSE!!!');
    else setClicked(clicked.concat(clickedCow));
    const randomised = AppLogic.shuffle(state);
    setState(randomised);
  };

  const cowCards = state.map((cow) => {
    return (
      <li key={cow} onClick={handleClick}>
        {cow}
      </li>
    );
  });

  return (
    <div>
      <ul>{cowCards}</ul>
    </div>
  );
};

export default GridContainer;

// const GameArray = () => {
//   const [state, setState] = useState(['cow1', 'cow2', 'cow3']);

//   const cowCards = state.map((cow) => {
//     <li>{cow}</li>;
//   });

//   useEffect(() => {}, []);

//   return <ul>{cowCards}</ul>;
// };
