import React, { useContext, useState } from 'react';
import { Context } from 'context';

export const Todo: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const todos = state.todos;
  
  return (
    <div>
      {todos && todos.map((todo: any, index: number) => (
        <div key={index}>
          <p>{todo.title}</p>
          <p>{todo.name}</p>
          <button
            onClick={() =>
              dispatch({
                type: "delete",
                reducer_type: "todo",
                data: { i: index },
              })
            }
          >
            delete
          </button>
        </div>
      ))}
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="input the title"
      />
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
            data: { name: name, title: title },
          })
        }
        disabled={name === '' || title === ''}
      >
        add
      </button>
    </div>
  );
};
