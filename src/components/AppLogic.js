export const AppLogic = (() => {
  const checkIfClicked = (clicked, clickedArray) => {
    if (clickedArray.includes(clicked)) return true;
    return false;
  };
  const addToClickedArray = (clicked, clickedArray) => {
    return clickedArray.concat(clicked);
  };
  const shuffle = (array) => {
    const shuffledArray = [].concat(array.sort(() => Math.random() - 0.5));
    return shuffledArray;
  };

  return {
    checkIfClicked,
    addToClickedArray,
    shuffle,
  };
})();
