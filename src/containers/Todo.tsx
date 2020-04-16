import React, { useContext, useState } from 'react';
import { Context } from 'context';

export const Todo: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState('');
  const todos = state.todos;
  
  return (
    <div>
      {todos.map((todo: any, index: number) => (
        <p key={index}>{todo.name}</p>
      ))}
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="input the name"
      />
      <button
        onClick={() =>
          dispatch({
            type: "add",
            reducer_type: "todo",
            data: { name: name },
          })
        }
        disabled={name === ''}
      >
        add
      </button>
    </div>
  );
};
