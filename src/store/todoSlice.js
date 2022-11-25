import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        text: action.payload.text,
        id: Math.random().toString(),
        completed: false,
      });
    },
    deleteHandler(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );

      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, deleteHandler, toggleTodoCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
