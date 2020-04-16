import React, { useContext } from 'react';
import { Context } from 'context';

export const Todo: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const todos = state.todos;
  
  return (
    <div>
      {todos.map((todo: any, index: number) => (
        <p key={index}>{todo.name}</p>
      ))}
      <button
        onClick={() =>
          dispatch({
            type: "add",
            reducer_type: "todo",
            data: { name: "Imshun" },
          })
        }
      >
        add
      </button>
    </div>
  );
};
