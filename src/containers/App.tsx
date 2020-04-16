import React, { useReducer } from 'react';
import { reducer, initialState } from 'reducers';
import { Context } from 'context';
import { Todo } from './Todo';

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <Context.Provider value={{ state, dispatch }}>
      <h1>ReactContextTodoApp</h1>
      <Todo />
    </Context.Provider>
  );
};
