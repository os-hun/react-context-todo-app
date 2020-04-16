import { todoReducer, Todo, initialTodos } from './todo';

export interface IState {
  todos: Todo[];
}

export const initialState = {
  todos: initialTodos,
};

interface Action {
  reducer_type: 'todo' | undefined;
  type: any;
}

export const reducer = (state: IState, action: Action) => {
  switch (action.reducer_type) {
    case 'todo':
      return todoReducer(state, action)
    default:
      return state
  }
};
