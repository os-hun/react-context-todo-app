import { IState } from './index';

export interface Todo {
  title: string;
  name: string;
}

export const initialTodos = [
  {
    title: 'Todo title',
    name: 'Hello World',
  }
]

export const todoReducer = (state: IState, action: any) => {
  switch (action.type) {
    case "add":
      const data = action.data;
      return { 
        todos: state.todos.concat(data),
      };
    case "delete":
      delete state.todos[action.data.i];
      return { ...state };
    default:
      return state;
  }
};
