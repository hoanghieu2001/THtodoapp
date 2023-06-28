import Button from "./Button";
import Checkbox from "./Checkbox";
import React, { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <Checkbox checked={todo.completed}
      />
      {todo.title}
      <Button variant="danger" className="hide" >Delete</Button>
    </div>
  );
}
