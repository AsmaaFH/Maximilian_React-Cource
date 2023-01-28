import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
