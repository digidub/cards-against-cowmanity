import React, { useEffect, useState } from 'react';

const GridContainer = (props) => {
  const [state, setState] = useState(['cow1', 'cow2', 'cow3']);

  const cowCards = state.map((cow) => {
    return <li>{cow}</li>;
  });

  useEffect(() => {}, []);

  return <ul>{cowCards}</ul>;
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
