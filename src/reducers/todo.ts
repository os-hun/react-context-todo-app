import { IState } from './index';

export interface Todo {
  name: string;
}

export const initialTodos = [
  {
    name: 'Hello World',
  }
]

export const todoReducer = (state: IState, action: any) => {
  switch (action.type) {
    case "add":
      const old_state = state.todos;
      return { todos: old_state.concat({ ...action.data }) };
    default:
      return state;
  }
};
