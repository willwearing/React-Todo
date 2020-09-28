import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

//making basic to do list
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
  constructor() {
    super();
    this.state = {
      toDo,
    };
  }

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      toDo: [...this.state.toDo, newTask],
    });
  };

  toggleTask = (itemId) => {
    this.setState({
      toDo: this.state.toDo.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearTasks = (e) => {
    e.preventDefault();
    this.setState({
      toDo: this.state.toDo.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo App</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          toDo={this.state.toDo}
          toggleTask={this.toggleTask}
          clearTasks={this.clearTasks}
        />
      </div>
    );
  }
}

export default App;
