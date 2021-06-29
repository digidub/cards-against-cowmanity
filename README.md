# Cards against Cowmanity

A react-based memoory (sorry) card game built using functional components and leveraging the `useState` hook.

## Project Link

[View the project here](https://digidub.github.io/cards-against-cowmanity/)

![App Demo](https://i.imgur.com/8sFK3HK.gif 'App Demo')

## Skills Employed

In building this project I leveraged the following concepts and technologies:

- **Functional Components**
  - This was my first time using functional components instead of class components
  - I found these much easier and more verbose to work with than class components
- **Hooks**
  - I used the `useState` hook to manage state and re-rendering of the card grid.
  - I also used the `useEffect` hook to manage component lifecycle, rather than the class-based `componentDidMount`, `componentDidUpdate`, `componentDidUnMount` functions
    - leaving the dependency array empty mimcs the `componentDidMount` function
    - adding a dependency to the array (e.g. `[images]`) is similar to the `componentDidUpdate` method
    - leaving out the dependency array is equal to both `componentDidMount` and `componentDidUpdate`
- **State vs Props**
  - This project further strengthened my understanding of state vs props
    - Changes to state trigger re-rendering
    - Multiple components that rely on the same state should have it lifted to the lowest common parent component
    - Props are properties that can be passed to child components from the parent
    - State can be passed as props to child components to trigger re-rendering of those components.
