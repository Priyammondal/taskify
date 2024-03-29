import { useReducer } from "react";
import { Todo } from "./model";

export type Actions =
  | { type: "add"; payload: string }
  | { type: "addDragDrop"; payload: Todo[] }
  | { type: "delete"; payload: number }
  | { type: "done"; payload: number }
  | { type: "edit"; payload: { id: number; editTodo: string } };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "addDragDrop":
      return [...action.payload];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "edit":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.editTodo }
          : todo
      );
    default:
      return state;
  }
};
const Reducer = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return { todos, dispatch };
};

export default Reducer;
