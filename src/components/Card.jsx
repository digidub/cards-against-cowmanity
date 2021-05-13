import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));
console.log(images);

const Card = (props) => {
  return <img src={images[props.image].default} alt='cow' />;
};

export default Card;
