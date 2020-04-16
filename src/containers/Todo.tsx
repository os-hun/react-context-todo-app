import React, { useContext } from 'react';
import { Context } from 'context';

export const Todo: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const todos = state.todos;
  
  return (
    <div>
      {todos.map(todo => (
        <p>{todo.name}</p>
      ))}
      <button onClick={() => dispatch({ type: 'fetch', data: { name: 'Imshun' } })}>
        fetch
      </button>
    </div>
  )
};
