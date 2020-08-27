import React, { useState } from "react";

function TodosComponent() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "Project-Enlight",
      isCompleted: true
    },
    {
      todo: "Listing and statistic work pending",
      isCompleted: false
    },
    {
      todo: "Cooking",
      isCompleted: false
    },
    {
      todo: "Workout",
      isCompleted: true
    }

  ]);

  function createNewTodo(currentTodo) {
    let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    setTodos(todosArray);
  }

  function completeTodo(index) {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }

  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }


  return (
    <div>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={e => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            createNewTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="I can do it!"
      />
      {todos.map((todo, index) => (
        <div key={todo} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isCompleted && <span>&#x2714;</span>}
          </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
          </div>
        </div>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
}
export default TodosComponent;
