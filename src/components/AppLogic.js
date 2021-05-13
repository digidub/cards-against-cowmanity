export const AppLogic = (() => {
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return {
    shuffle,
  };
})();
