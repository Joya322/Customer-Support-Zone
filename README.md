# Live Link: [http://hissing-sugar.surge.sh/]

## Questions and Answers:

# What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript files. It is primarily used with React to describe how the user interface should look. Instead of using complex JavaScript functions like React.createElement(), JSX provides a cleaner and more readable way to create UI elements. It allows developers to combine UI structure and logic within the same component, making the code easier to understand and maintain. JSX also supports embedding JavaScript expressions inside curly braces {}, which makes dynamic content rendering simple and powerful. Although browsers do not understand JSX directly, tools like Babel convert it into regular JavaScript before execution. Overall, JSX improves code readability, simplifies UI development, and enhances the developer experience when building applications with React.

## What is the difference between State and Props?

In React, State and Props are both used to manage data in components, but they serve different purposes. Props (short for properties) are used to pass data from a parent component to a child component. They are read-only, meaning a child component cannot modify the props it receives. Props help make components reusable and dynamic because different values can be passed to the same component. On the other hand, State is used to store data that belongs to a component and can change over time. State is managed inside the component itself and can be updated using functions like setState (in class components) or useState (in functional components). When state changes, React automatically re-renders the component to reflect the updated data. In short, Props are external and immutable (passed from parent), while State is internal and mutable (managed within the component).

## What is the useState hook, and how does it work?

In React, the useState hook is a built-in function that allows functional components to manage state. Before hooks were introduced, state could only be used inside class components, but useState made it possible to handle state in functional components as well. It lets you store data that can change over time, such as user input, counters, toggles, or fetched data.

The useState hook works by returning an array with two values: the current state value and a function to update that state. For example:

const [count, setCount] = useState(0);


Here, count is the current state value, and setCount is the function used to update it. The 0 is the initial state value. Whenever setCount is called (e.g., setCount(count + 1)), React updates the state and automatically re-renders the component to reflect the new value in the UI.


## How can you share state between components in React?

In React, state is local to the component where it is created, so to share state between components, you need to move it to a common place. The most common way is called lifting state up, where you place the shared state in the closest common parent component and then pass it down to child components using props. The parent manages the state, and children receive the value and any update functions as props, ensuring all components stay synchronized.

Another way to share state is by using the Context API, which allows you to provide state globally to many components without passing props manually through every level (avoiding “prop drilling”). For larger or more complex applications, external state management libraries like Redux can be used to manage global state in a centralized store that multiple components can access.


## How is event handling done in React?

In React, event handling is done using a syntax similar to HTML, but with some important differences. Events in React are written in camelCase (such as onClick, onChange, onSubmit) instead of lowercase, and instead of passing a string, you pass a function as the event handler.

For example:

function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}


Here, handleClick is a function that runs when the button is clicked. Notice that we pass the function reference (handleClick) without calling it.

React uses a system called Synthetic Events, which is a wrapper around the browser’s native events. This ensures that events behave consistently across different browsers.

You can also pass parameters to event handlers using arrow functions:

<button onClick={() => handleClick("Hello")}>Click</button>


Additionally, you can prevent default behavior (like form submission) using event.preventDefault() inside the handler.

