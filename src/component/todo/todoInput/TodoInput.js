import React, { useState } from "react";

const TodoInput = ({ onTodoEntered }) => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);

  const inputTodo = (e) => {
    setTodo(e.target.value);
  };

  //here im hving doubt
  const dataToPass = () => {
    const data = {
      id: new Date().getTime().toString(),
      name: todo,
    };
    console.log("data", data);
    console.log("todos", todos);
    setTodos((prev) => {
      return [...prev, data];
    });
    console.log("sending todo", todos);
    setTodo("");
    onTodoEntered(todos);
  };

  return (
    <div>
      <span>
        <input type="text" onChange={inputTodo} value={todo} />
        <button>Update</button>
        <button onClick={dataToPass}>Add</button>
      </span>
    </div>
  );
};

export default TodoInput;
