import { createContext, Dispatch } from 'react';
import { IState } from '../reducers';

export interface IContext {
  state: IState;
  dispatch: Dispatch<any>;
}

export const Context = createContext({} as IContext);
