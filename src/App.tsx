import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const todos = [new Todo('Learn JavaAcript'), new Todo('Lean React')];
  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
