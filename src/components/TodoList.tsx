import React from "react";
import "./styles.css";
import { Todo } from "../model";
import { Actions } from "../reducers";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  todos: Array<Todo>;
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  dispatch: React.Dispatch<Actions>;
  completedTodos: Array<Todo>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({
  todos,
  dispatch,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos ${snapshot.isDraggingOver && "dragactive"}`}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                // setTodos={setTodos}
                dispatch={dispatch}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos remove ${
              snapshot.isDraggingOver && "dragcomplete"
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                // setTodos={setTodos}
                dispatch={dispatch}
                completed={true}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
