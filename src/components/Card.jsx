import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace('./', '')] = r(item));
  });
  return images;
}
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const Card = (props) => {
  return <img src={images[props.image].default} alt={props.image} onClick={props.clickFunction} />;
};

export default Card;
