import React from "react";
import { useDispatch } from "react-redux";
import { deleteHandler, toggleTodoCompleted } from "../store/todoSlice";

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />
      <div>
        {text}{" "}
        <button onClick={() => dispatch(deleteHandler({ id }))}>delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
