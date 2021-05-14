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
  return (
    <div
      className={'image'}
      style={{ backgroundImage: 'url(' + images[props.image].default + ')' }}
      data-key={props.image}
      onClick={props.clickFunction}
    />
  );
};

export default Card;
