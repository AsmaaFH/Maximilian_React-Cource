import React from 'react';
import Todo from '../models/todos';
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <TodoItem key={index} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
