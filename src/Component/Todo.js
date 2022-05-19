import React, { useEffect, useState } from "react";
import "./Todo.css";
const Todo = () => {
  //declarig state variable for todo list
  //const [todo, setTodo] = useState();
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("todoLists");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });
  const [isEdit, setIsEdit] = useState();
  const [toggle, setToggle] = useState(false);

  //function to add todos
  const setTodosHandler = () => {
    // if (toggle) {
    //   setTodos(
    //     todos.map((curr) => {
    //       if (curr.id === isEdit) {
    //         return { ...curr, name: todo };
    //       }
    //       return curr;
    //     })
    //   );
    // } else {
    const data = {
      id: new Date().getTime().toString(),
      name: todo,
    };
    setTodos([...todos, data]);
    setTodo("");
    //}
  };

  //to delete a todo
  const deleteTodoHandle = (delId) => {
    const newTodos = todos.filter((current, index) => {
      // return current.id !== delId;
      if (current.id !== delId) {
        return true;
      } else {
        return false;
      }
    });
    setTodos(newTodos);
  };

  //to edit a todo
  const editHandle = (index) => {
    const updatedData = todos.find((current) => {
      return current.id === index;
    });
    setTodo(updatedData.name);
    setIsEdit(index);
    setToggle(true);
  };

  // to update the following edit
  const updateTodo = () => {
    setTodos(
      todos.map((curr) => {
        if (curr.id === isEdit) {
          return { ...curr, name: todo };
        }
        return curr;
      })
    );

    //below method , dont use ever, as i have made a mistake
    // where i was retruing inside of it
    // setTodos(() => {
    //   todos.map((current) => {
    //     if (current.id === isEdit) {
    //       console.log(" if running");
    //       return { ...current, name: todo };
    //     } else {
    //       console.log("else running");
    //       return current;
    //     }
    //   });
    //});
    console.log("after update", todos);
    setTodo("");
    setToggle(false);
  };

  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(todos));
  }, [todos]);

  //rendring the todo list
  return (
    <div className="todoMain">
      <div className="heading">
        <h3 className="heading_titleH3">
          <p className="heading_titleH3-style">Todo</p>
        </h3>
      </div>
      <div className="todoContainer">
        <div className="todoContainer_input">
          <input
            className="todoContainer_input-input"
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <span>
            {toggle ? (
              <button onClick={updateTodo}>update</button>
            ) : (
              <button
                className="todoContainer_input-button"
                onClick={setTodosHandler}
              >
                Add
              </button>
            )}
          </span>
        </div>
        <div className="todoContainer_list">
          <ul className="todoContainer_list-ul">
            {todos.map((currentData) => {
              return (
                <span key={currentData.id}>
                  <li>{currentData.name}</li>
                  <button onClick={() => editHandle(currentData.id)}>
                    edit
                  </button>
                  <button onClick={() => deleteTodoHandle(currentData.id)}>
                    delete
                  </button>
                </span>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
