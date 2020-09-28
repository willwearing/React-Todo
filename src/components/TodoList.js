import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="task-list">
      {props.toDo.map((item) => (
        <Todo key={item.id} item={item} toggleTask={props.toggleTask} />
      ))}
      <button className="clear-btn" onClick={props.clearTasks}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoList;
