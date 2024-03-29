import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { Actions } from "../reducers";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  dispatch: React.Dispatch<Actions>;
  completed?: boolean;
}

const SingleTodo: React.FC<Props> = ({
  index,
  todo,
  todos,
  dispatch,
  completed,
}) => {
  console.log("todo-->", todo);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
    dispatch({ type: "done", payload: id });
  };
  const handleDelete = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({ type: "delete", payload: id });
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    // setTodos(
    //   todos.map((item) => (item.id === id ? { ...item, todo: editTodo } : item))
    // );
    dispatch({ type: "edit", payload: { id, editTodo } });
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__single ${snapshot.isDragging && "drag"}`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              type="text"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
          <div className="icon__wrapper">
            <span
              className={`icon ${completed ? "disabled" : ""}`}
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span
              className={`icon ${completed ? "disabled" : ""}`}
              onClick={() => handleDelete(todo.id)}
            >
              <AiFillDelete />
            </span>
            <span
              className={`icon ${completed ? "disabled" : ""}`}
              onClick={() => handleDone(todo.id)}
            >
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
