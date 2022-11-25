import React from "react";

function TodoForm({ text, handleInput, handleSubmit }) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
    </div>
  );
}

export default TodoForm;
