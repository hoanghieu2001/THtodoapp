import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos = [] }) {
  
  const items = todos.map((todo) => <TodoItem key={todo.id} todo={todo}  />);

  return <div className="todo-list">{items}</div>;
}
