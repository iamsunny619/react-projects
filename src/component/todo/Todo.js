import React, { useState } from "react";
import TodoInput from "./todoInput/TodoInput";
import TodoDisplay from "./todosDiplay/TodoDisplay";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingId, setUpdatingId] = useState();

  // to update single todo
  const onTodoEntered = (todosFromInput) => {
    setTodos([...todos, todosFromInput]);
  };

  return (
    <div>
      <TodoInput onTodoEntered={onTodoEntered} />
      <TodoDisplay todos={todos} />
    </div>
  );
};

export default Todo;
