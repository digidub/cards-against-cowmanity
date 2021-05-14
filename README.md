# Cards of Cowmanity

A react-based memoory (sorry) card game.

## Features

- Built with functional components
- 16 card deck that is shuffled on click
- Scoreboard and High Score that is updated dynamically.

## Learning Outcomes

- Using functional components and their key differences versus class components, namely:
  - `useState` for managing state variables and update functions, rather than the state object used in the class constructor
  - the `useEffect` function and how it differs from the the `componentDidMount`, `componentDidUpdate`, `componentDidUnMount` functions
    - leaving the dependency array empty mimcs the `componentDidMount` function
    - adding a dependency to the array (e.g. `[images]`) is similar to the `componentDidUpdate` method
    - leaving out the dependency array is equal to both `componentDidMount` and `componentDidUpdate`
  - Further reinforcement of using state and props
