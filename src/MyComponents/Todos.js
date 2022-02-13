import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  let mystyle = {
    minHeight: "100vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={mystyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length == 0
        ? "No TODOS to Display"
        : props.todos.map((todo) => {
            return (
              <>
                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />{" "}
                <hr />
              </>
            );
          })}
    </div>
  );
};
