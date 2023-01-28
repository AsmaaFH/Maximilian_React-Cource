import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo('Learn JavaAcript'), new Todo('Lean React')];

  const addTodoHandler = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
