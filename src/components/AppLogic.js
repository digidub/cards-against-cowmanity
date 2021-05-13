export const AppLogic = (() => {
  const checkIfClicked = (clicked, clickedArray) => {
    if (clickedArray.includes(clicked)) return true;
    return false;
  };
  const addToClickedArray = (clicked, clickedArray) => {
    return clickedArray.concat(clicked);
  };
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return {
    checkIfClicked,
    addToClickedArray,
    shuffle,
  };
})();
