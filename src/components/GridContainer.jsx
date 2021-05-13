import React from 'react';
import Card from './Card';
import '../assets/stylesheets/GridContainer.css';

const GridContainer = (props) => {
  const cowCards = props.cows.map((cow) => {
    return (
      <div className='grid-container' key={cow}>
        <Card image={cow} clickFunction={props.clickFunction} />
      </div>
    );
  });

  return <div className='game-grid'>{cowCards}</div>;
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
