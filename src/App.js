import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const toDo = [
  {
    task: "Learn React",
    id: 1601319252596,
    completed: false,
  },
  {
    task: "Meet Track Team",
    id: 1601319681357,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
