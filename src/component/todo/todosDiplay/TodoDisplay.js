import React from "react";

const TodoDisplay = ({ todos }) => {
  return (
    <div>
      <div>
        <ul>
          {todos.map((current) => {
            return (
              <li key={current.id}>
                <p>{current.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoDisplay;
