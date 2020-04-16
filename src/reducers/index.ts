interface ITodo {
  name: string;
}

export interface IState {
  todos: ITodo[];
}

export const initialState = {
  todos: [
    {
      name: 'Hello World',
    }
  ],
};

export const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "fetch":
      const old_state = state.todos;
      return { todos: old_state.concat({ name: action.data.name }) };
    default:
      return state;
  }
};
