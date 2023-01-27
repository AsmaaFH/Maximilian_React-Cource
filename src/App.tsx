import './App.css';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const todos = [new Todo('Learn JavaAcript'), new Todo('Lean React')]
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;